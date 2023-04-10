import React from 'react'
import { Link } from 'react-router-dom';
import './projects.css';

const Projects = () => {
  return (
    <div className='projects-container' id='projects'>
        <h3 className='projects-title'>Projects</h3>
        <div className='projects-content'>
            <div className='projects'>
                <Link to="/front" className='projects-link'>Front-end</Link>
            </div>
            <div className='projects'>
                <Link to="/back" className='projects-link'>Back-end</Link>
            </div>
        </div>
    </div>
  )
}

export default Projects