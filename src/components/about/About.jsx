import React from 'react'
import './about.css';

const About = () => {
  return (
    <div className='about-container' id="about">
      {/* <div className='about-hr'/> */}
      <div className='about-content'>
      <h3 className='about-title'>About Me</h3>
      <p>I always wanted to work with technology, but I didn't know how. 
        After entering the university in the field of design, I became interested 
        in 3D design and from there I learned and fell in love with programming, 
        so I decided to change areas. I'm currently studying web development at Trybe, 
        a programming school that teaches soft and hard skills.
        Today I can say that I found myself in an area that I am very passionate about and 
        I believe that I will be on the right track to make technology improve people's lives even more.
      </p>
  </div>
  {/* <div className='about-hr'/> */}
    </div>
  )
}

export default About