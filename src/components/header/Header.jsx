import React from 'react'
import './header.css';
import logo from '../../images/white-logo.png'
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <div className="header-container">
      <img src={ logo } alt="logo" className='header-logo' />
      <div className='header-links-container'>
        <HashLink to="#about" className='header-link'>About</HashLink>
        <HashLink to="#skills" className='header-link'>Skills</HashLink>
        <HashLink to="#certificates" className='header-link'>Certificates</HashLink>
        <HashLink to="#projects" className='header-link'>Projects</HashLink>
        <HashLink to="#contact" className='header-link'>Contact me</HashLink>
      </div>
    </div>
  )
}

export default Header