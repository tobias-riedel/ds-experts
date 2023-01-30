import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="cs-services-area pt-100 pb-70">
        <div className="container">
          <div className="section-title white-color">
            <span className="sub-title">OUR SERVICES</span>
            <h2>
              The Power To Protect YourCyberspace & Complete Website Security
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div
                className="cs-services-card text-center"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <div className="image">
                  <img
                    src="/images/cyber-security/services/services-1.png"
                    alt="image"
                  />
                </div>
                <h3>
                  <Link href="/service-details">
                    <a>Easy To Transact</a>
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, is consectetur adipiscing elit,
                  sed do eiusmo.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="cs-services-card text-center"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <div className="image">
                  <img
                    src="/images/cyber-security/services/services-2.png"
                    alt="image"
                  />
                </div>
                <h3>
                  <Link href="/service-details">
                    <a>Secure Managed IT</a>
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, is consectetur adipiscing elit,
                  sed do eiusmo.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="cs-services-card text-center"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <div className="image">
                  <img
                    src="/images/cyber-security/services/services-3.png"
                    alt="image"
                  />
                </div>
                <h3>
                  <Link href="/service-details">
                    <a>Data Protection</a>
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, is consectetur adipiscing elit,
                  sed do eiusmo.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="cs-services-card text-center"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <div className="image">
                  <img
                    src="/images/cyber-security/services/services-4.png"
                    alt="image"
                  />
                </div>
                <h3>
                  <Link href="/service-details">
                    <a>Incident Responder</a>
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, is consectetur adipiscing elit,
                  sed do eiusmo.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="cs-services-card text-center"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="500"
              >
                <div className="image">
                  <img
                    src="/images/cyber-security/services/services-5.png"
                    alt="image"
                  />
                </div>
                <h3>
                  <Link href="/service-details">
                    <a>Data Encryption</a>
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, is consectetur adipiscing elit,
                  sed do eiusmo.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="cs-services-card text-center"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="600"
              >
                <div className="image">
                  <img
                    src="/images/cyber-security/services/services-6.png"
                    alt="image"
                  />
                </div>
                <h3>
                  <Link href="/service-details">
                    <a>Disaster Planning</a>
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, is consectetur adipiscing elit,
                  sed do eiusmo.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="cs-services-card text-center"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="700"
              >
                <div className="image">
                  <img
                    src="/images/cyber-security/services/services-7.png"
                    alt="image"
                  />
                </div>
                <h3>
                  <Link href="/service-details">
                    <a>Threat Hunter</a>
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, is consectetur adipiscing elit,
                  sed do eiusmo.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="cs-services-card text-center"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="800"
              >
                <div className="image">
                  <img
                    src="/images/cyber-security/services/services-8.png"
                    alt="image"
                  />
                </div>
                <h3>
                  <Link href="/service-details">
                    <a>Data Recovery</a>
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, is consectetur adipiscing elit,
                  sed do eiusmo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
