import React from "react";
import './profileContainer.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function ProfileContainer() {
     const [name,setName]=useState();
     const [email,setEmail]=useState();
     const [password,setPassword]=useState();
     const navigate = useNavigate();

     const handleSubmit = (e) =>{
        e.preventDefault()
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
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Link to="/correctProfile">
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Link>
          <Button variant="secondary" type="submit">
            Register
          </Button> 
      </Form>
    </div>
  );
}

export default ProfileContainer;
