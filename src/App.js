import logo from './logo.svg';
import './App.css';
import Nav from './Components/Header/Nav';
import Banner from './Components/Banner/Banner';
import {Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Skill from './Components/Skill';
import Resume from './Components/Header/Resume';
import Project from './Components/Header/Project';
function App() {
  return (
    <div className=''> 
<Nav/>
     <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/about" element={<About />}> </Route>
        <Route path="/skill" element={<Skill />}> </Route>
        <Route path="/resume" element={<Resume />}> </Route>
        <Route path="/project" element={<Project />}> </Route>
        
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
       
      </Routes>
    </div>
  );
}

export default App;
