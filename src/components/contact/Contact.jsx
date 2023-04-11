import React from 'react'
import {FaLinkedin, FaGithub, FaWhatsapp} from 'react-icons/fa';
import './contact.css';
import Form from '../form/Form';

const Contact = () => {
  return (
    <div id="contact" className='contact-container'>
        <h3 className='contact-title'>Contact Me</h3>
        <div className='contact-content'>
        <a href="https://www.linkedin.com/in/gabrielanamu/" className='contact-link'
        target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
            <p>Linkedin</p> 
            </a>
        <a href="https://github.com/GabiNamu" className='contact-link'
        target="_blank" rel="noopener noreferrer">
            <FaGithub />
            <p>Github</p> 
        </a>
        <a href="https://api.whatsapp.com/send?phone=5573998089919" className='contact-link'
        target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
            <p>Whatsapp</p> 
        </a>
        </div>
        <Form />
    </div>
  )
}

export default Contact