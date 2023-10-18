import React from "react";
import { useState } from "react";
import "./App.css";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
  
    <BrowserRouter>
      
      <div className="relative z-0 bg-primary text-white">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
          <br />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
   
    </BrowserRouter>
  );
};

export default App;
