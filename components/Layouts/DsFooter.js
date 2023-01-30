import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer>
        <div className="copyright-area">
          <div className="container">
            <div className="d-flex align-items-center justify-content-between">
              <p className="">
                Copyright &copy; 2016-{currentYear} ds-experts IT-Consulting
                GmbH
              </p>

              <p>
                <Link href="/legal#gdpr">
                  <a>Datenschutzerklärung</a>
                </Link>
              </p>
              <p>
                <Link href="/legal#cookies">
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
      </footer>
    </>
  );
};

export default Footer;
