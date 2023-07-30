import React from 'react';
import jh from "../../images/jh.jpg"
import rf from "../../images/rafi.webp"
import aus from "../../images/aus.webp"
import { FaStar } from 'react-icons/fa';
const Review = () => {
    return (
        <div classname="container-fluid text-white bg-white">
        <section id="portfolio" class="portfolio section-bg">
       <div class="container">
 
         <div class="text">
           <h2 className='text-center'>Review</h2>
        
         </div>
 
         <div class="row" data-aos="fade-up">
         
         </div>
 
         <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
 
           <div class="col-lg-4 col-md-6 portfolio-item filter-app  shadow p-3">
             <div className='text-center'>
               <img width={100} src={jh} className="img-fluid rounded-circle p-3" alt=""/>
               <br/>
             <small className='text-muted'>JH_Mahbub</small>
               
             </div>
             <div class="pt-2 text-center">
            
                <FaStar className='text-warning fs-6'/>
            
                <FaStar className='text-warning fs-6'/>
            
                <FaStar className='text-warning fs-6'/>
            
                <FaStar className='text-warning fs-6'/>
            
                <FaStar className='text-warning fs-6'/>
                <br/>
                <small>" These guys are the best at what they do, you ask them to do something they'll do it. If something was misunderstood, they'll fix it right away and make sure you get what you're looking for. I have recommended @TeamDevs to many a colleague of mine for their fast and excellent services! "</small>
          
         </div>
        
           </div>
 
           <div class="col-lg-4 col-md-6 portfolio-item filter-web shadow p-3">
           <div className='text-center'>
             <img width={100} src={rf} className="img-fluid rounded-circle p-3" alt=""/>
             <br/>
             <small className='text-muted'>rafiul1652</small>
              
             </div>
             <div class="pt-2 text-center">
            
            <FaStar className='text-warning fs-6'/>
        
            <FaStar className='text-warning fs-6'/>
        
            <FaStar className='text-warning fs-6'/>
        
            <FaStar className='text-warning fs-6'/>
        
            <FaStar className='text-warning fs-6'/>
            <br/>
            <small>"Sheblu. brother! You are a great developer! One of the best I've ever seen. Nice to share the work with you. There were many prayers and love, brother. Go far ahead "</small>
      
     </div>
             
           </div>
 
           <div class="col-lg-4 col-md-6 portfolio-item filter-web shadow p-3">
           <div className='text-center'>
             <img width={100} src={aus} className="img-fluid rounded-circle p-3" alt=""/>
             <br/>
             <small className='text-muted'>useruser123</small>
              
             </div>
             <div class="pt-2 text-center">
            
            <FaStar className='text-warning fs-6'/>
        
            <FaStar className='text-warning fs-6'/>
        
            <FaStar className='text-warning fs-6'/>
        
            <FaStar className='text-warning fs-6'/>
        
            <FaStar className='text-warning fs-6'/>
            <br/>
            <small>"Good and prompt experience "</small>
      
     </div>
             
           </div>
           
 
          
 
 
          
 
          
 
         </div>
 
       </div>
     </section>
         </div>
    );
};

export default Review;