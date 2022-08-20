import React from 'react'
import './Certifications.css'
import{Table} from 'react-bootstrap' 
import { useNavigate } from 'react-router-dom'


const Certifications = () => {
  const navigate=useNavigate();
const details1=()=>{
navigate('/10')
}
const details2=()=>{
  navigate('/12')
  }
  const details3=()=>{
    navigate('/btech')
    }
    const details4=()=>{
      navigate('/mba')
      }
      const gotohome=()=>{
  
        navigate('/')
      }

  return (
    <div className='wrapper-Certifications'>
      <h1 className='certifations-heading'> Some certificates of Mine.</h1>

      <table class="table">
      <thead>
        <tr>
          <th scope="col">@</th>
          <th scope="col">CERTIFICATE</th>
          <th scope="col">DETAILS</th>
          <th scope="col">LINK TO DOWNLOAD</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>10</td>
          <td><button className='btn-marksheets' onClick={details1}>show details</button></td>
          <td><a className='link' href ='https://drive.google.com/file/d/18yR2SywUQ8NlrMbEVreClD3MQoV78eGn/view?usp=sharing' target='blank'> Download</a></td>
         
        </tr>
        <tr>
        <th scope="row">2</th>
        <td>12</td>
        <td><button className='btn-marksheets' onClick={details2}>show details</button></td>
        <td><a className='link' href='https://drive.google.com/file/d/1uASULTnF1VnL7C7B9MtBSVj2oxVERS5A/view?usp=sharing' target='blank'> Download</a></td>
       
      </tr>
      <tr>
      <th scope="row">3</th>
      <td>B.Tech</td>
      <td><button className='btn-marksheets' onClick={details3}>show details</button></td>
      <td><a className='link' href='https://drive.google.com/file/d/15rLmuYFK7y6J0wKMPZpqbeGiXS1ly8bZ/view?usp=sharing' target='blank'> Download</a></td>
     
    </tr>
    <tr>
    <th scope="row">4</th>
    <td>M.B.A</td>
    <td><button className='btn-marksheets' onClick={details4}>show details</button></td>
    <td><a className='link' href='https://drive.google.com/file/d/191zGrpmrI1emD-gKFzWrj-fs8TUN_0Jz/view?usp=sharing' target='blank'>Download</a></td>
   
  </tr>
       
      </tbody>
    </table>

    <button className='btn-contact' onClick={gotohome}>back to Home</button>

    </div>
  )
}

export default Certifications
