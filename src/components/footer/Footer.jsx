import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'
import usericon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <img style={{height:"90px"}} src={logo} alt="" />
                <p>I am a full stack developer, has worked on live projects like Digilocker and ABC id by Government of India</p>

            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={usericon} alt="" />
                    <input type="email" placeholder="Enter Your Email" name="" id="" />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2024 Divyam Kalra, All rights reserved </p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer