import React, { useRef } from 'react';
import emailjs from 'emailjs-com'; // Make sure 'emailjs-com' is installed
import styles from './Contact.module.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ah01kfe', 'template_ggldwed', form.current, 'gmYAgV7VgNsZBfzhT')
      .then(
        (result) => {
          console.log('Email successfully sJent!', result.text);
        },
        (error) => {
          console.error('Email sending failed:', error.text);
        }
      );
  };

  return (
    <div className={styles.contacted} id='contact'>
      <h3 className={styles.send}>Contact Us</h3> 
      <div>
      <p className={styles.contacted_text}>"We'd love to hear from you! Whether you have a question, suggestion, or just want to say hello, please don't hesitate to reach out. Your feedback is invaluable to us, and we're always here to help. Share your thoughts, ask a question, or simply let us know how we're doing - we're all ears!"</p>
      </div>
      
    
     
    
   
      <form ref={form} className={styles.contact_form} onSubmit={sendEmail}>
        <input className={styles.contact_input} type="text" name="user_name" placeholder='Name' />
        <input className={styles.contact_input} type="email" name="user_email" placeholder='Email' />
        <input className={styles.contact_input} type="number" name="user_number" placeholder='Phone Number' />
        <textarea className={styles.contact_textarea} name="message" placeholder='Send your Message' />
        <button className={styles.bttn}>Send Message</button>
      </form>
      
      
    </div>
  );
};

export default Contact;