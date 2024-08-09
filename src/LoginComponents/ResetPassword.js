// src/ResetPassword.js
import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import '../LoginComponents/loginstyle.css'; // Make sure to import your CSS file
import { usersData } from './userData';
import { useLocation, useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { email } = location.state || {};

    const validationSchema = Yup.object().shape({
        password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required')
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = data => {
        const user = usersData.find(user => user.email === email);
        if (user) {
            user.password = data.password;
            alert("Password updated successfully!");
            navigate('/');
        } else {
            alert("Email not found.");
        }
    };

    return (
        <div className="main-container">
            <div className="login-section">
                <div className='login'>
                    <div className="logo">
                        {/* The background image is set via CSS */}
                    </div>
                    <div className='labels'>
                        <p className='wlc-Text'>Password recovery.</p>
                        <p className='login-text'>Password reset</p>
                        <p className='wlc-Text'>Kindly enter a new password.</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='form-contents'>
                            <div>
                                <label>New Password:</label><br />
                                <input
                                    type="password"
                                    {...register('password')}
                                    className={errors.password ? 'is-invalid' : ''}
                                />
                                <div>{errors.password?.message}</div>
                            </div>
                            <div>
                                <label>Confirm Password:</label><br />
                                <input
                                    type="password"
                                    {...register('confirmPassword')}
                                    className={errors.confirmPassword ? 'is-invalid' : ''}
                                />
                                <div>{errors.confirmPassword?.message}</div>
                            </div>
                        </div>
                        <div>
                            <button type="submit" className='sub-btn'>Send</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="image-section2">
                {/* The background image is set via CSS */}
            </div>
        </div>
    );
};

export default ResetPassword;
