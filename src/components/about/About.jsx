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
            <img src={ME} alt="About Image" srcset="" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about_card'>
              <FaAward className='about__icon'></FaAward>
              <h5>Experience</h5>
              <small>1.5+ years of working as a Software Developer</small>
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
          I have a B.Tech in Information Technology Engineering from Sardar Patel Institute of Technology along with a minor degree in Management from S.P. Jain Institute of Management and Research, Mumbai. I have always been passionate about the field of computer science. Over the past 2 years, I have gained professional hands-on experience in the IT industry through internships in software development, learning new technologies and building software projects resulting in gaining valuable insights into the practical application of my academic knowledge. I have also participated and won various Hackathons. <br></br><br />
          
          I have honed my skills in programming languages such as Core Java, Python, JavaScript and Solidity and have worked on a range of technologies and frameworks such as Node.js, Express.js, Vue.js, React.js, Django, Flask and databases in MongoDB (Non-Relational) and MySQL (Relational). 
          </p>

          <a href="#contact" className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About