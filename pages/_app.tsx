import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Main from '../components/Main';
import LoadingContext from '../contexts/LoadingContext';
import GlobalStyle from '../styles/globals';
import Theme from '../styles/Theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(false);
  const { isFallback } = useRouter();

  return (
    <LoadingContext.Provider
      value={{
        loadingState: [loading, setLoading]
      }}
    >
      <Theme>
        <Head>
          <title>I.A. Movie</title>
        </Head>
        <Header />
        {!!isFallback && <Loading />}
        <Main>
          <Component {...pageProps} />
        </Main>
        <GlobalStyle />
      </Theme>
    </LoadingContext.Provider>
  );
};

export default MyApp;
