import React from 'react'
import './about.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (

    <div id="about" className="about">
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita eius dolorem minus illo voluptas autem!</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem incidunt excepturi placeat ex numquam quidem?</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}}/> </div>
                    <div className="about-skill"><p>Javascript </p><hr style={{width:"70%"}}/> </div>
                    <div className="about-skill"><p>React Js</p><hr style={{width:"60%"}}/> </div>
                    <div className="about-skill"><p>Node Js</p><hr style={{width:"70%"}}/> </div>
                    <div className="about-skill"><p>Mongo DB</p><hr style={{width:"60%"}}/> </div>
                    <div className="about-skill"><p>JAVA</p><hr style={{width:"80%"}}/> </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>1+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>20+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>3+</h1>
                <p>LIVE PROJECTS</p>
            </div>
        </div>
    </div>

    )
}

export default About