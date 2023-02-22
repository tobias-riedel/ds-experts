import Link from "next/link";
import Router from "next/router";
import { resetCookieConsentValue } from "react-cookie-consent";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const ACCEPT_COOKIE_NAME = "ds-experts-cookie-consent";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const MySwal = withReactContent(Swal);
  const confirmCookieReset = async (e) => {
    e.preventDefault();

    const result = await MySwal.fire({
      title: "Cookie-Einstellungen zurücksetzen",
      text: "Soll die Cookie-Freigabe zurückgesetzt werden? Die Seite wird danach neugeladen.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ja",
      cancelButtonText: "Abbrechen",
    });

    console.log("res::", result);

    if (result.isConfirmed) {
      resetCookieConsentValue(ACCEPT_COOKIE_NAME);

      const reloadDelay = 4000;
      MySwal.fire({
        title: "Cookies zurückgesetzt!",
        text: "Die Seite wird jetzt neugeladen.",
        icon: "success",
        timer: reloadDelay,
        timerProgressBar: true,
        showConfirmButton: false,
      });

      setTimeout(() => Router.reload(), reloadDelay);
    }
  };

  return (
    <>
      <footer className="pt-100">
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <p className="col-lg-5">
                Copyright &copy; 2015-{currentYear} ds-experts IT-Consulting
                GmbH
              </p>

              <div className="col-lg-7">
                <div className="row links--underlined">
                  <p className="col-lg-4">
                    <Link href="/legal#gdpr">Datenschutzerklärung</Link>
                  </p>
                  <p className="col-lg-5">
                    <Link href="/#reset-cookies" onClick={confirmCookieReset}>
                      Cookie-Einstellungen
                    </Link>
                    {" & "}
                    <Link href="/legal#cookies-policy">Richtlinie</Link>
                  </p>
                  <p className="col-lg-3">
                    <Link href="/legal#imprint">Impressum</Link>
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
