import React from 'react'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Contact from './components/contact/contact'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Projects from './components/projects/Projects'
const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Projects/>
    <Contact/>
    </>
  )
}

export default App