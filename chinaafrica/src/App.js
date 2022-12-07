import React, {Component} from "react";
import PageWrapper from "./components/PageWrapper";
import Home from "./components/Pages/Home";
import Services from "./components/Pages/Services";
import Values from "./components/Pages/Values";
import Gallery from "./components/Pages/Gallery";
import Reviews from "./components/Pages/Reviews";
import Contact from "./components/Pages/Contact";
import Footer from "./components/Pages/Footer";
import About from "./components/Pages/About";
//import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

class App extends Component{
  
  render()
  {
    return(
      <PageWrapper>
        <Home/>
        <Values/>
        <Services/>
        <About/>
        <Gallery/>
        <Reviews/>
        <Contact/>
        <Footer/>
       
      </PageWrapper>
    );
  }
}

export default App;
