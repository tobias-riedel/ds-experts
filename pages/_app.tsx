import React from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import "../styles/animate.min.css";
import "animate.css";
import "../styles/all.min.css";
import "../styles/pe-icon-7-stroke.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Global Style order must not be changed
import "../styles/fonts.css";
import "../styles/style.css";
import "../styles/responsive.css";

import Head from "next/head";
import Layout from "../components/Layouts/Layout";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="ds-experts IT-Consulting GmbH ist Ihr Ansprechpartner für IT-Lösungen im Bereich Software-Entwicklung und -transition."
        />
        <meta
          name="keywords"
          content="IT, Consulting, Software, Entwicklung, Transition, ds-experts, ds-experts IT-Consulting GmbH"
        />
        <meta name="author" content="Tobias Riedel" />
        <meta name="copyright" content="ds-experts" />
        <meta name="robots" content="index,follow" />

        <title>
          ds-experts IT-Consulting GmbH - Professional IT-Consulting
        </title>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
