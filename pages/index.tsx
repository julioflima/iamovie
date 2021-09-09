import { GetStaticProps } from 'next';
import React, { memo } from 'react';
import List from '../components/List';
import { IApi } from '../interfaces/IApi';
import FilmService from '../services/FilmService';

const Home: React.FC<{ top: IApi; popular: IApi }> = ({ top, popular }) => {
  return (
    <div>
      {true && <List films={top.results} size="big" />}
      {true && <List films={popular.results} />}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const fs = new FilmService();
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
