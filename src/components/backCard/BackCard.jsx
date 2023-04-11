import React from 'react'
import './backCard.css';

const BackCard = ({title, github, content}) => {
  return (
    <div className='backCard-container'>
      <p className='backCard-title'>{title}</p>
      <p>{content}</p>
      <a href={github} 
      className='backCard-link'
      target="_blank" rel="noopener noreferrer"
      >Github</a>
    </div>
  )
}

export default BackCard