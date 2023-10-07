import React from 'react'
import './register.css'
import google from '../../assets/logo/google.png';
import facebook from '../../assets/logo/Facebook.png';


const Register = () => {
    return (
        <div className='login_container'>
            <div className='login_container2'>
                <div className='login_box'>
                    <div className='stage_1'>
                        <h1>Sign up</h1>
                    </div>
                    <div className='sign_inp_container'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' placeholder='Enter your Email' />
    
                        <div className='inp_grupe'>
                            <div className='inp_grupe1'>
                                <label htmlFor='username'>User Name</label>
                                <input type='text' id='username' placeholder='Enter your user name' />
                            </div>
                            <div className='inp_grupe1'>
                                <label htmlFor='number'>phone number</label>
                                <input type='tel' id='number' placeholder='Enter Phone Number' />
                            </div>   
                        </div>  
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' placeholder='Enter your password' />
                        <label htmlFor='password'>Confirm Password</label>
                        <input type='password' id='password' placeholder='Re-Enter your password' />
                        <span> <ins>forgot your password?</ins></span>
                    </div>      
                    <button>Register</button>
    
                    <div className='singn_logo_box'>
                        <div className='contactwith_span'>
                        <span>or continue with</span>
                        </div>
                        <div className='g_f_a_span'>
                        <div className='google_box'>
                            <img className='logo_image' src={google} alt='' />
                            <span className="hover-text">sign in with google</span>
                        </div>
                        <div className='google_box'>
                            <img className='logo_image' src={facebook} alt='' />
                            <span className="hover-text">sign in with facebook</span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
}

export default Register
