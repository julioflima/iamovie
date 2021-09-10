import { AppProps } from 'next/app';
import React, { useState } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Main from '../components/Main';
import LoadingContext from '../contexts/LoadingContext';
import QueryContext from '../contexts/QueryContext';
import GlobalStyle from '../styles/globals';
import Theme from '../styles/Theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');

  return (
    <LoadingContext.Provider
      value={{
        loadingState: [loading, setLoading]
      }}
    >
      <QueryContext.Provider
        value={{
          queryState: [query, setQuery]
        }}
      >
        <Theme>
          <Header />
          <Loading />
          <Main>
            <Component {...pageProps} />
          </Main>
          <GlobalStyle />
        </Theme>
      </QueryContext.Provider>
    </LoadingContext.Provider>
  );
};

export default MyApp;
