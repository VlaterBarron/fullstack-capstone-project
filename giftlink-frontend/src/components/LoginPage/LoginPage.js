import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
    //insert code here to create useState hook variables for email, password
    const [ form, setForm ] = useState({
        email : "",
        password : ""
    });

    // insert code here to create handleLogin function and include console.log
    const handleLogin = async (form) => {
        console.log("Login successfull ", form);
    }

        return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="login-card p-4 border rounded">
              <h2 className="text-center mb-4 font-weight-bold">Login</h2>
                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label'>Email</label>
                        <input
                            id='email' 
                            className='form-control' 
                            type='email' 
                            placeholder='Enter your email'
                            value={form.email}
                            onChange={(e) => setForm(v => ({...v, email:e.target.value}))}
                        />
                    </div>
                        <div className='mb-3'>
                        <label htmlFor='password' className=''>Password</label>
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
                    <button className='btn btn-primary w-100 mb-3' onClick={() => handleLogin(form)}>Login</button>

                <p className="mt-4 text-center">
                    New here? <a href="/app/register" className="text-primary">Register Here</a>
                </p>
            </div>
          </div>
        </div>
      </div>
    )
}
export default LoginPage;