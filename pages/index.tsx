import { GetStaticProps } from 'next';
import Head from 'next/head';
import React, { memo } from 'react';
import { HeaderFake, List } from '../components';
import { IApi } from '../interfaces/IApi';
import MoviesService from '../services/MoviesService';

const Home: React.FC<{ top: IApi; popular: IApi }> = ({ top, popular }) => {
  return (
    <div>
      <Head>
        <title>I.A. Movie</title>
      </Head>
      <HeaderFake />
      <List movies={top?.results} size="big" />
      <List movies={popular?.results} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const fs = new MoviesService();
  const popular = await fs.popular();
  const top = await fs.top();

  const oneDayInSeconds = 60 * 60 * 24;

  return {
    props: {
      top,
      popular
    },
    revalidate: oneDayInSeconds
  };
};

export default memo(Home);
