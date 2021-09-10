import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import React, { memo } from 'react';
import { HeaderFake, List } from '../../components';
import { IApi } from '../../interfaces/IApi';
import MoviesService from '../../services/MoviesService';

const Search: React.FC<{ response: IApi; query: string }> = ({ response, query }) => {
  return (
    <div>
      <Head>
        <title>{`I.A. Movie - ${query}`}</title>
      </Head>
      <HeaderFake />
      <List movies={response.results} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = ['black'].map((query) => ({ params: { query } }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { query } = params as { query: string };

  const response = await new MoviesService().search(query);

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
      query
    },
    revalidate: 1
  };
};

export default memo(Search);
