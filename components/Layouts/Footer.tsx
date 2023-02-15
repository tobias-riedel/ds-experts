import Link from "next/link";
import Router from "next/router";
import { resetCookieConsentValue } from "react-cookie-consent";

const ACCEPT_COOKIE_NAME = "ds-experts-cookie-consent";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const resetCookies = (e) => {
    e.preventDefault();
    const isCookieResetConfirmed = confirm(
      "Soll die Cookie-Freigabe zurückgesetzt werden? Die Seite wird danach neugeladen."
    );

    if (!isCookieResetConfirmed) {
      return;
    }

    resetCookieConsentValue(ACCEPT_COOKIE_NAME);
    Router.reload();
  };

  return (
    <>
      <footer>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <p className="col-lg-5">
                Copyright &copy; 2015-{currentYear} ds-experts IT-Consulting
                GmbH
              </p>

              <div className="col-lg-7">
                <div className="row">
                  <p className="col-lg-4">
                    <Link href="/legal#gdpr">
                      <a>Datenschutzerklärung</a>
                    </Link>
                  </p>
                  <p className="col-lg-5">
                    <Link href="#">
                      <a onClick={resetCookies}>Cookie-Einstellungen</a>
                    </Link>
                    {" & "}
                    <Link href="/legal#cookies-policy">
                      <a>Richtlinie</a>
                    </Link>
                  </p>
                  <p className="col-lg-3">
                    <Link href="/legal#imprint">
                      <a>Impressum</a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
