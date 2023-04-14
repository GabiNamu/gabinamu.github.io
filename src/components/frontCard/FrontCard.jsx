import React from 'react'
import './frontCard.css';

const FrontCard = ({image, title, github, demo, content}) => {
  return (
    <div className='frontCard-container'>
      <img src={ image } alt="front-end project" className='frontcard-image' />
      <p className='frontCard-title'>{title}</p>
      <p className='frontCard-content'>{content || ''}</p>
      <div className={`forntCard-links-container ${content && 'frontCard-content-links'}`}>
      <a href={github} 
      className='frontCard-link' 
      target="_blank" rel="noopener noreferrer">Github</a>
      <a href={demo} 
      className='frontCard-link' 
      target="_blank" rel="noopener noreferrer">Demo</a>
      </div>
    </div>
  )
}

export default FrontCard;