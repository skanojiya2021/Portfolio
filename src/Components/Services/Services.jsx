import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'

const Services = () => {
  return (
    <div id='services' className='services'>
      <div className="title-box">
        <h1>Skills</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((service,index)=>{
          return <div key={index} className='services-format'>
            <img src={service.s_img} alt="" />
            <a href={service.s_link}><p>{service.s_name}</p></a>
            <span class="tooltiptext">Click to leran more</span>
            
          </div>
        })}
      </div>
    </div>
  )
}

export default Services