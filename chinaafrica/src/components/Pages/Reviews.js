import React, {Component} from "react";


class Reviews extends Component
{
    render()
    {
        return(
            <div >
                <section className="page-section" id="services">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">What Our Clients Say</h2>
                            <h3 className="section-subheading text-muted"> <hr id="line"></hr></h3>
                        </div>
                        
                
                 </section >

                 <section className="page-section" id="services">
                  <div className="container">
              
                    <div className="row text-center">
                        <div className="col-md-4" id="rev">
                            <box className="review" >
                            <img src="assets/img/isaiah.jpeg" alt="Avatar" className="rounded-circle" width="120" height="120"/>
                            <h6 className ="my-3">Isaiah Chiraira</h6>
                            <p className="text-muted1">"We help you to purchaseany product you want from China. We have partnered with
                             a number of suppliers and Manufacturers".</p>
                            </box>
         
                        </div>
                        <div className="col-md-4" id="rev">
                            <box  >
                            <img src="assets/img/advisory.jpg" alt="Avatar" className="rounded-circle" width="120" height="120"/>
                            <h6 className ="my-3">Njabulo Masilela</h6>
                            <p className="text-muted1">"We help you to purchaseany product you want from China. We have partnered with
                             a number of suppliers and Manufacturers".</p>
                            </box>
                        </div>
                        <div className="col-md-4" id="rev">
                            <box >
                            <img src="assets/img/advisory.jpg" alt="Avatar" className="rounded-circle" width="120" height="120"/>
                            <h6 className ="my-3">Njabulo Masilela</h6>
                            <p className="text-muted1">"We help you to purchaseany product you want from China. We have partnered with
                             a number of suppliers and Manufacturers".</p>
                            </box>
                     
                        </div>
                        
                    </div>
            </div> 

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                 </section>
            </div>
        );
    }
}

export default Reviews