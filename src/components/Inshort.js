import React from 'react'
import { useState } from 'react'
import {Form} from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import './Inshort.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Inshort = () => {
  const[name,setName]=useState(null)
  const[email,setEmail]=useState(null)
  const[pass,setPass]=useState(null)
  
  const login=(e)=>{
      e.preventDefault()
      navigate('/login')
  }

  const navigate=useNavigate();
const gotohome=()=>{
  
  navigate('/')
}

  const preventrefresh=(e)=>{
      e.preventDefault()
      alert("your form is submitted. Thanks for Joining")
      console.warn(name,email,pass);
     
      axios.post('http://localhost:3000/posts',{name,email,pass}).then(response=>{console.log(response);})

  }
  return (
    <div className= 'wrapper-inshort'>
      <h1 style={{color:"red"}}>Fill up the following Details for Registration.</h1>
      <h3>Feel Free to JOIN ME.. </h3>
     

      <Form className='form-inshort'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Your Full Name</Form.Label>
      <Form.Control type="name" placeholder="Enter name" value={name} onChange={(e)=>{setName(e.target.value)}} />
      <Form.Text className="text-muted">
        This field is Important.
      </Form.Text>
    </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label=" Please CHECK This!! I have filled all information correct. " />
      </Form.Group>
      <Button onClick={preventrefresh} variant="primary" type="submit">
        Register
      </Button><br></br><br></br>


      <Button onClick={login} variant="warning" type="login">
      LOGIN
    </Button> <br /><br></br>
    
    <h6>Already registered ? Login HERE</h6>
    </Form>

    <button className='btn-contact' onClick={gotohome}>back to Home</button>
    </div>
  )
}

export default Inshort;
