import { useState } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyle from '../styles/globals';
import Theme from '../styles/Theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Theme>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <title>Gran Cursos Online</title>
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </Theme>
  );
};

export default MyApp;
