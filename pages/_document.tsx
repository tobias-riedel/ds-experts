import { Theme } from '@radix-ui/themes';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="de">
        <Head>
          <link rel="icon" type="image/png" href="/favicon.png"></link>
        </Head>
        <body>
          <Theme>
            <Main />
            <NextScript />
          </Theme>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
