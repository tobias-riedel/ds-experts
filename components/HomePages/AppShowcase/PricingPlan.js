import React from "react";
import Link from "next/link";

const PricingPlan = () => {
  return (
    <>
      <div className="bg-F7F7FF pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="app-sub-title">PRICING TABLE</span>
            <h2>No Hidden Charge Applied, Choose Your Plan</h2>
          </div>

          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div
                className="app-pricing-box"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <div className="title">
                  <h3>Basic</h3>
                  <p>Powerful & awesome elements</p>
                </div>
                <div className="price">
                  $39 <span>/Month</span>
                </div>

                <Link href="/sign-in">
                  <a className="app-default-btn">Purchase Plan</a>
                </Link>

                <ul className="features-list">
                  <li>
                    <i className="fa-solid fa-check"></i> Up to 10 Website
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Lifetime free Support
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> 10 GB Dedicated
                    Hosting free
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> 24/7 Support
                  </li>
                  <li>
                    <i className="fa-solid fa-xmark"></i> SEO Optimized
                  </li>
                  <li>
                    <i className="fa-solid fa-xmark"></i> Live Support
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="app-pricing-box active"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <div className="title">
                  <h3>Team</h3>
                  <p>Powerful & awesome elements</p>
                </div>
                <span className="popular">Most Popular</span>
                <div className="price">
                  $49 <span>/Month</span>
                </div>

                <Link href="/sign-in">
                  <a className="app-default-btn">Purchase Plan</a>
                </Link>

                <ul className="features-list">
                  <li>
                    <i className="fa-solid fa-check"></i> Up to 200 Website
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Lifetime free Support
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> 25 GB Dedicated
                    Hosting free
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> 24/7 Support
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> SEO Optimized
                  </li>
                  <li>
                    <i className="fa-solid fa-xmark"></i> Live Support
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="app-pricing-box"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <div className="title">
                  <h3>Business</h3>
                  <p>Powerful & awesome elements</p>
                </div>
                <div className="price">
                  $59 <span>/Yearly</span>
                </div>

                <Link href="/sign-in">
                  <a className="app-default-btn">Purchase Plan</a>
                </Link>

                <ul className="features-list">
                  <li>
                    <i className="fa-solid fa-check"></i> Up to 500 Website
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Lifetime free Support
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> 50 GB Dedicated
                    Hosting free
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> 24/7 Support
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> SEO Optimized
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Live Support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPlan;
