import React from 'react'
import './About.css'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'

const About = () => {

    const navigate=useNavigate();
    const gotoacads=()=>{
        navigate("/jobdetails")
    }
  return (
    <div className='wrapper'>
    <div className='iam'> 
    <h1 className='hello'><span className='H'>H</span>ELLO.....</h1><br />
    <h2><span className='iam-words'>I</span> {''}<span className='iam-word-a'>a</span>{''}{''}<span className='iam-word-m'>m</span></h2>
    <h2 className='h2'><span className='iam-words'>S</span>hakti..<span className='iam-words'>S</span>ingh..</h2>
    </div>
    <div className='about-h'>
     <h1> <span className='aspan'>S</span>omething <span className='aspan'>A</span>bout <span className='aspan'>M</span>e.......</h1>
    </div>
        
    <div className='about-p'>
    <p > <span className='aspan' >S</span>trong analytical and quantitative skills , having technical and professional experience and relative knowledge in same.</p><br />
    <p> Newly in the field of IT or you can say just a Beginner!!</p>
    <p> I having having technical and professional qualifications as B.Tech, M.B.A and currently working on React JS 'A Library of JAVASCRIPT' </p>
        <button className='btn' onClick={gotoacads}>For Details Click HERE</button>
    </div>
    <br/>

    <div className='about-p2'> 
    <h1 className='h1-about'>Some Basic Details.. </h1>
    </div><br /><br /><br /><br /><br />

    <div className='about-p3'>
    <div className='about-p3-1' >
    <h1>Basic Skills</h1>
    <p>	<ul><li>Worked as H.R. Executive</li>
    	<li>Confident and Adaptive</li>
        <li>Patient Listener</li>
        <li> Quick Problem Solver</li>
        <li>Self-Motivated</li>
        <li>Positive attitude</li>
        <li> Team Player-Loyal, Responsible & Determined</li>
    </ul>
    </p>
    </div>
    <div className='about-p3-2'>
    <h1>Technical Skills</h1>
    <ul>
    
    <li>Autocad (2d Modelling)</li>
    <li>Ms Office</li>
    <li>Ndt Testing Methods Of Quality</li>
    <li>Knowledge Of Construction Safety</li>
    <li>Compressors, Tubine (Gas Turbine)</li>
    <li>Storage Tanks (Ammonia& Urea) Fabrication And Construction</li>
    <li>Quality Control And Inspection</li>
    
    </ul>
    </div>

    <div className='about-p3-3'>
    <h1>IT Skills</h1>
    <ul>
    <li>HTML 5</li>
    <li>CSS</li>
    <li>BOOTSTRAP 5</li>
    <li>JQUERY</li>
    <li>JAVASCRIPT</li>
    <li>ES6</li>
    <li>REACT JS</li>
    </ul>
    </div>
   
    </div>
    


    <Footer/>

    </div>
  )
}

export default About
