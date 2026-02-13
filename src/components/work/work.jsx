import React from 'react'
import './work.css'
import exp1 from '../../assets/Wohlig.png'
import msci from '../../assets/msci.jpg'

const Work = () => {
  return (
    <section id = "testimonials">
      <h5>What Experiences I have</h5>
      <h2>My Work Experience</h2>

      <div className='container testimonials_container'>

        <article className='testimonials'>
          <div className='client_avatar'>
            <img src={msci} alt="MSCI" />
          </div>
          <div>
            <h5 className='client_name'>Morgan Stanley Capital International (MSCI)</h5>
            <p className='job_title'>Software Development Engineer</p>
            <p className='job_duration'>June 2023 - Present</p>
            <p className='job_description'>
              Joined MSCI’s Index Engineering team as an Analyst and was subsequently promoted to Associate, 
              contributing to the design and development of scalable full-stack applications that accelerate 
              index creation and support 80,000+ global MSCI indexes.
            </p>
            <ul className='client_review'>
              <li>Currently developing UI Components and Python-based backend services for the Custom Index 
                Platform, enabling clients and internal research teams to define 100+ custom index 
                methodologies, trigger automated backtesting workflows, and streamline new index creation.</li>
              <li>Leveraging AI tools like Cursor IDE, Copilot and MCP Servers 
                across daily software development life cycle.</li>
              <li>Build and maintaining reusable React – Redux component libraries using 
                FluentUI, AgGrid, and MSCI UX Framework. Additionally providing an efficient 
                state management handlers to developers with an inbuilt API integration support using 
                Tanstack Query, ensuring a consistent and intuitive user experience across 
                <strong> 10+ Index applications</strong></li>
              <li><strong>Key Achievement:</strong> Full Stack Development </li>
            </ul>
          </div>
        </article>

        <article className='testimonials'>
          <div className='client_avatar'>
            <img src={exp1} alt="Wohlig Transformations" />
          </div>
          <div>
            <h5 className='client_name'><a href='https://www.wohlig.com/'>Wohlig Transformations Pvt. Ltd.  </a></h5>
            <p className='job_title'>Full Stack Developer</p>
            <p className='job_duration'>January 2022 - July 2022</p>
            <p className='job_description'>Played a pivotal role as a full-stack developer within a dynamic team, 
              dedicated to designing and developing an innovative e-sports gaming application. 
              Demonstrated exceptional expertise in industry-leading software development methodologies while collaborating 
              effectively to deliver high-quality solutions.</p>
            <ul className='client_review'>
              <li> Pursued a full semester long in-office internship contributing to full-stack development of high-quality 
                software gaming application, directly influencing a user growth jump from 200K to 300K+ users.</li>
              <li>Acquired skills of writing efficient and optimized code while maintaining it in a collaborative environment. </li>
              <li>Engineered backend services using Node.js, Express.js, along with optimizing database operations in MongoDB and refining React.js UI components to improve user engagement and overall system performance by 25%.</li>
              <li><strong>Key Achievement:</strong> Successfully contributed to maintaining the application’s stability and performance amidst rapid growth, supporting a user base that exceeded 300,000 active users.</li>
            </ul>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Work