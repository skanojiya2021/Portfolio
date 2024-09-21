import React from 'react'
import './Hero.css'
import profile from '../../assets/shilpa.jpg'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile} alt="" className='profile-img' />
      <h1><span>I'm Shilpa Kanojiya,</span></h1>
      <p>4+ years of experience building websites and innovative tech solutions. particularly knowledgeable about Tailwind Node.js, React.js, HTML, CSS, and JavaScript. having practical experience with Splunk, Snowflake, Tableau, and MySQL, 
        among other tools. looking for a position that emphasizes teamwork and encourages learning by doing.</p>
      <div className="hero-action">
        <div className="hero-connect"><a className='anchor-link' offset={50} href='Shilpa_Resume.pdf' download = "Shilpa_Resume.pdf">My resume</a></div>
        <div className="hero-connect"><a className='anchor-link' offset={50} href='https://github.com/skanojiya2021'>Github</a></div>
        <div className="hero-connect"><a className='anchor-link' offset={50} href='www.linkedin.com/in/shilpa-kanojiya-908350188'>LinkedIn</a></div>
      </div>
    </div>
  )
}

export default Hero