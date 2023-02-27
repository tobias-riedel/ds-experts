import Link from 'next/link';
import { useEffect, useState } from 'react';
import CookieConsent from 'react-cookie-consent';

const ACCEPT_COOKIE_NAME = 'ds-experts-cookie-consent';

const CookieAccept = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 3000);
  }, []);

  return (
    <CookieConsent
      enableDeclineButton
      flipButtons
      setDeclineCookie={false}
      location="bottom"
      buttonText="Akzeptieren"
      declineButtonText="Ablehnen"
      cookieName={ACCEPT_COOKIE_NAME}
      buttonStyle={{
        color: '#fff',
        fontSize: '1rem',
        backgroundColor: '#1a6d2d',
      }}
      declineButtonStyle={{
        color: '#fff',
        margin: '1rem 2rem 1rem 0',
        backgroundColor: '#d33',
      }}
      expires={450}
      style={{ display: visible ? 'block' : 'none' }}
    >
      <h3>Wir respektieren Ihre Privatsphäre</h3>
      Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. Sie helfen uns, die Leistung der
      Website zu verbessern und Inhalte in sozialen Medien zu teilen. Sie können alle Cookies akzeptieren oder ablehnen.
      Sie können Ihre Einstellungen jederzeit ändern, indem Sie in der Fußzeile jeder Seite auf &quot;
      <b>Cookie-Einstellungen</b>&quot; klicken. Weitere Informationen zu den Cookies finden Sie in unseren{' '}
      <Link href="/legal#cookies-policy" target="_blank" rel="noopener">
        Cookie-Richtlinien
      </Link>
      .
    </CookieConsent>
  );
};
export default CookieAccept;
