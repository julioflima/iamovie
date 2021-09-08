/*
 * Copyright (c) 2021 Divinia, Inc.
 */

import { GetStaticProps } from 'next';
import React, { memo } from 'react';
import { IMovieComplete } from '../interfaces/IMovie';
import FilmService from '../services/FilmService';

const SearchCategory: React.FC<IMovieComplete> = ({ film }) => {
  return <></>;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params!;

  const fs = new FilmService();
  const film = await fs.get(Number(id));

  return {
    props: {
      film
    },
    revalidate: 10
  };
};

export default memo(SearchCategory);
