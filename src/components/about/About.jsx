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
              <h5>Educatiom</h5>
              <small>B.Tech in Infomration Technology Engineering</small>
            </article>

            <article className='about_card'>
              <AiFillProject className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ software projects completed</small>
            </article>
          </div>

          <p>
          I am a final year I.T. Engineering student pursuing B.Tech with majors in Information Technology Engineering from Sardar Patel Institute of Technology and a minor in Management from S.P. Jain Institute of Management and Research, Mumbai. I have always been passionate about the field of computer science. Over the past 2 years, I have gained professional experience in the IT industry through internships in software development and also working as a part-time software development programme instructor. I have gained valuable insights into the practical application of my academic knowledge. I have also participated and won various Hackathons, recently being Hack This Fall 3.0 by the MLH community. I have honed my skills in programming languages such as Java, Python, JavaScript and solidity and have worked on a range of technologies and frameworks such as Node.js, Express Js, Vue Js, Django, Flask and MongoDB. <br></br><br />

          Currently, I am exploring the field of blockchain by participating in hackathons and seeking exposure to this cutting-edge technology with a keen interest in blockchain's potential to revolutionize various industries. I have been working to develop my skills in smart contract development and decentralized application (dApp) development and understanding various blockchain platforms such as Ethereum ERC tokens, Solana, Hyperledger Fabric and 5ire.

          </p>

          <a href="#contact" className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About