/*
 * Copyright (c) 2021 Divinia, Inc.
 */

import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import React, { memo } from 'react';
import { HeaderFake } from '../../components';
import { IMovieComplete } from '../../interfaces/IMovie';
import MoviesService from '../../services/MoviesService';

const movie: React.FC<{ movie: IMovieComplete }> = ({ movie }) => {
  return (
    <>
      <Head>
        <title>{`I.A. Movie - ${movie?.title}`}</title>
      </Head>
      <HeaderFake />
      <span>{movie?.runtime}</span>
      <span>{new Date(movie?.release_date).getFullYear()}</span>
      <span>{movie?.title}</span>
      <span>{movie?.vote_average}</span>
      <span>favorite</span>
      <span>{movie?.tagline}</span>
      <span>{movie?.overview}</span>
      <span>{movie?.genres.map((genre) => genre.name)}</span>
      <span>{movie?.original_language}</span>
      <span>{movie?.original_title}</span>
      <span>{movie?.poster_path}</span>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = ['19404'].map((id) => ({ params: { id } }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const movie = await new MoviesService().get(Number(id));

  if (!movie)
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };

  return {
    props: {
      movie
    },
    revalidate: 1
  };
};

export default memo(movie);
