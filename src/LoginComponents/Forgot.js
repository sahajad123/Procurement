import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import '../LoginComponents/loginstyle.css'; // Make sure to import your CSS file
// import { Link } from 'react-router-dom';
import { usersData } from './userData';
import { useNavigate } from 'react-router-dom';

const Forgot = () => {
    const Navigate = useNavigate();
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email address').required('Email is required'),
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = data => {
        const user = usersData.find(user => user.email === data.email);
        if (user) {
            alert("Password recovery email sent!");
            Navigate('10.11.0.141/api/ResetPassword',{ state: { email: data.email } })
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
                        <p className='login-text'>Forgot your password?</p>
                        <p className='wlc-Text'>Kindly enter the email address linked to this account and we will send you a code to enable you change your password.</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='form-contents'>
                            <div>
                                <label>Email address:</label><br />
                                <input
                                    type="text"
                                    {...register('email')}
                                    className={errors.email ? 'is-invalid' : ''}
                                />
                                <div>{errors.email?.message}</div>
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

export default Forgot;
