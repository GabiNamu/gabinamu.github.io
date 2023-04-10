import React from 'react'
import './banner.css';
import profile from '../../images/profile.png'

const Banner = () => {
  return (
    <div className='banner-container'>
        <img src={ profile } alt="profile" className='banner-profile' />
        <div className='banner-content'>
        <h1 className='banner-h1'>Gabriela Muniz</h1>
        <h2 className='banner-h2'>Front-end Web Developer</h2>
        </div>
    </div>
  )
}

export default Banner