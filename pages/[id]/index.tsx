/*
 * Copyright (c) 2021 Divinia, Inc.
 */

import { GetStaticPaths, GetStaticProps } from 'next';
import React, { memo } from 'react';
import { IMovieComplete } from '../../interfaces/IMovie';
import FilmService from '../../services/FilmService';

const Film: React.FC<{ film: IMovieComplete }> = ({ film }) => {
  // const { isFallback } = useRouter();

  // if (isFallback) return <Loading />;

  return (
    <>
      <span>{film?.runtime}</span>
      <span>{new Date(film?.release_date).getFullYear()}</span>
      <span>{film?.title}</span>
      <span>{film?.vote_average}</span>
      <span>favorite</span>
      <span>{film?.tagline}</span>
      <span>{film?.overview}</span>
      <span>{film?.genres.map((genre) => genre.name)}</span>
      <span>{film?.original_language}</span>
      <span>{film?.original_title}</span>
      <span>{film?.poster_path}</span>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [19404].map((id) => ({ params: { id: String(id) } }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params!;

  console.log(id);

  const fs = new FilmService();
  const film = await fs.get(Number(id));

  return {
    props: {
      film
    },
    revalidate: 1
  };
};

export default memo(Film);
