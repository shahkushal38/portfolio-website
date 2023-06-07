import React from 'react'
import './work.css'
import avtr1 from '../../assets/avatar1.jpg'
import exp1 from '../../assets/Wohlig.png'

// for swipper js

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";



const Work = () => {
  return (
    <section id = "testimonials">
      <h5>What Experiences I have</h5>
      <h2>My Work Experience</h2>

      <div className='container testimonials_container'>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <article className='testimonials'>
            <div className='client_avatar'>
              <img src={exp1} alt="Avatar 1" />
            </div>
            <div>
              <h5 className='client_name'>Wohlig Transformations</h5>
              <small className='client_review'>
                Worked on various client and research projects within the organization. Got the experience of working in large software-based projects as a full-stack developer in the team. Learned about right standards of development, writing efficient code and coordination with other team members while developing and designing software.Key Achievements - Helped in maintaining a smooth functioning of the software for an increasing number of users crossing 3 lakhs and more.
              </small>
            </div>
          </article>
          </SwiperSlide>
        
        <SwiperSlide>
          <article className='testimonials'>
            <div className='client_avatar'>
              <img src={avtr1} alt="Avatar 1" />
            </div>
            <div>
              <h5 className='client_name'>Wohlig Transformations</h5>
              <small className='client_review'>
                Worked on various client and research projects within the organization. Got the experience of working in large software-based projects as a full-stack developer in the team. Learned about right standards of development, writing efficient code and coordination with other team members while developing and designing software.Key Achievements - Helped in maintaining a smooth functioning of the software for an increasing number of users crossing 3 lakhs and more.
              </small>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className='testimonials'>
            <div className='client_avatar'>
              <img src={avtr1} alt="Avatar 1" />
            </div>
            <div>
              <h5 className='client_name'>Wohlig Transformations</h5>
              <small className='client_review'>
                Worked on various client and research projects within the organization. Got the experience of working in large software-based projects as a full-stack developer in the team. Learned about right standards of development, writing efficient code and coordination with other team members while developing and designing software.Key Achievements - Helped in maintaining a smooth functioning of the software for an increasing number of users crossing 3 lakhs and more.
              </small>
            </div>
          </article>
        </SwiperSlide>
      </Swiper>
      </div>
    </section>
  )
}

export default Work