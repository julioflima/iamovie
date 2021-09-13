import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { memo } from 'react';
import { HeaderFake, HeaderText, List, NotFound } from '../../components';
import { IApi } from '../../interfaces/IApi';
import GenresService from '../../services/GenresService';

const Search: React.FC<{ response: IApi; genre: string }> = ({ response, genre }) => {
  const { isFallback } = useRouter();

  if (isFallback) return null;

  if (!response?.results?.length) return <NotFound query={genre} />;

  return (
    <div>
      <Head>
        <title>{`I.A. Movie - ${genre}`}</title>
      </Head>
      <HeaderFake />
      <HeaderText title="Genre:" items={response?.results?.length} total={response?.total_results} query={genre} />
      <List movies={response?.results} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { genres } = await new GenresService().getGenres();

  const paths = genres.map(({ id }) => ({ params: { id: String(id) } }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const { genres } = await new GenresService().getGenres();
  const name = genres.find(({ id: genreId }) => genreId === Number(id))?.name ?? '';
  const response = await new GenresService().genre(Number(id));

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
      genre: name
    },
    revalidate: oneDayInSeconds
  };
};

export default memo(Search);
