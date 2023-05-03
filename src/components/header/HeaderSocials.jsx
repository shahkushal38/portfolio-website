import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiGeeksforgeeks} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://in.linkedin.com/" target="_blank" rel="noreferrer"> <BsLinkedin/></a>
        <a href="http://github.com/shahkushal38" target="_blank" rel="noreferrer"> <BsGithub/></a>
        <a href="https://www.geeksforgeeks.org/" target="_blank" rel="noreferrer"><SiGeeksforgeeks/></a>
    </div>
  )
}

export default HeaderSocials