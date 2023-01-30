import React from "react";

const MySkills = () => {
  return (
    <>
      <div className="pp-skills-area pt-100 pb-70">
        <div className="container">
          <div className="section-title style-two">
            <h2>My Skills</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus
              commodo viverra maecenas accumsan lacus vel facilisis.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="pp-skills-box">
                <img
                  src="/images/personal-portfolio/skills-img1.png"
                  alt="image"
                />
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="pp-skills-box bg-eaf6ff">
                <img
                  src="/images/personal-portfolio/skills-img2.png"
                  alt="image"
                />
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="pp-skills-box bg-fff5e6">
                <img
                  src="/images/personal-portfolio/skills-img3.png"
                  alt="image"
                />
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="pp-skills-box bg-f0efff">
                <img
                  src="/images/personal-portfolio/skills-img4.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MySkills;
