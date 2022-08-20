import React from 'react'
import './Contact.css'
import { useNavigate } from 'react-router-dom'
import {Table} from 'react-bootstrap'


const Contact = () => {

  const navigate=useNavigate();
const gotohome=()=>{
  
  navigate('/')
}
  return (
    <div className='wrapper-contact'>
      <h1><u><span className='h1-span'>C</span>on<span className='h1-span'>T</span>ac<span className='h1-span'>T</span> <span className='h1-span'>M</span>e <span className='h1-span'>A</span>t</u></h1>
    
     




     <Table striped bordered hover>
      <thead>
        <tr>
          <th>MOBILE NO:</th>
          <th>Email ID:</th>
          <th>Linkedin</th>
          <th>Git-Hub:</th>
          <th>Download Resume</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <td>8740022586</td>
          <td>singh94shakti@gmail.com</td>
          <td>ss94{""}<a href='https://linkedin.com/in/ss94' target='blank'>open</a></td>
          <td>Singh-94{""}<a href='https://github.com/Singh-94' target='blank'>open</a></td>
          <td><a href='https://drive.google.com/file/d/1sSoltek6V06r70uluFm2HHSmfANqqFYh/view?usp=sharing' target="blank">DOWNLOAD</a></td>
        </tr>
        
      </tbody>
    </Table>
    
     

     

     <div className='contact-image'> 
          LOCATE
     </div><br />
     <button className='btn-contact' onClick={gotohome}>back to Home</button>
    
     
    
    
      </div>
  )
}

export default Contact
