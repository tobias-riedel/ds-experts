import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <p className="col-lg-5">Copyright &copy; 2015-{currentYear} ds-experts IT-Consulting GmbH</p>

            <div className="col-lg-7">
              <div className="row links--underlined">
                <p className="col-lg-4">
                  <Link href="/legal#gdpr">Datenschutzerklärung</Link>
                </p>
                <p className="col-lg-5">
                  <Link href="/legal#cookies-policy">Cookie-Einstellungen &amp; Richtlinie</Link>
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
  );
};

export default Footer;
