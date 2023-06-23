import React from 'react';
import { FaBeer, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Banner from '../Banner/Banner';

import "./Nav.css"
import Home from '../Home';
import About from '../About';
import Skill from '../Skill';
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
      
<>



  
      <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>
    
 
      <header id="header">
        <div class="d-flex flex-column">
    
          <div class="profile">
          
            <h1 class="text-light"><a href="index.html">MD Asaduzzaman</a></h1>
            <div class="social-links mt-3 text-center">
          
              <a href="https://web.facebook.com/md.sheblu.161/" class="facebook"><FaFacebook/></a>
              <a href="#" class="instagram"><FaLinkedin/></a>
              <a href="https://github.com/Asadsheblu" class="google-plus"><FaGithub/></a>
              <a href="#" class="linkedin"><FaTwitter/></a>
            </div>
          </div>
          <nav id="navbar" class="nav-menu navbar navbar-expand-lg">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className=''>
          <li><Link  to="/" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></Link></li>
          <li><Link  to="/about" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>About</span></Link></li>
          <li><Link  to="/skill" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Skill</span></Link></li>
       
          <li><Link to="/resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></Link></li>
          <li><Link to="/project" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Project</span></Link></li>

          <li><a href="#services" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Services</span></a></li>
          <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
        </ul>
        </div>
      </nav>
        </div>
      </header>
      </>
    );
};

export default Nav;