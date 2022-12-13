import React, {Component} from "react";


class Reviews extends Component
{
   
       
    


    render()
    {
        return(
            <div >

                    
                

                 <section id="testimonials" className="testimonials section-bg" data-aos="fade-up" data-aos-delay="100">
                 <div className="text-center">
                            <h2 className="section-heading text-uppercase">Testimonials</h2>
                            <h3 className="section-subheading text-muted"> <hr id="line"></hr></h3>
                            <br></br>
                            <br></br>
                        </div>
      <div className="container">

      

        <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper-wrapper1">

            <div className="swiper-slide">
              <div className="testimonial-item" data-aos="fade-up">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/njabulo.jpg" className="testimonial-img" alt=""></img>
                <h3>Njabulo Masilela</h3>
                <div className="swiper-pagination"></div>
                <h4>CFO &amp; Cofounder</h4>
                <br></br>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item" data-aos="fade-up" data-aos-delay="100">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/christina.jpg" className="testimonial-img" alt=""></img>
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
                <br></br>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item" data-aos="fade-up" data-aos-delay="200">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/isaiah.png" className="testimonial-img" alt=""></img>
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
                <br></br>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item" data-aos="fade-up" data-aos-delay="300">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/isaiah.png" className="testimonial-img" alt=""></img>
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
                <br></br>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item" data-aos="fade-up" data-aos-delay="400">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/isaiah.png" className="testimonial-img" alt=""></img>
                <h3>John Larson</h3>
                <div className="swiper-pagination"></div>
                <h4>Entrepreneur</h4>
                <br></br>
              </div>
            </div>

          </div>
          <div className="swiper-pagination"></div>
        </div>

      </div>
    </section>
            </div>
        );
    }
}

export default Reviews