import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/contact'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Projects from './components/projects/Projects'
import Work from './components/work/work' 
import Skills from './components/skills/Skills'
const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Skills/> {/* This is for skills */}
    <Work/>
    <Projects/>
    <Contact/>
    </>
  )
}

export default App