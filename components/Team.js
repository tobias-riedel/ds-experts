import React from "react";

const Team = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Unsere Experts</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-2 col-sm-6">
              <div
                className="team-card text-center"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <img
                  src="/images/team/Daniel-Schenk.png"
                  alt="Image"
                  className="rounded-circle"
                />

                <div className="team-caption">
                  <h3>Daniel Schenk</h3>
                  <p>Senior Projektleiter</p>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-sm-6">
              <div
                className="team-card text-center"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <img
                  src="/images/team/Michael-Heit.png"
                  alt="Image"
                  className="rounded-circle"
                />

                <div className="team-caption">
                  <h3>Michael Heit</h3>
                  <p>Projektleiter</p>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-sm-6">
              <div
                className="team-card text-center"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <img
                  src="/images/team/Marco-Marquardt.png"
                  alt="Image"
                  className="rounded-circle"
                />

                <div className="team-caption">
                  <h3>Marco Marquardt</h3>
                  <p>Projektleiter</p>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-sm-6">
              <div
                className="team-card text-center"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <img
                  src="/images/team/Tobias-Riedel.png"
                  alt="Image"
                  className="rounded-circle"
                />

                <div className="team-caption">
                  <h3>Tobias Riedel</h3>
                  <p>Software Developer</p>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-sm-6">
              <div
                className="team-card text-center"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <img
                  src="/images/team/Madelaine-Fröhlich.png"
                  alt="Image"
                  className="rounded-circle"
                />

                <div className="team-caption">
                  <h3>Madelaine Fröhlich</h3>
                  <p>Backoffice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
