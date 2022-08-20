import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Jobdetails.css'

const Jobdetails = () => {

  const navigate=useNavigate();
const gotohome=()=>{
  
  navigate('/')
}
  return (
    <div className='wrapper-job'>
      <h1 style={{size:'35px',color:'#A66CFF'}}>Here are my  job details of Previous Companies!!</h1>

      <p className='bhatia'>

      <h3>BHATIA AND COMPANY KOTA, Rajasthan</h3>
     <p>Worked as HR executive in Bhatia and Company , kota for 6 months from 1st February 2021 to 30th July 2021.</p>
<p>JOB RESPONSIBILITIES:
<ul>
<li>Recruitment and selection of candidates.</li>
<li>Screening, shortlisting, taking interviews as per schedule.</li>
<li>Attendance record making, keeping and maintaining file records of all the staff and workers in the organization.</li>
<li>Handling joining formalities, leaving process, no dues etc.</li>
<li>Handling customer’s problems on calls like incentives, wages, resignation, leaves etc.</li>
<li>Attending meeting with the managers and head of the organization for daily progress discussion.</li>
<li>Conducting induction and training programs for the candidates so as to make them ensure about the work culture</li>
</ul>
</p>

      </p>
  <p className='OCCPL'>
  <h3>ONSHORE CONSTRUCTION COMPANY</h3>
  <p>On 1st July 2017 I joined ONSHORE CONSTRUCTION COMPANY PVT. LTD. (OCCPL) at CHAMBAL FERTILIZERS CHEMICALS LIMITED for GADEPAN 3
  PROJECT as a QUALITY ENGINEER. Here I worked in tankage erection and fabrication process up-to December 2018.</p>

  <p>
  JOB RESPONSIBITIES:
<ul>
<li>Planning different activities that is to be done on the construction site of storage tanks.</li>
<li>Tool box meeting to the workers informing about safety and daily balance activities.</li>
<li>Maintaining daily reports of the tank balance activities.</li>
<li>In quality dept., performing different types of NDT methods for the inspection of welded joints of tanks such as: -</li>
<li>Weld visual</li>
<li>Vacuum box test</li>
<li> Hydro test</li>
<li>Pneumatic test of RF pads of nozzles and anchor chairs.</li>
<li>Radiography test of welding joints</li>
<li>Mechanical clearance</li>
<li>Dye penetrant test</li>
<li> tank calibration</li>
</ul>

  </p>
  </p>
  <button className='btn-contact' onClick={gotohome}>back to Home</button>

    </div>
  )
}

export default Jobdetails
