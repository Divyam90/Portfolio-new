import React from 'react'
import './contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import location from '../../assets/location_icon.svg'
import mail from '../../assets/mail_icon.svg'
import call from '../../assets/call_icon.svg'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "0cc6fed4-5dc4-4e89-b59e-39608ad88db7");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
          alert("Email has been sent successfully")
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div id="contact" className="contact">
        <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
    </div>
    <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently available to join, so feel free to send me a message about anything that you want me to work on. You can contact anytime. </p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail} alt="" />
                    <p>Divyamkalra39@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call} alt="" />
                    <p>8847269793</p>
                </div>
                <div className="contact-detail">
                    <img src={location} alt="" />
                    <p>Rajpura, Punjab</p>
                </div>
            </div>

        </div>
        <form onSubmit={onSubmit}  className="contact-right">
        <label htmlFor="">Your Name</label>
        <input type="text" placeholder="Enter Your Name" name="name" />
        <label htmlFor="">Your Email</label>
        <input type="email" name="email" placeholder="Enter Your Email" />
        <label htmlFor="">Write your message here</label>
        <textarea name="message" rows="8" placeholder="Enter your Message"></textarea>
        <button className="contact-submit" type="submit" >Submit Now</button>
        </form>
    </div>
    </div>

  )
}

export default Contact