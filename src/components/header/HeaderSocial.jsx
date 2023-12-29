import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/loukas-bassoukos-257318133/" target="_blank"><BsLinkedin/></a>
        <a href="https://instagram.com/loukas_ba/" target="_blank"><FaInstagram/></a>
    </div>
  )
}

export default HeaderSocial