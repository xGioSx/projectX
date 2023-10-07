import React from 'react';
import './signup.css';
import google from '../../assets/logo/google.png';
import facebook from '../../assets/logo/Facebook.png';
import { Link } from 'react-router-dom';




const Signup = () => {
  return (
    <div className='login_container'>
      <div className='login_container2'>
        <div className='login_box'>
          <div className='stage_1'>
            <span>Welcome to Ecommerce site</span>
            <h1>Sign in</h1>
          </div>
          <div className='sign_inp_container'>
              <label htmlFor='username'>User Name</label>
              <input type='text' id='username' placeholder='Enter your user name' />

              <label htmlFor='password'>Password</label>
              <input type='password' id='password' placeholder='Enter your password' />
              <span> <ins>forgot your password?</ins></span>
          </div>
              <div className='buttons'>
                 <button className='login_button'>Log In</button>
                <Link to='/register' className='buttons'>
                  <button className='create_new_account_button'>create new1212 account</button>
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
