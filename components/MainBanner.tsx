import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';
import callToActionImg from '../public/images/call_to_action.jpg';
import { SCROLL_LINKS_PROPS } from '../shared/constants';

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
                    {/* <h1>ds-experts</h1> */}

                    <p>
                      Dein <span>Traumjob</span> ist nur ein paar Klicks entfernt
                    </p>

                    <ScrollLink href="/#join-us" to="join-us" className="btn btn-primary" {...SCROLL_LINKS_PROPS}>
                      ERFAHRE MEHR
                    </ScrollLink>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="animate-banner-image" data-aos="zoom-in" data-aos-duration="1200">
                    <Image
                      src={callToActionImg}
                      alt="Animate image"
                      width={660}
                      height={440}
                      placeholder="blur"
                      className="optimized-image"
                      sizes="(max-width: 992px) 85vw, 45vw"
                      priority
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
            style={{ height: 'auto' }}
            sizes="100vw"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
