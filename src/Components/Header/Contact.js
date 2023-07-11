import React from 'react';
import { FaEnvelope, FaLocationArrow, FaPhone } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import "../Header/Nav.css"
import { toast } from 'react-toastify';
const Contact = () => {
  const sendEmail=(e)=>{
    e.preventDefault()
    toast.success("Your Mail is Send")
    emailjs.sendForm('service_fwlixb4','template_zpplboe',e.target,'dxpJ_WcOC2xqILPJR').then(res=>console.log(res)).catch(err=>console.log(err))
   e.target.reset()
}
    return (
        <div>
           <section id="contact" class="contact">
      <div class="container">

        <div class="section-title">
          <h2>Contact</h2>
          {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
        </div>

        <div class="row" data-aos="fade-in">

          <div class="col-lg-5 d-flex align-items-stretch">
            <div class="info">
              <div class="address">
                <i class="bi bi-geo-alt"><FaLocationArrow/></i>
                <h4>Location:</h4>
                <p>Feni,Chittagong,Bangladesh</p>
              </div>

              <div class="email">
                <i class="bi bi-envelope"><FaEnvelope/></i>
                <h4>Email:</h4>
                <p>shebluasad@gmail.com</p>
              </div>

              <div class="phone">
                <i class="bi bi-phone"><FaPhone/></i>
                <h4>Call:</h4>
                <p>+88 01609101537</p>
              </div>

            
            </div>

          </div>

          <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form onSubmit={sendEmail} >
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="name">Your Name</label>
                  <input type="text" name="name" class="form-control" id="name" required/>
                </div>
                <div class="form-group col-md-6">
                  <label for="name">Your Email</label>
                  <input type="email"  class="form-control" name="email" id="email" required/>
                </div>
              </div>
              <div class="form-group">
                <label for="name">Subject</label>
                <input type="text" class="form-control" name="subject" id="subject" required/>
              </div>
              <div class="form-group">
                <label for="name">Message</label>
                <textarea class="form-control" name="message" rows="10" required></textarea>
              </div>
           
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section> 
        </div>
    );
};

export default Contact;