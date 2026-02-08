import React from 'react'
import './About.css'
import ME from '../../assets/me-abt.jpg'
import {FaAward} from "react-icons/fa"
import {BsBookFill} from'react-icons/bs'
import {AiFillProject} from 'react-icons/ai'
const About = () => {
  return (
    <section id="about">
      <h5> Get To Know </h5>
      <h2> About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Img" srcset="" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about_card'>
              <FaAward className='about__icon'></FaAward>
              <h5>Experience</h5>
              <small>3+ years of working as a Software Developer</small>
            </article>

            <article className='about_card'>
              <BsBookFill className='about__icon' />
              <h5>Education</h5>
              <small>B.Tech in Information Technology Engineering</small>
            </article>

            <article className='about_card'>
              <AiFillProject className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ software projects completed</small>
            </article>
          </div>

          <p>
          I am a Software Development Engineer with over two years of experience building scalable, 
          production-grade full-stack systems. Currently working at MSCI as an Associate in the Index Engineering team, 
          I contribute to applications that support more than 80,000 global indexes. My work spans frontend and backend 
          development, including building reusable React and Redux component libraries, 
          designing REST APIs and developing ETL pipelines using Python Flask. <br/><br/>
  
          I hold a B.Tech (Bachelors of Technology) in Information Technology Engineering from Sardar Patel Institute of Technology 
          along with a minor degree in Management from S.P. Jain Institute of Management and Research, Mumbai. 
          Over the past 3 years, I have gained strong experience working in Agile environments, maintaining high 
          code quality through test-driven development, and delivering reliable features through frequent production 
          deployments. I enjoy taking ownership of complex problems, optimizing performance, 
          and collaborating closely with cross-functional teams. <br/><br/>
          
          With a solid foundation in computer science fundamentals and a continuous drive to learn new technologies, 
          I am motivated to build impactful software solutions and grow as a well-rounded software engineer.
          </p>

          <a href="#contact" className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About