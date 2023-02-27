import Link from 'next/link';
import { useEffect, useState } from 'react';
import { COMPANY_ADDRESS } from '../shared/constants';

const Gdpr = () => {
  const [showContacts, setShowContacts] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowContacts(true);
    }, 1000);
  }, []);

  return (
    <section id="gdpr" className="pt-100">
      <div className="container">
        <div className="section-title text-start mw-100">
          <h2>Datenschutzerklärung</h2>
        </div>
        <p>Verantwortlich im Sinne der Datenschutzgesetzes:</p>
        <p>
          ds-experts IT-Consulting GmbH
          <br />
          {COMPANY_ADDRESS.street} {COMPANY_ADDRESS.streetNo}
          <br />
          {COMPANY_ADDRESS.zipCode} {COMPANY_ADDRESS.city}
        </p>
        <h3>Datenschutz</h3>
        <p>
          Als Webseitenbetreiber nehmen wir den Schutz aller persönlichen Daten sehr ernst. Alle personenbezogenen
          Informationen werden vertraulich und gemäß den gesetzlichen Vorschriften behandelt, wie in dieser
          Datenschutzerklärung erläutert.
        </p>
        <p>
          Unserer Webseite kann selbstverständlich genutzt werden, ohne dass Sie persönliche Daten angeben. Wenn jedoch
          zu irgendeinem Zeitpunkt persönliche Daten wie z.B. Name, Adresse oder E-Mail abgefragt werden, wird dies auf
          freiwilliger Basis geschehen. Niemals werden von uns erhobene Daten ohne Ihre spezielle Genehmigung an Dritte
          weitergegeben.
        </p>
        <p>
          Datenübertragung im Internet, wie zum Beispiel über E-Mail, kann immer Sicherheitslücken aufweisen. Der
          komplette Schutz der Daten ist im Internet nicht möglich.
        </p>
        <h3>Datenschutzerklärung Google Analytics</h3>
        <p>
          Unsere Website nutzt den Analysedienst Google Analytics, betrieben von Google Inc. 1600 Amphitheatre Parkway
          Mountain View, CA 94043, USA. Google Analytics nutzt “Cookies”, das sind kleine Textdateien, die in Ihrem
          Browser gespeichert werden und die es ermöglichen, die Nutzung unserer Website durch die Besucher zu
          analysieren. Von den Cookies werden Daten über Ihre Nutzung unserer Webseite gesammelt, die normalerweise an
          einen Google-Server in den USA übertragen und gespeichert werden.
        </p>
        <p>
          Wenn die IP-Anonymisierung auf unserer Webseite aktiviert wurde, wird Ihre IP-Adresse von Google innerhalb der
          Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen
          Wirtschaftsraum vorab gekürzt. In seltenen Ausnahmefällen kann die komplette IP-Adresse an einen Google Server
          in den USA übertragen werden, dann wird diese dort gekürzt. Google nutzt diese Daten in unserem Auftrag, um
          die Nutzung unserer Website auszuwerten, um Berichte über die Webseitenaktivitäten zu erstellen sowie um
          weitere Dienstleistungen anzubieten, die mit der Webseitennutzung und Internetnutzung zusammenhängen. Die von
          Google Analytics erfassten IP-Adressen werden nicht mit anderen Daten von Google korreliert.
        </p>
        <p>
          Die Speicherung von Cookies kann durch eine spezielle Einstellung in Ihrem Browser verweigert werden. In
          diesem Fall ist jedoch die Funktionalität unserer Webseite im vollen Umfang nicht gewährleistet. Zusätzlich
          steht ihnen ein Browser-Plugin zu Verfügung, mit dem Sie die Sammlung der auf Ihre Nutzung der Website
          bezogenen erzeugten Daten und IP-Adressen durch Google verhindern können. Mehr Informationen dazu finden Sie
          hier:{' '}
          <Link href="http://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener">
            http://tools.google.com/dlpage/gaoptout?hl=de
          </Link>
        </p>
        <h3>Auskunft, Löschung, Sperrung</h3>
        <p>
          Zu jedem Zeitpunkt können Sie sich über die personenbezogenen Daten, deren Herkunft und Empfänger und den
          Nutzen der Datenverarbeitung informieren und unentgeltlich eine Korrektur, Sperrung oder Löschung dieser Daten
          verlangen. Bitte nutzen Sie dafür die im Impressum angegebenen Kontaktwege. Für weitere Fragen zum Thema
          stehen wir Ihnen ebenfalls jederzeit zur Verfügung.
        </p>
        <h3>Server-Log-Files</h3>
        <p>
          Der Seiten-Provider erhebt und speichert automatisch Daten in Server-Log Files, die von Ihrem Browser an uns
          übermittelt werden. Diese Daten enthalten:
        </p>
        <ul>
          <li>Browsertyp/ Browserversion</li>
          <li>Betriebssystem des Rechners</li>
          <li>Referrer URL</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>Uhrzeit der Serveranfrage</li>
        </ul>

        <p>
          Diese Daten sind nicht personenbezogen. Es erfolgt keine Zusammenführung dieser Daten mit anderen
          Datenquellen. Wenn uns konkrete Anhaltspunkte für eine rechtswidrige Nutzung bekannt werden behalten wir uns
          das Recht vor, diese Daten nachträglich zu überprüfen.
        </p>
        <h3>Cookies</h3>
        <p>
          Viele Internetseiten verwenden Cookies. Cookies sind unschädlich für Ihren Rechner und virenfrei. Sie dienen
          dazu, Internet-Angebote für die Besucher einer Webseite freundlicher, effektiver und sicherer zu machen.
          Cookies sind kleine Textdateien, die auf Ihrem Computer abgelegt werden und die Ihr Browser verwendet.
        </p>
        <p>
          Wir verwenden in der Regel so genannte „Session-Cookies“. Diese werden nach Verlassen unserer Seite
          automatisch gelöscht. Andere Cookies bleiben auf Ihrem Computer gespeichert, bis Sie diese löschen. Diese
          Cookies helfen dabei, Ihren Rechner beim nächsten Besuch wiederzuerkennen.
        </p>
        <p>
          Über die Browsereinstellungen können sie festlegen, dass Sie über neue Cookies informiert werden und Cookies
          jeweils annehmen müssen. Ebenso können Sie die Annahme von Cookies für bestimmte Fälle oder generell
          ausschließen oder das automatische Löschen der Cookies beim Schließen des Browser aktivieren. Werden Cookies
          desaktiviert, kann die Funktionalität unserer Website eingeschränkt sein.
        </p>
        <h3>Formulare</h3>
        <p>
          Daten, die uns über unsere Formulare erreichen, werden inklusive des Inhalts der Anfrage für
          Bearbeitungszwecke und für mögliche Anschlussfragen gespeichert. Diese Daten werden ohne Ihre spezifische
          Zustimmung nicht weitergegeben.
        </p>
        <h3>Änderung der Datenschutzbestimmungen</h3>
        <p>
          Unsere Datenschutzerklärung können in unregelmäßigen Abständen angepasst werden, damit sie den aktuellen
          rechtlichen Anforderungen entsprechen oder um Änderungen unserer Dienstleistungen umzusetzen, z. B. bei der
          Einfügung neuer Angebote. Für Ihren nächsten Besuch gilt dann automatisch die neue{' '}
          <strong>Datenschutzerklärung</strong>.
        </p>
        <h3>Kontakt zum Datenschutzmitarbeiter</h3>
        <p>
          Für Fragen zum Datenschutz schicken Sie uns bitte eine Nachricht an{' '}
          {showContacts ? (
            <>
              <Link href="mailto:info@ds-experts.de?subject=Datenschutz">info@ds-experts.de</Link>
            </>
          ) : (
            '[Lade eMail-Adresse...]'
          )}{' '}
          mit dem Betreff „Datenschutz“.
        </p>
      </div>
    </section>
  );
};

export default Gdpr;
