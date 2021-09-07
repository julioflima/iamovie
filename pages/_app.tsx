import { AppProps } from 'next/app';
import React from 'react';
import GlobalStyle from '../styles/globals';
import Theme from '../styles/Theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Theme>
      <Component {...pageProps} />
      <GlobalStyle />
    </Theme>
  );
};

export default MyApp;
