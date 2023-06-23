// import React from 'react';
// import "./Header/Nav.css"
// import ProgressBar from '@ramonak/react-progress-bar';
// import html5 from "../images/html.png"
// const Skill = () => {
//     return ( 
//             <div className='container-fluid text-white'>
//             <h4 className='pt-5 text-center'>MY SKILL</h4>
//             <p className='title'></p>
//             <div className='row'>
//                 <div className='col-md-68 p-5'>
//                <h6>HTML5</h6>
//             <ProgressBar  width='300px' completed="90"></ProgressBar>
//                 <h6 className='pt-2'>CSS3</h6>
//             <ProgressBar width='300px' completed="75"></ProgressBar>
//                 <h6 className='pt-2'>JS</h6>
//             <ProgressBar width='300px' completed="80"></ProgressBar>
//                 <h6 className='pt-2'>ReactJS</h6>
//             <ProgressBar width='300px' completed="70"></ProgressBar>
//                 <h6 className='pt-2'>NextJS</h6>
//             <ProgressBar width='300px' completed="60"></ProgressBar> 
//                 </div>
                

//             </div>
//         </div>
//     );
       
// };

// export default Skill;
import React from 'react';
import html from "../images/html.png"
import css from "../images/css.png"
import js from "../images/js.png"
import react from "../images/icons8-react-120.png"
import next from "../images/nextjs.png"
import express from "../images/express js.png"
import bootstrap from "../images/bootstrap.png"
import tailwind from "../images/tailwind-css-svgrepo-com.svg"
import mongo from "../images/mongodb.png"
import firebase from "../images/firebase.png"
import stripe from "../images/stripe.png"
import ssl from "../images/payment.png"


const Skill = () => {
    return (
        <div className='container text-dark'>
            <h2 className='text-center pt-5 pb-5 text-upperacse'>MY <span className='text-primary'>SKILL</span></h2>
            <h4 className='text-danger text-center'>Technologies</h4>
            <div className="row">
                <div className="col-md-3 col-sm-6">
                <div className="shadow text-center">
                    <img src={html} alt="" />
                </div>
                </div>
                <div className="col-md-3 col-sm-6">
                <div className="shadow text-center">
                    <img src={css} alt="" />
                </div>
                </div>
                <div className="col-md-3">
                <div className="shadow text-center">
                    <img src={bootstrap} alt="" />
                </div>
                </div>
                <div className="col-md-3">
                    <div  className="shadow text-center">
                    <img width={144}height={144} src={tailwind} alt="" />
                </div>
                </div>
                
            </div>
            <div className="row mt-2">
            <div className="col-md-3 col-sm-6">
                <div className="shadow text-center">
                    <img src={js} alt="" />
                </div>
                </div>
                <div className="col-md-3 col-sm-6 p-4">
                <div className="shadow text-center">
                    <img src={react} alt="" />
                </div>
                </div>
                <div className="col-md-3 col-sm-6 p-4">
                <div className="shadow text-center">
                    <img src={next} className='w-75' alt="" />
                </div>
                </div>
            <div className="col-md-3 col-sm-6">
                <div className="shadow text-center text-white">
                    <img width={144} height={144} src={express} alt="" />
                </div>
                </div>
                <div className="col-md-3 col-sm-6">
                <div className="shadow text-center">
                    <img src={mongo} alt="" />
                </div>
                </div>
                <div className="col-md-3 col-sm-6">
                <div className="shadow text-center">
                    <img src={firebase} alt="" />
                </div>
                </div>
                <div className="col-md-3 col-sm-6">
                <div className="shadow text-center">
                    <img src={stripe} alt="" />
                </div>
                </div>
                <div className="col-md-3 col-sm-6">
                <div className="shadow text-center">
                    <img src={ssl} className='w-100' alt="" />
                </div>
                </div>
                
            </div>
           
        </div>
    );
};

export default Skill;