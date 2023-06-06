import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background:  '#ff6b6b' }}>
      <div id='notFound'>
        <div className='notFound' style={{ textAlign: 'center' }}>
          <div className='notFound-404'>
            <h1 style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', margin: 0 }}>404</h1>
          </div>
          <h2 style={{ margin: '1rem 0' }}>We are Sorry, page Not Found! 😧</h2>
          <p className='mb-5' style={{ margin: '0.5rem 0' }}>
            The page you are looking for might have been removed or its name has been changed.
          </p>
          <NavLink
            to='/'
            style={{
              display: 'inline-block',
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '10px',
            }}
          >
            Click Here to Go Back to Home Page
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Error;
