import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { memo } from 'react';
import { HeaderFake, HeaderText, List, NotFound } from '../../components';
import { IApi } from '../../interfaces/IApi';
import MoviesService from '../../services/MoviesService';

const Search: React.FC<{ response: IApi; query: string }> = ({ response, query }) => {
  const { isFallback } = useRouter();

  if (isFallback) return null;

  if (!response?.results?.length) return <NotFound query={query} />;

  if (!response?.results?.length) return <NotFound query={query} />;

  return (
    <div>
      <Head>
        <title>{`I.A. Movie - ${query}`}</title>
      </Head>
      <HeaderFake />
      <HeaderText title="Search:" items={response?.results?.length} total={response?.total_results} query={query} />
      <List movies={response?.results} />
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

  const oneDayInSeconds = 60 * 60 * 24;

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
    revalidate: oneDayInSeconds
  };
};

export default memo(Search);
