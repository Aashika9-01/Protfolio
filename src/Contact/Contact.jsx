import React, { useState, useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = formRef.current;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Providing all standard EmailJS parameter variations so the template receives them
    const templateParams = {
      name: name,
      from_name: name,
      user_name: name,
      email: email,
      from_email: email,
      user_email: email,
      reply_to: email,
      message: message,
    };

    try {
      await emailjs.send(
        'service_xewkd4h',
        'template_c76uuy2',
        templateParams,
        'e5GDX6UMaEWyxsaT9'
      );

      alert('Message sent successfully!');
      form.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact">
      <h1 className='contactPage'>Contact Me</h1>
      <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>

      <form className="contactform" ref={formRef} onSubmit={sendEmail}>
        <input 
          type="text" 
          className='name' 
          placeholder='Enter Your Name' 
          name='name' 
          required 
        />
        <input 
          type="email" 
          className='email' 
          placeholder='Enter Your Email' 
          name='email' 
          required 
        />
        <textarea 
          className='msg' 
          name="message" 
          rows="5" 
          placeholder='Your Message' 
          required
        ></textarea>
        <button type='submit' className='submitBtn' disabled={loading}>
          {loading ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default Contact;