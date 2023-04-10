import React from 'react'
import {FaHtml5, FaCss3Alt, FaReact, FaDocker} from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io';
import {SiRedux} from 'react-icons/si';
import {GrMysql, GrNode} from 'react-icons/gr';
import {SiSequelize, SiJest, SiMocha, SiChai} from 'react-icons/si';
import './skills.css';

const Skills = () => {
  return (
    <div id="skills" className='skills-container'>
        <h3 className='skills-title'>Skills</h3>
        <div className='skills-content'>
        <div className='skills-front-end-container'>
          <h3>Front-end</h3>
            <ul className='skills-front-end-ul'>
               <li className='skills-li'>
                <FaHtml5/>
                HTML
                </li>
               <li className='skills-li'>
                <FaCss3Alt />
                CSS 
                </li>
               <li className='skills-li'>
                <IoLogoJavascript />
                JavaScript 
                </li>
               <li className='skills-li'>
                <FaReact />
                React
                </li>
               <li className='skills-li'>
                <SiRedux />
                Redux
                </li>
            </ul>
        </div>
        <div className='skills-front-end-container'>
          <h3>Back-end</h3>
            <ul className='skills-front-end-ul'>
               <li className='skills-li'>
                <FaDocker />
                 Docker
                </li>
               <li className='skills-li'>
                <GrMysql />
                MySQL
                </li>
               <li className='skills-li'>
                <GrNode />
                Node.js
                </li>
               <li className='skills-li'>
                <SiSequelize />
                Sequelize
                </li>
            </ul>
        </div>
        <div className='skills-front-end-container'>
          <h3>Tests</h3>
            <ul className='skills-front-end-ul'>
               <li className='skills-li'>
                <SiJest />
                 Jest
                </li>
               <li className='skills-li'>
                React testing library
                </li>
               <li className='skills-li'>
                <SiMocha />
                Mocha
                </li>
               <li className='skills-li'>
                <SiChai />
                Chai
                </li>
                <li className='skills-li'>
                Sinon
                </li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Skills