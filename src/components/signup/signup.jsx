import React, { useEffect, useState, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './signup.css';
import google from '../../assets/logo/google.png';
import facebook from '../../assets/logo/Facebook.png';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { signin } from '../../store/login';



const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const token = JSON.parse(localStorage.getItem('user'))
  const {isLoggedIn} = useSelector((state) => state.signin)

  const navigate = useNavigate()
  const dispatch = useDispatch()




  const handleLogIn = () => {
    dispatch(signin({ email, password }))
  };

  useEffect(() => {
    if(isLoggedIn) {
      navigate('/')
    }
  }, [isLoggedIn])
  

  return (
    <div className='login_container'>
      <div className='login_container2'>
        <div className='login_box'>
          <div className='stage_1'>
            <span>Welcome to Ecommerce site</span>
            <h1>Sign in</h1>
          </div>
          <div className='sign_inp_container'>
              <label htmlFor='email'>User Name</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' id='email' placeholder='Enter your user eMail' />

              <label htmlFor='password'>Password</label>
              <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' id='password' placeholder='Enter your password' />
              <span> <ins>forgot your password?</ins></span>
          </div>
              <div className='buttons'>
                 <button onClick={() => handleLogIn()} className='login_button'>Log In</button>
                <Link to='/register' className='buttons'>
                  <button className='create_new_account_button'>create new account</button>
                </Link>
              </div>
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
};

export default Signup;
