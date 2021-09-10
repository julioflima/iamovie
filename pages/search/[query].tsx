import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import React, { memo, useContext } from 'react';
import QueryContext from '../../contexts/QueryContext';
import MoviesService from '../../services/MoviesService';

const Home: React.FC<{}> = () => {
  const [query] = useContext(QueryContext).queryState;

  return (
    <div>
      {/* <List movies={response.results} /> */}
      <Head>
        <title>{`I.A. Movie - ${query}`}</title>
      </Head>
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

  console.log({ query });

  const response = await new MoviesService().search('black');

  if (!response)
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };

  return {
    props: {
      response
    },
    revalidate: 1
  };
};

export default memo(Home);
