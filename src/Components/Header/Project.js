import React from 'react';
import feri from "../../images/ferio.png"
import blog from "../../images/blog.png"
import bycyle from "../../images/bycule.png"
import desingo from "../../images/desingo.png"
import delivery from "../../images/deliver-project.png"
import influencer from "../../images/influencer.png"
import center from "../../images/center.png"
import next from "../../images/nextjs.png"
import mongodb from "../../images/mongodb.png"
import express from "../../images/express js.png"
import firebase from "../../images/firebase.png"
import ssl from "../../images/payment.png"
import stripe from "../../images/stripe.png"
import rent from "../../images/rent house (2).png"
import talwind from "../../images/tailwind-css-svgrepo-com.svg"
import "./Nav.css"
import { Link } from 'react-router-dom';
import { FaBootstrap, FaGithub, FaGlobe, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
const Project = () => {
    return (
        <div classname="container-fluid text-white bg-white">
       <section id="portfolio" class="portfolio section-bg">
      <div class="container">

        <div class="text-white">
          <h2 className='text-center'>Portfolio</h2>
       
        </div>

        <div class="row" data-aos="fade-up">
        
        </div>

        <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

          <div class="col-lg-4 col-md-6 portfolio-item filter-app  shadow p-3">
            <div class="portfolio-wrap">
              <img src={feri} class="img-fluid" alt=""/>
              
            </div>
            <div class="social-links pt-2">
            <h6 className='text-center fw-bold'>Feri E-commerce Website</h6>
                <small className='text-muted'>This is Full Stack Muli-vendor E-commerce Website.User Can do Order and  Payment use Bank Card or Mobile Banking System.and also user can add product for Buying this website.</small>
                <p>Technology: <img src={next} width={20}/> <FaBootstrap width={24}/>
               
                <img src={express} width={20}/>
                <img src={mongodb} width={20}/>
                <img src={ssl} width={24}/>
                
                
                 </p>
          <small className=' fw-bold'>Live Link:</small>
            <a href="https://next-commerce1frontend.vercel.app/" class="facebook"><FaGlobe/></a>
            <br/>
          <small className=' fw-bold'>Frontend Code Link:</small>
            <a href="https://github.com/Asadsheblu/NextCommerce1frontend" ><FaGithub className='text-dark'/></a>
            <br/>
          <small className=' fw-bold'>Backend Code Link:</small>
            <a href="https://github.com/Asadsheblu/nextcommerce1backend" class=""><FaGithub className='text-dark'/></a>
         
        </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web shadow p-3">
            <div class="portfolio-wrap">
              <img src={bycyle} class="img-fluid" alt=""/>
             
            </div>
            <div class="social-links pt-2">
                <h6 className='text-center fw-bold'>Bycyle Buying Website</h6>
                <small className='text-muted'>This is Full Stack  Website.User Can do Order and  Payment use Bank Card.Only Admin Can get access for upload product and Dashboard</small>
                <p>Technology:<FaReact width={24} className='text-primary'/> 
                <img src={talwind} width={20}/>
                <img src={express} width={20}/>
                <img src={mongodb} width={20}/>
                <img src={firebase} width={20}/>
                <img src={stripe} width={20}/>
                
                
                 </p>
          <small className=' fw-bold'>Live Link:</small>
            <a href="https://bicyle-manufacture-client-side.vercel.app/" class="facebook"><FaGlobe/></a>
            <br/>
          <small className=' fw-bold'>Frontend Code Link:</small>
            <a href="https://github.com/Asadsheblu/Bicyle-manufacture-client-side" ><FaGithub className='text-dark'/></a>
            <br/>
          <small className=' fw-bold'>Backend Code Link:</small>
            <a href="https://github.com/Asadsheblu/Bicyle-manufacture-server-side" class=""><FaGithub className='text-dark'/></a>
         
        </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web shadow p-3">
            <div class="portfolio-wrap">
              <img src={rent} class="img-fluid" alt=""/>
             
            </div>
            <div class="social-links pt-2">
                <h6 className='text-center fw-bold'>Rent House Website</h6>
                <small className='text-muted'>This is Full Stack  Website.User Can Add House For Sell also contact buyer for Buying or Rent House.</small>
                <p>Technology: <img src={next} width={20}/> <FaBootstrap width={24}/>
               
               <img src={express} width={20}/>
               <img src={mongodb} width={20}/>
               
               
               
                </p>
          <small className=' fw-bold'>Live Link:</small>
            <a href="https://rent-house-frontend.vercel.app/" class="facebook"><FaGlobe/></a>
            <br/>
          <small className=' fw-bold'>Frontend Code Link:</small>
            <a href="https://github.com/Asadsheblu/RentHouse-Frontend" ><FaGithub className='text-dark'/></a>
            <br/>
          <small className=' fw-bold'>Backend Code Link:</small>
            <a href="https://github.com/Asadsheblu/RentHouse-Backend" class=""><FaGithub className='text-dark'/></a>
         
        </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web shadow p-3">
            <div class="portfolio-wrap">
              <img src={blog} class="img-fluid" alt=""/>
             
            </div>
            <div class="social-links pt-2">
                <h6 className='text-center fw-bold'>Blog Website</h6>
                <small className='text-muted'>This is Full Stack Blog Website.User Can do Post and Read Blog.</small>
                <p>Technology:<FaReact width={24} className='text-primary'/> <FaBootstrap width={24}/>
                <img src={express} width={20}/>
                <img src={mongodb} width={20}/>
                
                
                
                 </p>
          <small className=' fw-bold'>Live Link:</small>
            <a href="https://asadblog-frontend.vercel.app/" class="facebook"><FaGlobe/></a>
            <br/>
          <small className=' fw-bold'>Frontend Code Link:</small>
            <a href="https://github.com/Asadsheblu/Asadblog-frontend" ><FaGithub className='text-dark'/></a>
            <br/>
          <small className=' fw-bold'>Backend Code Link:</small>
            <a href="https://github.com/Asadsheblu/Asadblog-backend" class=""><FaGithub className='text-dark'/></a>
         
        </div>
          </div>
          <div class="col-lg-4 col-md-6 portfolio-item filter-app shadow p-3">
            <div class="portfolio-wrap">
              <img src={desingo} class="img-fluid" alt=""/>
             
             
            </div>
            <div class="social-links pt-2">
            <h6 className='text-center fw-bold'>React Landing Page</h6>
                <small className='text-muted'>This is React Landing Page.</small>
                <p>Technology:<FaReact width={24} className='text-primary'/>
                <img src={talwind} width={20}/>
                
                
                 </p>
          <small className=' fw-bold'>Live Link:</small>
            <a href="https://designo-project-rho.vercel.app/" class="facebook"><FaGlobe/></a>
            <br/>
          <small className=' fw-bold'>Frontend Code Link:</small>
            <a href="https://github.com/Asadsheblu/Designo-project/" ><FaGithub className='text-dark'/></a>
          
          
         
        </div>
          </div>
          <div class="col-lg-4 col-md-6 portfolio-item filter-app shadow p-3">
            <div class="portfolio-wrap">
              <img src={delivery} class="img-fluid" alt=""/>
             
             
            </div>
            <div class="social-links pt-2">
            <h6 className='text-center fw-bold'> Deliver Company Website</h6>
                <small className='text-muted'>This is delivery Company website.</small>
                <p>Technology: <img src={next} width={20}/> <FaBootstrap width={24}/>
                </p>
          <small className=' fw-bold'>Live Link:</small>
            <a href="https://delivery-one-fawn.vercel.app/" class="facebook"><FaGlobe/></a>
            <br/>
          <small className=' fw-bold'>Frontend Code Link:</small>
            <a href="https://github.com/Asadsheblu/Delivery" ><FaGithub className='text-dark'/></a>
          
          
         
        </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card shadow p-3">
            <div class="portfolio-wrap">
              <img src={center} class="img-fluid" alt=""/>
              <h6 className='text-center fw-bold'>Connunity Center Landing Page</h6>
                <small className='text-muted'>This is Landing Page.</small>
                <p>Technology:<FaHtml5 width={24} className='text-primary'/> <FaBootstrap width={24}/>
               
                
                
                 </p>
             
            </div>
            <div class="social-links pt-2">
          <small className=' fw-bold'>Live Link:</small>
            <a href="https://artisan-convention-center.netlify.app/" class="facebook"><FaGlobe/></a>
            <br/>
          <small className=' fw-bold'>Frontend Code Link:</small>
            <a href="https://github.com/Asadsheblu/Artisan-convention-center" ><FaGithub className='text-dark'/></a>
           
        </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-5.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-links">
                <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 2"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-6.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-links">
                <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 3"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-7.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-links">
                <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 1"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-8.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-links">
                <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 3"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-9.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-links">
                <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
        </div>
    );
};

export default Project;