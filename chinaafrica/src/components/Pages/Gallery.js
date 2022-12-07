import React, {Component} from "react";
import Carousel from 'react-bootstrap/Carousel';



class Gallery extends Component
{
    render()
    {
        return(
            <div >
                <section className="page-section" id="gallery">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Our Gallery</h2>
                            
                        </div>
                        <hr id="line"></hr>
                        
                
                 </section >

                 <section className="page-section" id="gallery">
                 <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-75"
          src="assets/img/ga1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Our Team handling Packages</h3>
          <p>Dedicated team working in our China warehouse</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-75"
          src="assets/img/ga2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Wide Range of Phone Screens</h3>
          <p>We supply Screens for all mobiles phones</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75"
          src="assets/img/ga3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Auto Spare Parts</h3>
          <p>
            We supply auto spare parts for all car models.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
                 </section>
            </div>
        );
    }
}

export default Gallery