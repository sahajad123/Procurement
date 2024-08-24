import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import '../LoginComponents/loginstyle.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required'),
        rememberMe: Yup.boolean()
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');
        if (storedUsername && storedPassword) {
            setValue('username', storedUsername);
            setValue('password', storedPassword);
            setValue('rememberMe', true);
        }
    }, [setValue]);

    const handleLogin = async (data) => {
        try {
            const response = await axios.post('10.11.0.141/api/login', {
                username: data.username,
                password: data.password
            });

            const { token, user } = response.data;

            if (data.rememberMe) {
                localStorage.setItem('username', encodeURIComponent(data.username));
                localStorage.setItem('password', encodeURIComponent(data.password));
            } else {
                localStorage.removeItem('username');
                localStorage.removeItem('password');
            }

            localStorage.setItem('token', token);
            navigate('/Main', { state: { ...user } });
        } catch (error) {
            const errorMessage = error.response?.status === 400
                ? "Invalid username or password."
                : "Server error. Please try again later.";
            alert(errorMessage);
        }
    };
    return (
        <div className="main-container">
            <div className="login-section">
                <div className='login'>
                    <div className="logo"></div>
                    <div className='labels'>
                        <p className='wlc-Text'>Welcome back!</p>
                        <p className='login-text'>Please Sign in</p>
                    </div>

                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className='form-contents'>
                            <div>
                                <label style={{ marginRight: "235px" }}>Username:</label><br />
                                <input
                                    type="text"
                                    {...register('username')}
                                    className={errors.username ? 'is-invalid' : ''}
                                />
                                <div>{errors.username?.message}</div>
                            </div>
                            <div>
                                <label style={{ marginRight: "260px" }}>Password:</label><br />
                                <input
                                    type="password"
                                    {...register('password')}
                                    className={errors.password ? 'is-invalid' : ''}
                                />
                                <div>{errors.password?.message}</div>

                                <div className="remember-forgot-container">
                                    <div className="remember-forgot">
                                        <div className="checkbox-remember">
                                            <input
                                                type="checkbox"
                                                id="rememberMe"
                                                className='remember'
                                                {...register('rememberMe')}
                                            />
                                            <label htmlFor="rememberMe">Remember me</label>
                                        </div>
                                        <Link to="Forgot" className='custom-link'>I forgot my password</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button type="submit" className='sub-btn'>Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="image-section">

            </div>
        </div>
    );
};

export default Login;
