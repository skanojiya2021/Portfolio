import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="title-box">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
      {mywork_data.map((work,index)=>{
          return <div key={index} className='work-format'>
             <img src={work.w_img} alt="" />
            <p>{work.w_name}</p>
            <div className='code-details'>
            <a href={work.w_code}>Get Code</a>
            <a href={work.w_demo}>Get Demo</a>
            </div>
         
          </div>
        })}
      </div>
    </div>
  )
}

export default MyWork