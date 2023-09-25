import React from "react";
import './profileContainer.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';



function ProfileContainer() {
     const [name,setName]=useState();
     const [email,setEmail]=useState();
     const [password,setPassword]=useState();
     const navigate = useNavigate();

     const handleSubmit = (e) =>{
        e.preventDefault()
      // gestione ca,pi vuoti
      if(!name || !email || !password){
        alert("compila tutti i campi per registrarti correttamente");
        return;
      }
      // gestione per una corretta formattazione email
      const emailVerification=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if(!emailVerification.test(email)){
        alert("inserisci un formato email valido");
        return;
      }

        axios.post('http://localhost:7997/register', {name, email, password})
        .then(result => {console.log(result)
        navigate('/login')})
        .catch(err => console.log(err))
     }


  return (
    <div className="profile-container-style">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"  onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Link to="/login">
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Link>
          <Button variant="secondary" type="submit">
            Register
          </Button> 
      </Form>
      <div>
        <GoogleOAuthProvider clientId="810688995627-c3vgl50n98l3gsehc06k4ct99dn8nc0o.apps.googleusercontent.com">
                  <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
              navigate('/correctProfile');
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </GoogleOAuthProvider>
      </div>
    </div>
  );
}

export default ProfileContainer;
