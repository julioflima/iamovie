import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Container } from './styles';

const NotFound: React.FC<{ query: string }> = ({ query }) => {
  const proportion = 2;

  return (
    <>
      <Head>{query ? <title>{`I.A. Movie - ${query}`}</title> : <title>I.A. Movie</title>}</Head>
      <Link href="/" passHref>
        <Container>
          <Image src="/film.svg" alt={query} width={70 * proportion} height={130 * proportion} />
          <h1>No movies were found! :(</h1>
        </Container>
      </Link>
    </>
  );
};

export default NotFound;
