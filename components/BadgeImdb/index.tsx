import Image from 'next/image';
import React from 'react';
import { Container, ContainerImage } from './styles';

const BadgeImdb: React.FC<{ score: number }> = ({ score = 0.0 }) => {
  return (
    <Container>
      <ContainerImage>
        <Image src="/imdb.svg" alt="imdb_logo" width={70} height={130} />
      </ContainerImage>
      <span>{`${score.toFixed(1)}/10`}</span>
    </Container>
  );
};

export default BadgeImdb;
