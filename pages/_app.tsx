import AOS from 'aos';
import axios from 'axios';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';

import '@radix-ui/themes/styles.css';
import 'react-quill/dist/quill.snow.css';
import '../styles/global.css';
import { getBaseUrl, trpc } from '../utils/trpc';

axios.defaults.baseURL = getBaseUrl();

function MyApp({ Component, pageProps }: AppProps<{ session?: Session }>) {
  useEffect(() => {
    AOS.init();
  }, []);

  const { session } = pageProps;

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

        <title>ds-experts IT-Consulting GmbH - Professional IT-Consulting</title>
      </Head>

      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default trpc.withTRPC(MyApp);
