import React from 'react'
import './frontCard.css';

const FrontCard = ({image, title, github, demo}) => {
  return (
    <div className='frontCard-container'>
      <img src={ image } alt="front-end project" className='frontcard-image' />
      <p className='frontCard-title'>{title}</p>
      <a href={github} className='frontCard-link'>Github</a>
      <a href={demo} className='frontCard-link'>Demo</a>
    </div>
  )
}

export default FrontCard;