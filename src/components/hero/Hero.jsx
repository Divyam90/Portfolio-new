import React from 'react'
import './hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (

    <div id="home" className="hero">
        <img src={profile_img} alt="Profile" />
        <h1> <span> I'm Divyam Kalra,</span><br/> Full Stack Developer.</h1>
        <p>I am a MERN Stack Developer with expertise in Both Frontend and Backend . </p>
        <div className="hero-action">
            <div className="hero-connect">Connect With Me</div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero