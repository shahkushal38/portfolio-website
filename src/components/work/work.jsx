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

        <article className='testimonials'>
          <div className='client_avatar'>
            <img src={msci} alt="MSCI" />
          </div>
          <div>
            <h5 className='client_name'>Morgan Stanley Capital International (MSCI)</h5>
            <p className='job_title'>Software Development Engineer</p>
            <p className='job_duration'>June 2023 - Present</p>
            <p className='job_description'>Assisted in developing client projects and contributed to research initiatives. Gained hands-on experience with full-stack development practices and software architecture.</p>
            <ul className='client_review'>
              <li>Worked on various client and research projects within the organization</li>
              <li>Gained experience working in large software-based projects as a full-stack developer</li>
              <li>Learned development standards and best practices for writing efficient code</li>
              <li>Developed coordination and collaboration skills with team members</li>
              <li><strong>Key Achievement:</strong> Maintained smooth functioning of software for 300,000+ users</li>
            </ul>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Work