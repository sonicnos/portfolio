import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1 Year Learning</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>+6 Completed</small>
            </article>
          </div>
          <p>Hi, I'm Loukas Bassoukos, a 28-year-old tech enthusiast who transitioned into web development a year ago. With a foundation in technical support from three years in Athens, I've honed problem-solving skills. Proficient in web technologies, I bring a fresh perspective and eagerness to learn, combining my customer-centric approach from technical support with a passion for innovative solutions.</p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div> 
    </section>
  )
}

export default About