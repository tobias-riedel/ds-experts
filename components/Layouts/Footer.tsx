import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 d-flex align-items-center">
                <p>
                  Copyright &copy; 2015-{currentYear} ds-experts IT-Consulting
                  GmbH
                </p>
                <p></p>
              </div>

              <div className="col-lg-6 d-flex align-items-center justify-content-between gap-1">
                <p>
                  <Link href="/legal#gdpr">
                    <a>Datenschutzerklärung</a>
                  </Link>
                </p>
                <p>
                  <Link href="/legal#cookies-policy">
                    <a>Cookie-Einstellungen &amp; Richtlinie</a>
                  </Link>
                </p>
                <p>
                  <Link href="/legal#imprint">
                    <a>Impressum</a>
                  </Link>
                </p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;