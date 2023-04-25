import React from 'react'
import './banner.css';
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import profile from '../../images/profile.png'

const Banner = () => {
  return (
    <div className='banner-container'>
        <img src={ profile } alt="profile" className='banner-profile' />
        <div className='banner-content'>
        <h1 className='banner-h1'>Gabriela Muniz</h1>
        <h2 className='banner-h2'>Front-end Web Developer</h2>
        <div className='banner-icon-container'>
        <a href="https://www.linkedin.com/in/gabrielanamu/"
        target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='banner-icon' />
            </a>
        <a href="https://github.com/GabiNamu"
        target="_blank" rel="noopener noreferrer">
            <FaGithub className='banner-icon'/>
        </a>
        </div>
        </div>
    </div>
  )
}

export default Banner