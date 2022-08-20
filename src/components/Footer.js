import React from 'react'
import './Footer.css'
import{BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer'>
     
      <h4>&copy; CopyRight</h4>
      <div className='linkedin-icon'> <BsLinkedin/>{''} {''}<a href='https://linkedin.com/in/shakti-singh-664b8a1a3' target='blank'>Linkedin</a></div>

      <div className='github-icon'><BsGithub/>{''} {''}<a href='https://github.com/Singh-94' target='blank'>GIT-HUB</a></div>
     
      

    </div>
  )
}

export default Footer
