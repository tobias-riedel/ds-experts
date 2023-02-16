import Link from "next/link";
import { useEffect, useState } from "react";

const CookiesPolicy = () => {
  const [showContacts, setShowContacts] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowContacts(true);
    }, 1000);
  }, []);

  return (
    <section id="cookies-policy" className="ptb-100">
      <div className="container">
        <div className="section-title text-start mw-100">
          <h1>Cookie-Einstellungen & Richtlinie</h1>
        </div>
        <p>
          Wir schützten Ihre Privatsphäre und ermöglicht es Ihnen, die Arten von
          Cookies auszuwählen, die wir beim Besuch unserer Website verwenden.
          Verwenden Sie den Link „Cookie-Einstellungen“, um unsere
          Standardeinstellungen zu ändern.
        </p>
        <h3>
          <strong>Was ist ein Cookie?</strong>
        </h3>
        <p>
          Ein Cookie ist eine kleine Textdatei, die beim Zugriff auf eine
          Website auf Ihr Gerät heruntergeladen wird.
        </p>
        <h3>
          <strong>Was machen Cookies?</strong>
        </h3>
        <p>
          Auf diese Weise kann die Website Ihr Gerät erkennen und einige
          Informationen zu Ihren Einstellungen oder früheren Aktionen speichern,
          damit Websites funktionieren oder effizienter arbeiten und den
          Betreibern der Website Informationen zur Verfügung gestellt werden.
          Kurz gesagt, Cookies helfen uns, Ihnen beim Surfen auf unserer Website
          eine gute Nutzererfahrung zu bieten, und ermöglichen uns auch, unsere
          Website zu verbessern. Bitte beachten Sie, dass die Entscheidung,
          bestimmte Arten von Cookies nicht zu aktivieren, Ihre Nutzererfahrung
          mit der Website und die Verfügbarkeit einiger Dienste beeinträchtigen
          kann. [cookie_settings] Alternativ erlauben die meisten Webbrowser
          eine gewisse Kontrolle über die meisten Cookies über die
          Browsereinstellungen. Weitere Informationen zu Cookies, einschließlich
          Informationen darüber, welche Cookies gesetzt wurden, finden Sie unter{" "}
          <Link
            href="https://www.aboutcookies.org/"
            target="_blank"
            rel="noopener"
          >
            www.aboutcookies.org
          </Link>{" "}
          oder{" "}
          <Link
            href="https://allaboutcookies.org/"
            target="_blank"
            rel="noopener"
          >
            www.allaboutcookies.org
          </Link>
          .
        </p>
        Erfahren Sie, wie Sie Cookies in gängigen Browsern verwalten:
        <ul>
          <li>
            <Link
              href="https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop&amp;hl=en"
              target="_blank"
              rel="noopener"
            >
              Google Chrome
            </Link>
          </li>
          <li>
            <Link
              href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd"
              target="_blank"
              rel="noopener"
            >
              Microsoft Edge
            </Link>
          </li>
          <li>
            <Link
              href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectlocale=en-US&amp;redirectslug=enable-and-disable-cookies-website-preferences"
              target="_blank"
              rel="noopener"
            >
              Mozilla Firefox
            </Link>
          </li>
          <li>
            <Link
              href="https://support.microsoft.com/en-gb/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
              target="_blank"
              rel="noopener"
            >
              Microsoft Internet Explorer
            </Link>
          </li>
          <li>
            <Link
              href="https://help.opera.com/en/latest/web-preferences/"
              target="_blank"
              rel="noopener"
            >
              Opera
            </Link>
          </li>
          <li>
            <Link
              href="https://support.apple.com/en-gb/safari"
              target="_blank"
              rel="noopener"
            >
              Apple Safari
            </Link>
          </li>
        </ul>
        <p>
          Informationen zu anderen Browsern finden Sie auf der Website des
          Browser-Entwicklers. Besuchen Sie{" "}
          <Link
            href="http://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener"
          >
            http://tools.google.com/dlpage/gaoptout
          </Link>
          , um zu verhindern, dass Sie mit Google Analytics über mehrere
          Websites getrackt werden.
        </p>
      </div>
    </section>
  );
};

export default CookiesPolicy;
