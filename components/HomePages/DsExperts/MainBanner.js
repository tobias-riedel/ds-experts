import Link from "next/link";
import Image from "next/image";

import callToActionImg from "../../../public//images/call_to_action.jpg";

const MainBanner = () => {
  return (
    <>
      <div
        className="hero-banner it-banner overly bg-fixed"
        style={{
          backgroundImage: `url(/images/hero-banner14.jpg)`,
        }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="main-banner-content">
                    <h1>
                      ds-experts
                      {/* <br /> IT-Consulting GmbH */}
                    </h1>

                    <p>
                      Dein <span className="accent">Traumjob</span> ist nur ein
                      paar Klicks entfernt
                    </p>

                    {/* TODO: Adjust link to  */}
                    <Link href="/contact">
                      <a className="btn btn-primary">MEHR ÜBER UNS</a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div
                    className="animate-banner-image"
                    data-aos="zoom-in"
                    data-aos-duration="1200"
                  >
                    <Image
                      src={callToActionImg}
                      alt="Animate image"
                      placeholder="blur"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="oval-shape">
          <img src="/images/oval-shape.png" alt="Shape" />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
