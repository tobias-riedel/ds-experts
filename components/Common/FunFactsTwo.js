import React from "react";
import Link from "next/link";

const FunFactsTwo = () => {
  return (
    <>
      <div className="funfacts-area ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="section-title">
            <h2>We always try to understand users expectation</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="funfact">
                <i className="fa-solid fa-circle-check"></i>
                <h3>980+</h3>
                <p>Completed Projects</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="funfact">
                <i className="fa-solid fa-heart"></i>
                <h3>950+</h3>
                <p>Happy Clients</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="funfact">
                <i className="fa-solid fa-list-check"></i>
                <h3>780+</h3>
                <p>Ongoing Projects</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="funfact">
                <i className="fa-solid fa-trophy"></i>
                <h3>70+</h3>
                <p>Winning Awards</p>
              </div>
            </div>
          </div>

          <div className="contact-cta-box">
            <h3>Have any questions about us?</h3>
            <p>Don't hesitate to contact us</p>

            <Link href="/contact">
              <a className="btn btn-primary">Contact Us</a>
            </Link>
          </div>

          <div className="map-bg">
            <img src="/images/map.png" alt="map" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FunFactsTwo;
