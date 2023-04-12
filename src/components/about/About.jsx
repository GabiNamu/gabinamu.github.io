import React from 'react'
import './about.css';

const About = () => {
  return (
    <div className='about-container' id="about">
      {/* <div className='about-hr'/> */}
      <div className='about-content'>
      <h3 className='about-title'>About Me</h3>
      <p>Sempre quis trabalhar com tecnologia, mas não sabia como. 
      Depois de entrar na universidade na área de design, me interessei por design 3D e a partir daí aprendi e me apaixonei por programação, 
      portanto resolvi mudar de área. Atualmente estudo desenvolvimento web na Trybe, 
      uma escola de programação que ensina soft e hard skill. 
     Hoje posso dizer que me encontrei em uma área pela qual sou muito apaixonada e acredito que estarei no caminho certo para 
     fazer com que a tecnologia melhore ainda mais a vida das pessoas.</p>
  </div>
  {/* <div className='about-hr'/> */}
    </div>
  )
}

export default About