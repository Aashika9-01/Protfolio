
import React, {useRef} from 'react'
import './Contact.css'
import Instagram from '../images/Instagram_icon.png'
import Facebook from '../images/Facebook_Logo.png'
import Linkedin from '../images/LinkedIn_icon.png'
import youtube from '../images/youtube-logo.png'
import emailjs from '@emailjs/browser';
emailjs.init("e5GDX6UMaEWyxsaT9");

const Contact = () => {
  const form = useRef();
   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xewkd4h', 'template_c76uuy2', form.current)
      .then(() => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email Sent !')
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Something is wrong.Sent is Failed')
        },
      );
  };
  return (
   

    <div  id="contact">
      <h1 className='contactPage'>Contact Me</h1>
      <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>

      <form className="contactform" ref={form}  onSubmit={sendEmail}>
        <input type="text" className='name' placeholder='Enter Your Name' name='Enter your name'/>
         <input type="email" className='email' placeholder='Enter Your Email' name='Enter yiur email'/>
         <textarea className='msg' name="message" rows="5" placeholder='Your Message' required></textarea>
         <button  type='submit' value="Send" className='submitBtn'>Submit</button>
        
      </form>
   
                {/* <div className="contact-details">
                    <div className="contact-detail">
                  <img src={mail_icon}alt="" /><p>aashikachaudhary683@gmail.com</p>
                    </div>
                      <div className="contact-detail">
                  <img src={call_icon} alt="" /><p>+977-9806212196</p>
                    </div>
                      <div className="contact-detail">
                  <img src={location_icon}alt="" /><p>Ghorahi</p>
                    </div> */}
                    
                </div>
      
  )
}

export default Contact