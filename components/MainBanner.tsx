import Image from "next/image";
import Link from "next/link";
import callToActionImg from "../public/images/call_to_action.jpg";

const MainBanner = () => {
  return (
    <>
      <div
        className="hero-banner it-banner overlay bg-fixed"
        style={{
          backgroundImage: `url(/images/hero-banner14.webp)`,
        }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="main-banner-content">
                    <h1>ds-experts</h1>

                    <p>
                      Dein <span className="accent">Traumjob</span> ist nur ein
                      paar Klicks entfernt
                    </p>

                    <Link href="/#contact" className="btn btn-primary">
                      MEHR ÜBER UNS
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
                      width={660}
                      placeholder="blur"
                      className=" optimized-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="oval-shape">
          <Image
            src="/images/oval-shape.png"
            alt="Shape"
            width={5000}
            height={330}
            style={{ height: "auto" }}
            priority={true}
          />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
