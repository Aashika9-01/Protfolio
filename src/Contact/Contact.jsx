
import React, {useRef} from 'react'
import './Contact.css'
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
                    
                </div>
      
  )
}

export default Contact