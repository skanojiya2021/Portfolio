import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import phone from '../../assets/phone.png'
import company_data from '../../assets/company_data'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>EXPERIENCE</h1>
        <img src={theme_pattern} alt="" />
      </div>
        <div className="services-container">
        {company_data.map((service,index)=>{
          return <div key={index} className='services-format'>
            <img src={service.s_img} alt="" />
            <p><b>{service.s_name}</b></p>
            <p>{service.s_res}</p>
          </div>
        })}
      </div>
    
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>5+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>3</h1>
          <p>Product Base Company</p>
        </div>
      </div>
    </div>
  )
}

export default About