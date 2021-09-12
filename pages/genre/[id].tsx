import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import React, { memo } from 'react';
import { HeaderFake, List } from '../../components';
import { Container } from '../../components/Content/styles';
import { IApi } from '../../interfaces/IApi';
import GenresService from '../../services/GenresService';

const Search: React.FC<{ response: IApi; genre: string }> = ({ response, genre }) => {
  return (
    <Container>
      <Head>
        <title>{`I.A. Movie - ${genre}`}</title>
      </Head>
      <HeaderFake />
      <List movies={response?.results} />
    </Container>
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
    revalidate: 1
  };
};

export default memo(Search);
