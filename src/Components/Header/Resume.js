import React from 'react';
import  "./Nav.css"
const Resume = () => {
    return (
        <div className='text-black pt-5'>
            <section id="resume" class="resume">
      <div class="container text-black">

        <div class="section-title">
          <h2>Resume</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row">
          <div class="col-lg-6" data-aos="fade-up">
            <h4 class="resume-title">Sumary</h4>
            <div class="resume-item pb-0">
              <h5>MD Asaduz Zaman</h5>
              <small><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></small>
              <ul>
                <li>Bangladesh,Chittagong,Feni</li>
                <li>(+88) 01609101537</li>
                <li>shebluasad@gmail.com</li>
              </ul>
            </div>

            <h4 class="resume-title">Education</h4>
            <div class="resume-item">
              <h5>Course &amp; Full Stack Web Development</h5>
              <h6 className='text-primary'>6 Month</h6>
              <p><em>Programming Hero</em></p>
             
            </div>
            <div class="resume-item">
            <h5>Course &amp;  Web Development</h5>
              <h6 className='text-primary'>6 Month</h6>
              <p><em>Twionsoft Technology</em></p>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h4 class="resume-title">Professional Experience</h4>
            <div class="resume-item">
              <h5>Intern Frontend developer</h5>
              <h6 className='text-primary'>2022 - 2023(March)</h6>
              <p><em>Fast Coder Software Solution in Feni </em></p>
             
            </div>
            <div class="resume-item">
              <h5>Computer Operator(Part Time)</h5>
              <h6 className='text-primary'>2022 - (Present)</h6>
              <p><em>Dhalia High School </em></p>
             
            </div>
           
          </div>
        </div>

      </div>
    </section>
        </div>
    );
};

export default Resume;