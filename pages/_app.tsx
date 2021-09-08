import { AppProps } from 'next/app';
import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import GlobalStyle from '../styles/globals';
import Theme from '../styles/Theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Theme>
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
      <GlobalStyle />
    </Theme>
  );
};

export default MyApp;
