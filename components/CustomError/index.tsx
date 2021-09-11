import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Container } from './styles';

const CustomError: React.FC<{ path: string; text: string }> = ({ path, text }) => {
  const proportion = 2;

  return (
    <>
      <Head>
        <title>{`I.A. Movie - ${text}`}</title>
      </Head>
      <Link href="/" passHref>
        <Container>
          <Image src={path} alt={text} width={70 * proportion} height={130 * proportion} />
          <h1>{text}</h1>
        </Container>
      </Link>
    </>
  );
};

export default CustomError;
