import React, { useState } from 'react';
import './RegisterPage.css';

const RegisterPage = () => {
   const { form, setForm } = useState({ firstName : "", lastName : "", email : "", password : "" });

   const handleRegister = async (form) => {
        console.log("Register invoked", form);
   }
   
    return (
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-md-6 col-lg-4'>
                    <div className='register-card p-4 border rounded'>
                        <h2 className='text-center mb-4 font-weight-bold '>Register</h2>
                            <form>
                                <div className='mb-4'>
                                    <label htmlFor='firstName' className='form label'>First Name</label>
                                    <input
                                        id='firstName' 
                                        className='form-control' 
                                        type='text' 
                                        placeholder='Enter your first name'
                                        value={form.firstName}
                                        onChange={(e) => setForm(v => ({...v, firstName:e.target.value}))}
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor='firstName' className='form label'>Last Name</label>
                                    <input
                                        id='lastName' 
                                        className='form-control' 
                                        type='text' 
                                        placeholder='Enter your last name'
                                        value={form.lastName}
                                        onChange={(e) => setForm(v => ({...v, lastName:e.target.value}))}
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor='email' className='form label'>Email</label>
                                    <input
                                        id='email' 
                                        className='form-control' 
                                        type='email' 
                                        placeholder='Enter your email'
                                        value={form.email}
                                        onChange={(e) => setForm(v => ({...v, email:e.target.value}))}
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor='password' className='form label'>Password</label>
                                    <input
                                        id='password' 
                                        className='form-control' 
                                        type='password' 
                                        placeholder='Enter your password'
                                        value={form.password}
                                        onChange={(e) => setForm(v => ({...v, password:e.target.value}))}
                                    />
                                </div>
                                
                                <button className='btn btn-primary w-100 mb-3' type='submit' onClick={handleRegister(form)}>Register</button>
                            </form>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;