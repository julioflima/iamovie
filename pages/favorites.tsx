import { GetStaticProps } from 'next';
import Head from 'next/head';
import React, { memo, useContext } from 'react';
import { HeaderFake, List } from '../components';
import FavoritesContext from '../contexts/FavoritesContext';
import { IList } from '../interfaces/IList';
import ListService from '../services/ListService';

const Home: React.FC<{ list: IList }> = ({ list }) => {
  const [, setFavorites] = useContext(FavoritesContext).favoritesState;
  setFavorites(list);

  return (
    <div>
      <Head>
        <title>I.A. Movie - Favorites</title>
      </Head>
      <HeaderFake />
      <h1>Favorites:</h1>
      <List movies={list?.items} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const list = await new ListService().getFavorites();

  return {
    props: {
      list
    },
    revalidate: 1
  };
};

export default memo(Home);
