import React from 'react'
import "./nav.css"
import {AiOutlineHome} from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {AiFillProject} from 'react-icons/ai'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'
const Nav = () => { 
    const [activenav, setactiveNav] = useState("#")
  return (
    <nav>
        <a href="#"  onClick={()=> setactiveNav('#')} className={activenav === '#'?'active':''} title="Home"><AiOutlineHome/></a>
        <a href="#about" onClick={()=> setactiveNav('#about')} className={activenav === '#about'?'active':''} title="About"><AiOutlineUser/></a>
        <a href="#experience"  onClick={()=> setactiveNav('#experience')} className={activenav === '#experience'?'active':''} title = "Experiences"><BiBook/></a>
        <a href="#projects"  onClick={()=> setactiveNav('#projects')} className={activenav === '#projects'?'active':''} title = "Projects"><AiFillProject/></a>
        <a href="#contact"  onClick={()=> setactiveNav('#contact')} className={activenav === '#contact'?'active':''} title = "Contact"><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav