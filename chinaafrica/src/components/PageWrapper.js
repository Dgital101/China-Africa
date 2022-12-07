
import React, {Component } from 'react';

class PageWrapper extends Component
{
  render()
  {

    return (
        <div>
            {/* Navigation */}
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav" >
            <div className="container">
                <a className="navbar-brand" href="#page-top"><img  src="assets/img/logo.png" alt="..."  id='logo'/> <span id='china'>CHINA</span> <span id = 'africa' >AFRICA</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" id='fas'>
                    Menu
                    <i className="fas fa-bars ms-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li className="nav-item"><a className="nav-link" href="#services">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#portfolio">Values</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about">Services</a></li>
                        <li className="nav-item"><a className="nav-link" href="#team">Gallery</a></li>
                        <li className="nav-item"><a className="nav-link" href="#team"><a className="btn btn-warning btn-large" href="#" id='appointment'>Contact </a></a></li>
                    </ul>
                </div>
            </div>
        </nav>
        {this.props.children}
        </div>
    );
  }
}

export default PageWrapper;