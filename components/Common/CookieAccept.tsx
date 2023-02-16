import Link from "next/link";
import CookieConsent from "react-cookie-consent";

const ACCEPT_COOKIE_NAME = "ds-experts-cookie-consent";

const CookieAccept = () => {
  return (
    <CookieConsent
      enableDeclineButton
      flipButtons
      location="bottom"
      buttonText="Alle akzeptieren"
      declineButtonText="Alle ablehnen"
      cookieName={ACCEPT_COOKIE_NAME}
      buttonStyle={{
        color: "#000",
        fontSize: "1rem",
      }}
      declineButtonStyle={{
        margin: "1rem 2rem 1rem 0",
      }}
      expires={450}
    >
      <h3>Wir respektieren Ihre Privatsphäre</h3>
      Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu
      verbessern. Sie helfen uns, die Leistung der Website zu verbessern und
      Inhalte in sozialen Medien zu teilen. Sie können alle Cookies akzeptieren
      oder ablehnen. Sie können Ihre Einstellungen jederzeit ändern, indem Sie
      in der Fußzeile jeder Seite auf Cookie-Einstellungen klicken. Weitere
      Informationen zu den Cookies finden Sie in unseren{" "}
      <Link href="/legal#cookies-policy" target="_blank" rel="noopener">
        Cookie-Richtlinien
      </Link>
      .
    </CookieConsent>
  );
};
export default CookieAccept;
