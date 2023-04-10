import React from 'react'
import './backCard.css';

const BackCard = ({title, github}) => {
  return (
    <div className='backCard-container'>
      <p className='backCard-title'>{title}</p>
      <a href={github} className='backCard-link'>Github</a>
    </div>
  )
}

export default BackCard