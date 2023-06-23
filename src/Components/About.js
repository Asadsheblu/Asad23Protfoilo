import React from 'react';
import  asad from "../images/asad.jpg"
import "./Header/Nav.css"
const About = () => {
    return (
        <div className='container-fluid text-black'>
            <h4 className='pt-5 text-center'>ABOUT ME</h4>
            <p className='title'></p>
            <div className='row'>
                <div className='col-md-6 p-5'>
                <img src={asad} width={300} className='img-fluid'/>
                </div>
                <div className='col-md-6 '>
                <h5 className='pt-5'>Hi, I am <span className='text-primary'>MD AsaduzZaman</span></h5>
                <p className='text-black'>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
               <h6 className='text-muted'>Full Name  <span className='ps-2'> :</span>      MD AsaduzZaman</h6>
               <h6 className='text-muted'><span className='pe-1'>Age</span>  <span className='ps-5'> :</span> 24 yeras</h6>
               <h6 className='text-muted'>Nationality  <span> :</span> Bangladeshi</h6>
               <h6 className='text-muted'>Languages  <span> :</span> Bangla,English</h6>
               <h6 className='text-muted'>Address  <span className='ps-2'> &nbsp;  :</span> Feni</h6>
               <button  className='btn btn-primary rounded p-3 fw-bold'><a className='text-white text-decoration-none' href='https://drive.google.com/file/d/14IL5F8eMLqErG1aERQxmGwJteNyMgJQw/view?usp=sharing'>Download CV</a></button>
                </div>

            </div>
        </div>
    );
};

export default About;