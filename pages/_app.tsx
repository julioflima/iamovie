import { AppProps } from 'next/app';
import React, { useCallback, useEffect, useState } from 'react';
import useFetch from 'use-fetching';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Main from '../components/Main';
import FavoritesProvider from '../contexts/FavoritesContext';
import LoadingContext from '../contexts/LoadingContext';
import { IList } from '../interfaces/IList';
import GlobalStyle from '../styles/globals';
import Theme from '../styles/Theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const loadingState = useState(false);
  const favoritesState = useState<IList>({} as IList);

  const { call: getFavorites } = useFetch({ responseState: favoritesState });

  const loadFavorites = useCallback(async () => {
    await getFavorites('/api/list/favorites');
  }, [getFavorites]);

  useEffect(() => {
    loadFavorites();
  }, [loadFavorites]);

  return (
    <LoadingContext.Provider
      value={{
        loadingState
      }}
    >
      <FavoritesProvider.Provider
        value={{
          favoritesState
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
      </FavoritesProvider.Provider>
    </LoadingContext.Provider>
  );
};

export default MyApp;
