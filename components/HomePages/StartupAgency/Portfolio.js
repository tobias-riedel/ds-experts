import React from "react";
import Link from "next/link";

const Portfolio = () => {
  return (
    <>
      <section className="portfolio-area pt-100">
        <div className="container">
          <div className="section-title">
            <h2>Our Portfolio</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="mw-1920">
          <div className="row m-0">
            <div className="col-lg-3 col-sm-6 p-0">
              <div className="single-portfolio">
                <img src="/images/portfolio/portfolio1.jpg" alt="image" />

                <div className="portfolio-content">
                  <h3>
                    <Link href="/portfolio-details">
                      <a>UX Workflow</a>
                    </Link>
                  </h3>

                  <Link href="/portfolio-details">
                    <a className="link-btn">
                      <i className="pe-7s-link"></i>
                    </a>
                  </Link>
                </div>
              </div>

              <div className="single-portfolio">
                <img src="/images/portfolio/portfolio2.jpg" alt="image" />

                <div className="portfolio-content">
                  <h3>
                    <Link href="/portfolio-details">
                      <a>Web Development</a>
                    </Link>
                  </h3>

                  <Link href="/portfolio-details">
                    <a className="link-btn">
                      <i className="pe-7s-link"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 p-0">
              <div className="single-portfolio">
                <img src="/images/portfolio/portfolio3.jpg" alt="image" />

                <div className="portfolio-content">
                  <h3>
                    <Link href="/portfolio-details">
                      <a>Web Design</a>
                    </Link>
                  </h3>

                  <Link href="/portfolio-details">
                    <a className="link-btn">
                      <i className="pe-7s-link"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 p-0">
              <div className="single-portfolio">
                <img src="/images/portfolio/portfolio4.jpg" alt="image" />

                <div className="portfolio-content">
                  <h3>
                    <Link href="/portfolio-details">
                      <a>React Development</a>
                    </Link>
                  </h3>

                  <Link href="/portfolio-details">
                    <a className="link-btn" target="_blank">
                      <i className="pe-7s-link"></i>
                    </a>
                  </Link>
                </div>
              </div>

              <div className="single-portfolio">
                <img src="/images/portfolio/portfolio5.jpg" alt="image" />

                <div className="portfolio-content">
                  <h3>
                    <Link href="/portfolio-details">
                      <a>Mobile Apps Development</a>
                    </Link>
                  </h3>

                  <Link href="/portfolio-details">
                    <a className="link-btn" target="_blank">
                      <i className="pe-7s-link"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 p-0">
              <div className="single-portfolio">
                <img src="/images/portfolio/portfolio6.jpg" alt="image" />

                <div className="portfolio-content">
                  <h3>
                    <Link href="/portfolio-details">
                      <a>eCommerce</a>
                    </Link>
                  </h3>

                  <Link href="/portfolio-details">
                    <a className="link-btn" target="_blank">
                      <i className="pe-7s-link"></i>
                    </a>
                  </Link>
                </div>
              </div>

              <div className="single-portfolio">
                <img src="/images/portfolio/portfolio7.jpg" alt="image" />

                <div className="portfolio-content">
                  <h3>
                    <Link href="/portfolio-details">
                      <a>UX for Mobile Apps</a>
                    </Link>
                  </h3>

                  <Link href="/portfolio-details">
                    <a className="link-btn" target="_blank">
                      <i className="pe-7s-link"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
