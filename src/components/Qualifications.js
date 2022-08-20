import React from 'react'
import { Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import './Qualifications.css'

const Qualifications = () => {
  const navigate=useNavigate();
const gotohome=()=>{
  
  navigate('/')
}
  return (
    <div className="wrapper-Qualifications">
    <div className='heading-qua'>
      <h1>My..</h1>
      <h2>QUALIFICATIONS....</h2>
      </div>
      <Table striped bordered hover variant="light">
  
    <tr>
      <th>#</th>
      
      <th>CERTIFICATE/COURSE</th>
      <th>STREAM</th>

      <th>UNIVERSITY/COLLEGE</th>
      <th>YEAR OF PASSING</th>
      <th>MARKS</th>
    </tr>
  
  <tbody>
    <tr>
      <td>1</td>
      <td>M.B.A</td>
      <td>HR & FINANCE</td>
      <td>University Of Kota,Kota</td>
      <td>2021</td>
      <td>79%</td>
    </tr>
    <tr>
      <td>2</td>
      <td>B.Tech</td>
      <td>Mechanical</td>
      <td>Rajasthan Technical University</td>
      <td>2016</td>
      <td>79%</td>
    </tr>
    <tr>
      <td>3</td>
      <td>12th</td>
      <td>PCM</td>
      <td>KVNTPC, ANTA , BARAN</td>
      <td>2012</td>
      <td>73.6%</td>
    </tr>
    <tr>
      <td>4</td>
      <td>10th</td>
      <td>PCM</td>
      <td>KVNTPC, ANTA , BARAN</td>
      <td>2010</td>
      <td>8.8 CGPA</td>
    </tr>
  </tbody>
</Table>

<button className='btn-qua' onClick={gotohome}>back to Home</button>

    </div>
  )
}

export default Qualifications
