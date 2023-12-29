import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Loukas Bassoukos</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://linkedin.com/in/loukas-bassoukos-257318133/" target="_blank"><BsLinkedin/></a>
        <a href="https://instagram.com/loukas_ba/" target="_blank"><FaInstagram/></a>
      </div>

      <div className="footer__bottom">
        <small>Portofolio.</small>
      </div>

    </footer>
  )
}

export default Footer