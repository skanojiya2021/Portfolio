import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  return (
    <div id='contact' className='contact'>
      <div className="title-box">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <a href="mailto:shilpakanojiya2021@gmail.com">
                <img src={mail_icon} alt="Email Icon" /> <p>shilpakanojiya2021@gmail.com</p>
              </a>
            </div>
            <div className="contact-detail">
              <a href="tel:+918976166828">
                <img src={call_icon} alt="Call Icon" /> <p>+918976166828</p>
              </a>
            </div>

            <div className="contact-detail">
              <a href="https://www.google.com/maps/search/?api=1&query=Mumbai,+India" target="_blank" rel="noopener noreferrer">
                <img src={location_icon} alt="Location Icon" /> <p>Mumbai, India</p>
              </a>
            </div>
          </div>
        </div>
        <form action="https://getform.io/f/akkgjkoa" method="POST" className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' required />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' required />
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
          <button type='submit' className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact