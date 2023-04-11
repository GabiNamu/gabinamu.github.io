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
        content="RESTful API and a SQL database to produce content for a blog"
        github="https://github.com/GabiNamu/blog-api"/>
        <BackCard 
        title="All For One"
        content="put into practice several concepts of SQL, to manipulate, filter and search tables and data using mysql"
        github="https://github.com/GabiNamu/mysql-all-for-one"/>
        <BackCard 
        title="One For All"
        content="creation of normalized tables, several sql functions, manipulation of tables using JOIN among other functionalities of relational databases"
        github="https://github.com/GabiNamu/one-for-all"/>
        <BackCard 
        title="Store Manager"
        content="RESTful API, that is a sales management system in dropshipping format where it will be possible to create, view, delete and update products and sales"
        github="https://github.com/GabiNamu/store-manager"/>
        <BackCard 
        title="Talker Manager"
        content="CRUD API of talkers"
        github="https://github.com/GabiNamu/talker_manager"/>
        <BackCard 
        title="Docker To Do List"
        content="Containerize applications, created a connection between them and orchestrate its functioning"
        github="https://github.com/GabiNamu/Docker-To-Do-List"/>
      </div>
    </div>
  )
}

export default Back