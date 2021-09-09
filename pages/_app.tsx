import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import GlobalStyle from '../styles/globals';
import Theme from '../styles/Theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Theme>
      <Head>
        <title>I.A. Movie</title>
      </Head>
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
      <GlobalStyle />
    </Theme>
  );
};

export default MyApp;
