import React from 'react'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Contact from './components/contact/contact'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Projects from './components/projects/Projects'
import Work from './components/work/work' 
const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/> {/* This is for skills */}
    <Work/>
    <Projects/>
    <Contact/>
    </>
  )
}

export default App