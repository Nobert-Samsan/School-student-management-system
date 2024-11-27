import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 
import Navbar from "./components/Navbar/Navbar";

import SignUp from "./Pages/LoginSignUp/SignUp";
import Adddetails from "./Pages/addDetails/addDetails";
import Home from "./Pages/home/Home";
import Login from "./Pages/LoginSignUp/Login";
import AboutPage from "./Pages/AboutPage";
import Contectpage from "./Pages//ContactPage";
import ServicesPage from "./Pages/ServicesPage";
import UpcomingEvents from "./Pages/UpcomingEvents";
 
 
 
 

const App = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contect" element={<Contectpage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Adddetails" element={<Adddetails />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/events" element={<UpcomingEvents />} />
          =======
        </Routes>
      </div>
    </Router>
  );
};

export default App;
