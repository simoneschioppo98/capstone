import React from 'react';
import logo from './logocapstone.png'; 
import './logo.css'

function MyLogo() {
  return (
    <div className='logo-div'>
      <img src={logo} alt="Logo" className='logo-edit' />
    </div>
  );
}

export default MyLogo;
