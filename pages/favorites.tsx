import { GetStaticProps } from 'next';
import Head from 'next/head';
import React, { memo } from 'react';
import { HeaderFake, HeaderText, List } from '../components';
import { IList } from '../interfaces/IList';
import ListService from '../services/ListService';

const Home: React.FC<{ list: IList }> = ({ list }) => {
  return (
    <div>
      <Head>
        <title>I.A. Movie - Favorites</title>
      </Head>
      <HeaderFake />
      <HeaderText title="Favorites:" items={list?.item_count} total={list?.item_count} />
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
