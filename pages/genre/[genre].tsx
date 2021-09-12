import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import React, { memo } from 'react';
import { HeaderFake, List } from '../../components';
import { IApi } from '../../interfaces/IApi';
import MoviesService from '../../services/MoviesService';

const Search: React.FC<{ response: IApi; genre: string }> = ({ response, genre }) => {
  return (
    <div>
      <Head>
        <title>{`I.A. Movie - ${genre}`}</title>
      </Head>
      <HeaderFake />
      <List movies={response?.results} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = ['drama'].map((genre) => ({ params: { genre } }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { genre } = params as { genre: string };

  const response = await new MoviesService().genre();

  if (!response)
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };

  return {
    props: {
      response,
      genre
    },
    revalidate: 1
  };
};

export default memo(Search);
