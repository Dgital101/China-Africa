import React, {Component} from "react";


class Team extends Component
{
    render()
    {
        return(
            <section className="page-section bg-light" id="team" data-aos="fade-up" data-aos-delay="100">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase" data-aos="fade-up" data-aos-delay="100">Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted" data-aos="fade-up" data-aos-delay="100">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="team-member" data-aos="fade-up" data-aos-delay="100">
                            <img className="mx-auto rounded-circle" src="assets/img/tawanda.jpg" alt="..." />
                            <h4>Tawanda Raymond</h4>
                            <p className="text-muted1">Founder and CEO</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member" data-aos="fade-up" data-aos-delay="100">
                            <img className="mx-auto rounded-circle" src="assets/img/tadiwa.png" alt="..." />
                            <h4>Isaiah Chiraira</h4>
                            <p className="text-muted1">Marketing Manager</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Twitter Profile"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member" data-aos="fade-up" data-aos-delay="100">
                            <img className="mx-auto rounded-circle" src="assets/img/rhodha.jpg" alt="..." />
                            <h4>Rhodha M Chihota</h4>
                            <p className="text-muted1">Logistics Manager</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section>
        );
    }
}

export default Team