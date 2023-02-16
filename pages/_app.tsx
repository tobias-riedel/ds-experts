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

// Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&display=swap
// Saira:100,200,300,400,500,600,700,800,900&display=swap
// Inter:wght@100;200;300;400;500;600;700;800;900&display=swap

// Global Style order must not be changed
import "../styles/style.css";
import "../styles/responsive.css";

import Head from "next/head";
import Layout from "../components/Layouts/Layout";

import { Open_Sans, Saira, Inter } from "@next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
