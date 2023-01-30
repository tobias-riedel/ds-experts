import React from "react";

const HowItWorks = () => {
  return (
      <>
        <div className="bg-dark ptb-100">
          <div className="container">
            <div className="section-title">
              <span className="sub-title">HOW IT WORKS</span>
              <h2>One Of The Three Main Categories Of SaaS Solution</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="saas-how-it-works-content white-color">
                  <ul>
                    <li>
                      <i className="icon fa-solid fa-chart-line"></i>
                      <h3>Advanced Analytics</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                      </p>
                    </li>
                    <li>
                      <i className="icon fa-solid fa-user-lock"></i>
                      <h3>High Scalability</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                      </p>
                    </li>
                    <li>
                      <i className="icon fa-solid fa-arrows-rotate"></i>
                      <h3>Automatic Updates</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div
                  className="saas-how-it-works-image"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img
                    src="/images/saas-startup/how-it-works.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default HowItWorks;
