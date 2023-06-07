import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {BsPhoneFill} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id="contact">

      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_option'>
          <article className='contact'>
            <MdOutlineEmail className='contact-icon' />
            <h4>Email</h4>
            <a href="mailto:shahkushal38@gmail.com" target="_blank"><h5>shahkushal38@gmail.com</h5></a>
            <a href="mailto:shahkushal38@gmail.com" target="_blank"> Send a message</a>
          </article>

          <article className='contact'>
            <BsLinkedin className='contact-icon'/>
            <h4>LinkedIn</h4>
            <a href="https://www.linkedin.com/in/kushal-shah-375792193/" target="_blank"><h5>Kushal Shah</h5></a>
            <a href="https://www.linkedin.com/in/kushal-shah-375792193/" target="_blank"> Send a message</a>
          </article>

          <article className='contact'>
            <BsWhatsapp className='contact-icon'/>
            <h4>WhatsApp</h4>
            {/* <a href="mailto:shahkushal38@gmail.com" target="_blank"><h5>shahkushal38@gmail.com</h5></a> */}
            <a href="https://api.whatsapp.com/send/?phone=8779681748" target="_blank"> Send a message</a>
          </article>
          
          <article className='contact'>
            <BsPhoneFill className='contact-icon'/>
            <h4>Mobile</h4>
            <a href="tel:+918779681748"> +91 8779681748</a>
          </article>
        </div>

        {/* end of contact options */}
        <div>
        <form action="">
          <input type="text" name="name" placeholder="Enter your Full Name" required />
          <input type="text" name="email" placeholder="Enter your Email" required/>
          <textarea name="message" id="" rows="7" placeholder='Enter your message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        </div>
      </div>
    </section>
  )
}

export default Contact