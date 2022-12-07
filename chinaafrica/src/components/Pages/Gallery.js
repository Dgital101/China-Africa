import React, {Component} from "react";
import Carousel from 'react-bootstrap/Carousel';



class Gallery extends Component
{
    render()
    {
        return(
            <div >
                <section className="page-section" id="services">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Our Gallery</h2>
                            
                        </div>
                        <hr id="line"></hr>
                        
                
                 </section >

                 <section className="page-section" id="services">
                 <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-75"
          src="assets/img/affordable.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-75"
          src="assets/img/transparent.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75"
          src="assets/img/reliable.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
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