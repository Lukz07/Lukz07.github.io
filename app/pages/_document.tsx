import Document, { Head, Html, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="msapplication-TileColor" content="#0d0d0d" />
          <meta name="theme-color" content="#0d0d0d" />
          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
