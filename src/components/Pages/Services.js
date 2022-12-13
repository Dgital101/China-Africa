import React, {Component} from "react";


class Services extends Component
{
    render()
    {
        return(
            <div >

                        <div className="text-center" >
                            <h2 className="section-heading text-uppercase" id="Services" data-aos="fade-up" data-aos-delay="100">Our Services</h2>
                            <h3 className="section-subheading text-muted" data-aos="fade-up" data-aos-delay="100"> <hr id="line"></hr></h3>
                            <br></br>
                            <br></br>
                        </div>
                        
                
                 

                 <section className="page-section" id="services1" data-aos="fade-up" data-aos-delay="100">
                 <div class="container">
              
                    <div class="row text-center">
                        <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">

                            <img src="assets/img/advisory.jpg" alt="Avatar" className="rounded-circle" width="200" height="200"/>
                            <h4 class="my-3">Advisory</h4>
                        <p class="text-muted1">Our team of profesional people help you manage your business all the way to the top.
                         Doing business with China is lucrative. Products are affordable and land on time.</p>
                            
                        </div>
                        <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
                            <img src="assets/img/trade.jpg" alt="Avatar" className="rounded-circle" width="200" height="200"/>
                            <h4 className ="my-3">Trade</h4>
                            <p className="text-muted1">We help you to purchase any product you want from China. We have partnered with
                             a number of suppliers and Manufacturers.</p>
                        </div>
                        <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
                        <img src="assets/img/fin.jpg" alt="Avatar" className="rounded-circle" width="200" height="200"/>
                        <h4 className ="my-3">Money Transfer</h4>
                            <p className="text-muted1">We help you to purchase any product you want from China. We have partnered with
                             a number of suppliers and Manufacturers.</p>
                        </div>
                        
                    </div>
            </div>

                 </section>
            </div>
        );
    }
}

export default Services