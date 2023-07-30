import logo from './logo.svg';
import './App.css';
import Nav from './Components/Header/Nav';
import Banner from './Components/Banner/Banner';
import {Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Skill from './Components/Skill';
import Project from './Components/Header/Project';
import Contact from './Components/Header/Contact';
import Review from './Components/Header/Review';
import Resume from './Components/Header/Resume';
import Chat from './Components/Chat/Chat';

function App() {
  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/64c5edc6cc26a871b02c1af4/1h6iihlat';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
  return (
    <div className=''> 



<Nav/>
     <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/about" element={<About />}> </Route>
        <Route path="/skill" element={<Skill />}> </Route>
        <Route path="/resume" element={<Resume />}> </Route>
        <Route path="/project" element={<Project />}> </Route>
       
        <Route path="/review" element={<Review />}> </Route>
       
        <Route path="/contact" element={<Contact />}> </Route>
        {/* <Route path="/chat" element={<Chat />}> </Route> */}
        
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
       
      </Routes>
    </div>
  );
}

export default App;
