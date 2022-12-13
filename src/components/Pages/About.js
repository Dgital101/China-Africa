import React, {Component} from "react";


class About extends Component
{
    render()
    {
        return(
            <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase" data-aos="fade-up" data-aos-delay="100">About Us</h2>
                    <h3 className="section-subheading text-muted" data-aos="fade-up" data-aos-delay="100"> <hr id="line"></hr></h3>
                </div>
                <ul className="timeline">
                    <li>
                        <div className="timeline-image" data-aos="fade-up" data-aos-delay="100"><img className="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2009-2011</h4>
                                <h4 className="subheading">Our Humble Beginnings</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image" data-aos="fade-up" data-aos-delay="100"><img className="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>March 2011</h4>
                                <h4 className="subheading">An Agency is Born</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-image" data-aos="fade-up" data-aos-delay="100"><img className="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>December 2015</h4>
                                <h4 className="subheading">Transition to Full Service</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image" data-aos="fade-up" data-aos-delay="100"><img className="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt="..." /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>July 2020</h4>
                                <h4 className="subheading">Phase Two Expansion</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image" data-aos="fade-up" data-aos-delay="100">
                            <h4>
                                Be Part
                                <br />
                                Of Our
                                <br />
                                Story!
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        );
    }
}


export default About