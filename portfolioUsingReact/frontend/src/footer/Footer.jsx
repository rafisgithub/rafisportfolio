import React from 'react';
import './footer.css';
import {BsFacebook} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";

const Footer = () => {
  return (
      <footer>
        <a href="#" className={'footer__logo'}>Rafi Ahmed</a>
        <ul className={'peralinks'}>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        
        <div className="footer__socials">
          <a href="https://www.facebook.com/profile.php?id=100082145081666"><BsFacebook/></a>
          <a href="https://twitter.com/RafiAhm15029053"><BsTwitter/></a>
          <a href="https://www.instagram.com/rafiahmed299/"><BsInstagram/></a>
        </div>

        <div className="footer__copyright">
          <small>&copy; Rafi Ahmed. All rights reserved-2023</small>
        </div>
      </footer>
  )
}

export default Footer