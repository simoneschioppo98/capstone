import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useLocation } from 'react-router-dom'; 
import './style.css';

function MyNavbar() {
  const section = useLocation();
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    let currentSection = section.pathname;

    if (currentSection === "/") {
      setBackgroundImage('linear-gradient(to bottom, #0d6efd, #0360f9, #0d51f4, #1d40ee, #2c2ce7)');
    } else if (currentSection === "/meteo") {
      setBackgroundImage('linear-gradient(to bottom, #ff8c00, #fa8405, #f47b0a, #ef730e, #e96b11, #e26810, #da640e, #d3610d, #c96108, #bf6104, #b56001, #ac5f00)');
    } 
  }, [section]);

  const navStyle = {
    backgroundImage: backgroundImage,
  };

  return (
    <Navbar expand="lg" className="nav-color" style={navStyle}>
      <Container className='container d-flex justify-content-between'>
        <NavLink to="/" className='text-white navbar-brand'>Home</NavLink> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/meteo" className='text-white nav-link'>Meteo</NavLink>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#home" className='text-white'>Profilo</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;



