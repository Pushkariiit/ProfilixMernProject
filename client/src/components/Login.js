import React, { useContext, useState } from 'react';
import loginpic from '../images/login.png';
import { NavLink, useNavigate } from 'react-router-dom';
import useRefreshLogout from './useRefreshLogout';
import { userContext } from '../App';

const Login = () => {

  const {state,dispatch} = useContext(userContext);

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();
    console.log("I am here1");
    const res = await fetch('/signin', {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    

    const data = await res.json();

    if (res.status === 400 || !data) {
      window.alert("signin not valid");
    }
    else {

      dispatch({type:"USER",payload:true});

      window.alert("signin succesfull");
      const cookie = document.cookie;
      console.log(cookie);

      navigate('/');
    }


   
  }

  useRefreshLogout();
  return (
    <section className='signin'>
      <div className='container mt-5'>
        <div className='signin-content'>
          <div className='login-image'>
            <figure>
              <img src={loginpic} alt='signpic' />
            </figure>
            <NavLink to='/signup' className='signin-img-link'>
              Create Account
            </NavLink>
          </div>
          <div className='signin-form'>
            <h2 className='form-title'>
              <strong>Sign In</strong>
            </h2>
            <form method='POST' className='register-form' id='register-form'>
              <div className='mb-3'>
                <label htmlFor='email' className='form-label'>
                  <i className='zmdi zmdi-email'></i>
                </label>
                <input
                  type='email'
                  className='form-control'
                  name='email'
                  id='email'
                  aria-describedby='emailHelp'
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder='Email address'
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='password' className='form-label'>
                  <i className='zmdi zmdi-lock'></i>
                </label>
                <input
                  type='password'
                  className='form-control'
                  name='password'
                  id='password'
                  aria-describedby='password'
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                  placeholder='Password'
                />
              </div>
              <button
                type='submit'
                className='btn btn-success'
                name='signin'
                id='signin'
                onClick={loginUser}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
