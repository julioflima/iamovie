import Image from 'next/image';
import React from 'react';
import { Container } from './styles';

const Loading: React.FC = () => {
  const proportion = 2;
  return (
    <Container>
      <Image src="/logo.svg" alt="logo" width={70 * proportion} height={130 * proportion} />
    </Container>
  );
};

export default Loading;
