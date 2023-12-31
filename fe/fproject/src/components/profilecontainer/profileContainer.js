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
      // gestione campi vuoti
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

      //chiamata al backend per immettere i dati registrati in questo form al database di mongodb
        axios.post('http://localhost:7997/register', {name, email, password})
        .then(result => {console.log(result)
        navigate('/login')})
        .catch(err => console.log(err))
     }


  return (
    <div className="profile-container-style">
      <div className="form-box">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email"  onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
          <Button variant="secondary" type="submit" className="form-button-two">
            Registrati
          </Button> 
      </Form>
      <span>oppure</span>
      <div className="google-auth">
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
      <div className="already-user">
          <span>sei gia un utente? clicca su</span>
          <Link to="/login">
          <span variant="primary" type="submit" className="form-span-one">
            Login
          </span>
        </Link>
        </div>
    </div>
  );
}

export default ProfileContainer;
