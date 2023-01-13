import React from 'react';
import './contact.css';
import {MdOutlineMail} from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
// import React, { useRef } from 'react';
// import emailjs from 'emailjs-com';
const Contact = () => {

  // const from = useRef();
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_fs8km5r', 'template_de4hjkn', form.current, 'YOUR_PUBLIC_KEY')
  //     e.target.reset();
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">

          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>smrafi120@gmail.com</h5>
            <a href="mailto:smrafi120@gmail.com" target={'_blank'}>Send a message</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Rafi Ahmed</h5>
            <a href="https://m.me/profile.php?id=100082145081666" target={'_blank'}>Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5></h5>
            <a href="https://api.whatsapp.com/send?phone+8801646628341" target={'_blank'}>Send a message</a>
          </article>

        </div>
        {/* End of the contact section */}
        {/* ref={form} onSubmit={sendEmail} */}
        <form action=''>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='You Email' required/>
          <textarea name="message" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-outline-primary'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact