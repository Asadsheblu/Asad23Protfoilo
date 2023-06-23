import React from 'react';
import "./Header/Nav.css"
import { Typewriter } from 'react-simple-typewriter';
import sheblu from "../images/sheblu.png"
const Home = () => {
   
    
      return (
        <div className='container text-center text-black pt-5'>
               <img src={sheblu}  className='img-fluid w-25 h-25'/> 
          <h1 className='pt-5' style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
           I am a {' '}
            <span  className='text-primary '>
          
              <Typewriter
                words={['MD AsaduzZaman', ' Frontend Developer',]}
                loop={5}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              
              />
            </span>
          </h1>
       <p className='text-black'>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.

</p>
        </div>
      )
};

export default Home;