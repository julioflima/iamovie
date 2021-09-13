import Link from 'next/link';
import React from 'react';
import { Container, Option, Space } from './styles';

const Genre: React.FC = () => {
  return (
    <Container>
      <Link href="/genre/53" passHref>
        <Option>THRILLER</Option>
      </Link>
      <Space />
      <Link href="/genre/18" passHref>
        <Option>DRAMA</Option>
      </Link>
      <Space />
      <Link href="/genre/28" passHref>
        <Option>ACTION</Option>
      </Link>
    </Container>
  );
};

export default Genre;
