import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SignUp from "./Pages/LoginSignUp/SignUp";
import Login from "./Pages/LoginSignUp/Login";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";

const App = () => {
  return (
    <Router>
      
      <div>
        <Navbar/>
        <Routes>
         
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
