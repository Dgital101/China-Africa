import React, {Component} from "react";


class Services extends Component
{
    render()
    {
        return(
            <div >
                <section className="page-section" id="services">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Our Services</h2>
                            <h3 className="section-subheading text-muted"> <hr id="line"></hr></h3>
                        </div>
                        
                
                 </section >

                 <section className="page-section" id="services1">
                 <div class="container">
              
                    <div class="row text-center">
                        <div class="col-md-4">

                            <img src="assets/img/advisory.jpg" alt="Avatar" className="rounded-circle" width="200" height="200"/>
                            <h4 class="my-3">Advisory</h4>
                        <p class="text-muted">Our team of profesional people help you manage your business all the way to the top.
                         Doing business with China is lucrative. Products are affordable and land on time.</p>
                            
                        </div>
                        <div class="col-md-4">
                            <img src="assets/img/advisory.jpg" alt="Avatar" className="rounded-circle" width="200" height="200"/>
                            <h4 className ="my-3">Trade</h4>
                            <p className="text-muted">We help you to purchaseany product you want from China. We have partnered with
                             a number of suppliers and Manufacturers.</p>
                        </div>
                        <div class="col-md-4">
                        <img src="assets/img/advisory.jpg" alt="Avatar" className="rounded-circle" width="200" height="200"/>
                        <h4 className ="my-3">Money Transfer</h4>
                            <p className="text-muted">We help you to purchaseany product you want from China. We have partnered with
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