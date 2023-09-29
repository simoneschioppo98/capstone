import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from "react-router-dom";
import './ProfileNavbar.css';
import axios from "axios";

function CorrectNavbar() {
    const navigate = useNavigate();

    // navbar del profilo: sotto troviamo una funzione per eseguire il logout dalla pagina
    const logRemover= ()=>{
        localStorage.removeItem('userLoggedIn');
        navigate('/login');
    }

    return (
        <Navbar expand="lg" className="nav" >
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="flex-content">
                        <NavLink to="/" className='text-white'>Home</NavLink>
                        <NavLink to="/meteo" className='text-white'>Meteo</NavLink>
                        <NavDropdown title="Settings" className="dropdown-style">
                            <NavDropdown.Item href="#action/3.1" className="text-danger" onClick={logRemover}> logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CorrectNavbar;
