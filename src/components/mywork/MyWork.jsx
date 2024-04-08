import React from 'react'
import './mywork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id="work" className="mywork">
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
            {data.map((work,i)=>{
                return <img key={i} src={work.w_img} alt="" />
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default MyWork