import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'; // Importa NavLink da React Router
import './style.css';

class MyNavbar extends React.Component {
  render() {
    return (
      <Navbar expand="lg" className="nav-color">
        <Container className='container d-flex justify-content-between'  >
          <NavLink to="/" className='text-white navbar-brand'>Home</NavLink> {/* Link alla prima pagina */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/meteo" className='text-white nav-link'>Meteo</NavLink> {/* Link alla pagina del Meteo */}
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href="#home" className='text-white'>Profilo</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default MyNavbar;

