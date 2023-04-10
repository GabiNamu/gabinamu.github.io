import React from 'react'
import Header from '../components/header/Header'
import About from '../components/about/About'
import Banner from '../components/banner/Banner'
import Skills from '../components/skills/Skills'
import Certificates from '../components/certificates/Certificates'
import Projects from '../components/projects/Projects'
import Contact from '../components/contact/Contact'

const Portfolio = () => {
  return (
    <div>
        <Header />
        <Banner />
        <About />
        <Skills />
        <Certificates />
        <Projects />
        <Contact />
    </div>
  )
}

export default Portfolio