/*
 * Copyright (c) 2021 Divinia, Inc.
 */

import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import React, { memo } from 'react';
import { HeaderFake, Movie } from '../../components';
import { Container } from '../../components/Content/styles';
import { IMovieComplete } from '../../interfaces/IMovie';
import MoviesService from '../../services/MoviesService';

const Film: React.FC<{ movie: IMovieComplete }> = ({ movie }) => {
  if (!movie?.title)
    return (
      <Head>
        <title>I.A. Movie</title>
      </Head>
    );

  return (
    <Container>
      <Head>
        <title>{`I.A. Movie - ${movie?.title}`}</title>
      </Head>
      <HeaderFake />
      <Movie movie={movie} />
    </Container>
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

export default memo(Film);
