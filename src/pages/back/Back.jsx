import React from 'react'
import { Link } from 'react-router-dom';
import './back.css';
import BackCard from '../../components/backCard/BackCard';

const Back = () => {
  return (
    <div className='back-container'>
      <div className='back-link-container'>
      <Link to="/" className='back-link'>Back</Link>
      <Link to="/front" className='back-link'>Front-end projects</Link>
      </div>
      <h1 className='back-title'>Back-end Projects:</h1>
      <div className='back-content'>
        <BackCard 
        title="Blog API"
        github="https://github.com/GabiNamu/blog-api"/>
        <BackCard 
        title="All For One"
        github="https://github.com/GabiNamu/mysql-all-for-one"/>
        <BackCard 
        title="One For All"
        github="https://github.com/GabiNamu/one-for-all"/>
        <BackCard 
        title="Store Manager"
        github="https://github.com/GabiNamu/store-manager"/>
        <BackCard 
        title="Talker Manager"
        github="https://github.com/GabiNamu/talker_manager"/>
        <BackCard 
        title="Docker To Do List"
        github="https://github.com/GabiNamu/Docker-To-Do-List"/>
      </div>
    </div>
  )
}

export default Back