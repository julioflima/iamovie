import { GetStaticProps } from 'next';
import Head from 'next/head';
import React, { memo } from 'react';
import { HeaderFake, List } from '../components';
import { IList } from '../interfaces/IList';
import ListService from '../services/ListService';

const Home: React.FC<{ response: IList }> = ({ response }) => {
  return (
    <div>
      <Head>
        <title>I.A. Movie - Favorites</title>
      </Head>
      <HeaderFake />
      <h1>Favorites:</h1>
      <List movies={response?.items} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await new ListService().getFavorite();
  const oneDayInSeconds = 60 * 60 * 24;

  return {
    props: {
      response
    },
    revalidate: oneDayInSeconds
  };
};

export default memo(Home);
