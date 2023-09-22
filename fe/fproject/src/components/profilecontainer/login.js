import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"

function LoginAcces (){
    const [email,setEmail]=useState();
     const [password,setPassword]=useState();
     const navigate = useNavigate();

     const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:7997/login', { email, password})
        .then(result => {console.log(result)
            if(result.data === 'perfetto'){
                navigate('/correctProfile')   
            }})
        .catch(err => console.log(err))
     }
    return(
        <Form onSubmit={handleSubmit}>
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
    )
}

export default LoginAcces ;