import React from 'react';
import { FaBeer, FaBook, FaEnvelope, FaFacebook, FaFile, FaGithub, FaHome, FaLinkedin, FaList, FaPen, FaServer, FaTwitter, FaUser } from "react-icons/fa";
import Banner from '../Banner/Banner';
import logo from "../../images/Systems and technology programming company logo (1).png"
import "./Nav.css"
import Home from '../Home';
import About from '../About';
import Skill from '../Skill';
import { Link } from 'react-router-dom';
const Nav = () => {
  
 
    return (
      
<>


       
    
 
      <header id="header">
        <div class="d-flex flex-column">
    
          <div class="profile">
          <img src={logo} className='w-25 h-25'/>
            <h1 class="text-light"><a href="index.html">MD Asaduzzaman</a></h1>
            <div class="social-links mt-3 text-center">
          
              <a href="#" class="facebook"><FaFacebook/></a>
              <a href="#" class="instagram"><FaLinkedin/></a>
              <a href="https://github.com/Asadsheblu" class="google-plus"><FaGithub/></a>
              <a href="#" class="linkedin"><FaTwitter/></a>
            </div>
          </div>
          <nav id="navbar" class="nav-menu">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div >
        <ul className=''>
          <li><Link  to="/" class="nav-link scrollto active"><i class="bx bx-home"><FaHome/></i> <span>Home</span></Link></li>
          <li><Link  to="/about" class="nav-link scrollto active"><i class="bx bx-home"><FaUser/></i> <span>About</span></Link></li>
          <li><Link  to="/skill" class="nav-link scrollto active"><i class="bx bx-home"><FaServer/></i> <span>Skill</span></Link></li>
{/*        
          <li><Link to="/resume" class="nav-link scrollto active"><i class="bx bx-file-blank"><FaFile/></i> <span>Resume</span></Link></li> */}
          <li><Link to="/project" class="nav-link scrollto active"><i class="bx bx-file-blank"><FaBook/></i> <span>Project</span></Link></li>
          <li><Link to="/review" class="nav-link scrollto active"><i class="bx bx-file-blank"><FaPen/></i> <span>Review</span></Link></li>

         
          <li><Link to="/contact" class="nav-link scrollto active"><i class="bx bx-envelope"><FaEnvelope/></i> <span>Contact</span></Link></li>
          <li><Link to="/chat" class="nav-link scrollto active"><i class="bx bx-envelope"><FaEnvelope/></i> <span>Chat</span></Link></li>
        </ul>
        </div>
      </nav>
        </div>
      </header>
      </>
    );
};

export default Nav;