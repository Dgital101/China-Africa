import React, {Component} from "react";


class Values extends Component
{
    render()
    {
        return(
            <div >

                       
                 <section className="page-section" id="values" >
                 <div className="text-center">
                            <h2 className="section-heading text-uppercase" data-aos="fade-up" data-aos-delay="100">Why Choose Us</h2>
                        </div>
                        <hr id="line"></hr>
                        <br></br>
                        <br></br>
                 <div class="container">
              
                    <div class="row text-center">
                        <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">

                            <img src="assets/img/transparent.jpg" alt="Avatar" className="rounded-circle" width="200" height="200"/>
                            <h4 class="my-3">Transparency</h4>
                        <p class="text-muted1">Our team of profesional people help you manage your business all the way to the top.
                         Doing business with China is lucrative. Products are affordable and land on time.</p>
                            
                        </div>
                        <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
                            <img src="assets/img/reliable.jpg" alt="Avatar" className="rounded-circle" width="200" height="200"/>
                            <h4 className ="my-3">Reliability</h4>
                            <p className="text-muted1">We help you to purchaseany product you want from China. We have partnered with
                             a number of suppliers and Manufacturers.</p>
                        </div>
                        <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
                        <img src="assets/img/affordable.jpg" alt="Avatar" className="rounded-circle" width="200" height="200"/>
                        <h4 className ="my-3">Affordability</h4>
                            <p className="text-muted1">We help you to purchaseany product you want from China. We have partnered with
                             a number of suppliers and Manufacturers.</p>
                        </div>
                        
                    </div>
            </div>

                 </section>
            </div>
        );
    }
}

export default Values