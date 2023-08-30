import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css';

class MyNavbar extends React.Component {
  render() {
    return (
      <Navbar expand="lg" className="nav-color">
        <Container className='container d-flex justify-content-between'  >
          <Navbar.Brand href="#home" className='text-white' >Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className='text-white'>Meteo</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href="#home" className='text-white'>profilo</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default MyNavbar;
