import React from 'react'
import './about.css';
import ME from '../../assets/forAbout.jpg'
import {BiAward} from 'react-icons/bi';
import {FiUsers} from 'react-icons/fi';
import {VscRootFolderOpened} from 'react-icons/vsc';

const about = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about_me_image">
            <img src={ME} alt="About image" />
          </div>
        </div>
        <div className="about_content">

          <div className="about__cards">

            <article className="about__card">
              <BiAward className="about__icon" />
              <h5>Exaperience</h5>
              <small>1+ years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>No clients yet</small>
            </article>

            <article className="about__card">
              <VscRootFolderOpened className="about__icon" />
              <h5>Projects</h5>
              <small>20+ completed</small>
            </article>

            </div>

            <p>
              I’m a undergraduate in computer science student at Sonargaon
              university.I have good knowledge of computer language like
              C,C++,HTML,CSS,JavaScript,React js,PHP,Laravel MySQL and I’m
              compatible on working various operating systems like
              Linux,Unix,macOS,and windows.please find my details CV for your
              kind consideration.should you need any more details ,please be let
              me know.
            </p>
            <a href="#contact" className="btn btn-outline-primary">
              Let's Talk
            </a>
         
        </div>
        </div>
    </section>
  );
}

export default about