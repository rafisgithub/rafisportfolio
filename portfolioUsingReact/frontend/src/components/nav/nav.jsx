import React from 'react'
import {AiFillHome} from 'react-icons/ai';
import {FaUserAlt} from 'react-icons/fa';
// import {AiFillHome} from 'react-icons/ai';
// import {AiFillHome} from 'react-icons/ai';
// import {AiFillHome} from 'react-icons/ai';


const nav = () => {
  return (
    <nav>
      <a href="#"><AiFillHome /></a>
      <a href="#about"><FaUserAlt /></a>
      <a href="#experience"><AiFillHome /></a>
      <a href="#services"><AiFillHome /></a>
      <a href="#contact"><AiFillHome /></a>
    </nav>
  )
}

export default nav