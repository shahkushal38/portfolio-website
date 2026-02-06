import React from 'react'
import './work.css'
import avtr1 from '../../assets/avatar1.jpg'
import exp1 from '../../assets/Wohlig.png'

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
            <h5 className='client_name'>Wohlig Transformations</h5>
            <small className='client_review'>
              Worked on various client and research projects within the organization. Got the experience of working in large software-based projects as a full-stack developer in the team. Learned about right standards of development, writing efficient code and coordination with other team members while developing and designing software.Key Achievements - Helped in maintaining a smooth functioning of the software for an increasing number of users crossing 3 lakhs and more.
            </small>
          </div>
        </article>

        <article className='testimonials'>
          <div className='client_avatar'>
            <img src={avtr1} alt="Experience 2" />
          </div>
          <div>
            <h5 className='client_name'>Wohlig Transformations</h5>
            <small className='client_review'>
              Worked on various client and research projects within the organization. Got the experience of working in large software-based projects as a full-stack developer in the team. Learned about right standards of development, writing efficient code and coordination with other team members while developing and designing software.Key Achievements - Helped in maintaining a smooth functioning of the software for an increasing number of users crossing 3 lakhs and more.
            </small>
          </div>
        </article>

        <article className='testimonials'>
          <div className='client_avatar'>
            <img src={avtr1} alt="Experience 3" />
          </div>
          <div>
            <h5 className='client_name'>Wohlig Transformations</h5>
            <small className='client_review'>
              Worked on various client and research projects within the organization. Got the experience of working in large software-based projects as a full-stack developer in the team. Learned about right standards of development, writing efficient code and coordination with other team members while developing and designing software.Key Achievements - Helped in maintaining a smooth functioning of the software for an increasing number of users crossing 3 lakhs and more.
            </small>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Work