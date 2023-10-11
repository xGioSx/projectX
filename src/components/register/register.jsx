import React, { useState } from 'react'
import './register.css'
import { useDispatch } from 'react-redux';
import google from '../../assets/logo/google.png';
import facebook from '../../assets/logo/Facebook.png';
import {registration} from '../../store/registration';

const Register = () => {
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    
    const handleRegister = () => {
        if (email && userName && password) {
          dispatch(registration({userName, password, email}))
        } 
    } 



    return (
        <div className='login_container'>
            <div className='login_container2'>
                <div className='login_box'>
                    <div className='stage_1'>
                        <h1>Sign up</h1>
                    </div>
                    <div className='sign_inp_container'>
                        <label htmlFor='email'>Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' id='email' placeholder='Enter your Email' />
    
                        <div className='inp_grupe'>
                            <div className='inp_grupe1'>
                                <label htmlFor='username'>User Name</label>
                                <input value={userName} onChange={(e) => setUserName(e.target.value)}type='text' id='username' placeholder='Enter your user name' />
                            </div>
                            <div className='inp_grupe1'>
                                <label htmlFor='number'>phone number</label>
                                <input type='tel' id='number' placeholder='Enter Phone Number' />
                            </div>   
                        </div>  
                        <label htmlFor='password'>Password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' id='password' placeholder='Enter your password' />
                        <label htmlFor='re-password'>Confirm Password</label>
                        <input type='password' id='re-password' placeholder='Re-Enter your password' />
                        <span> <ins>forgot your password?</ins></span>
                    </div>      
                    <button onClick={() => handleRegister()}>Register</button>
    
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
