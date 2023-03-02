import Link from 'next/link';
import SectionDivider from './Common/SectionDivider';

const CookiesPolicy = () => {
  return (
    <section id="cookies-policy" className="pt-100">
      <div className="container">
        <div className="section-title text-start mw-100">
          <h2>Cookie-Einstellungen & Richtlinie</h2>
        </div>
        <p>Wir nehmen Datenschutz sehr ernst und verwenden keine Cookies.</p>
      </div>

      <SectionDivider />
    </section>
  );
};

export default CookiesPolicy;
