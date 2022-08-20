import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Login.css'
import {Form} from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const Login = () => {

    const navigate=useNavigate();
    const gotohome=()=>{
      
      navigate('/')
    }



    const[name,setName]=useState(null)
    const[pass,setPass]=useState(null)

const login=(e)=>{
    e.preventDefault()
    alert("Logged-In Successfull")
    console.warn(name,pass)

    axios.post('http://localhost:3000/posts',{name,pass}).then(response=>{console.log(response);})
}

  return (
    <div className='wrapper-login'>
      <h1 className='login-heading'>Please Fill the following details to LOGIN!!</h1>

      <Form className='form-login'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Your Full Name</Form.Label>
      <Form.Control type="name" placeholder="Enter name" value={name} onChange={(e)=>{setName(e.target.value)}} />
      <Form.Text className="text-muted">
        This field is Important.
      </Form.Text>
    </Form.Group>

      

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
      </Form.Group>
      
      <br></br>


      <Button onClick={login} variant="success" type="login">
      LOGIN
    </Button> <br /><br></br>
    
    
    </Form>
    <button className='btn-contact' onClick={gotohome}>back to Home</button>

    </div>
  )
}

export default Login
