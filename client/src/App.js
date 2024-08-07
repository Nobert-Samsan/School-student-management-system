import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 
import Navbar from "./components/Navbar/Navbar";
 
import SignUp from "./Pages/LoginSignUp/SignUp";
import Home from "./Pages/home/Home";
import Login from "./Pages/LoginSignUp/Login";
import AboutPage from "./Pages/AboutPage";
 
 
 
 

const App = () => {
  return (
    <Router>
      
      <div>
         
        <Routes>
         
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/contact" element={<ContactPage/>} /> */}
======= 
        </Routes>
    
      </div>

       
    </Router>
  );
};

export default App;
