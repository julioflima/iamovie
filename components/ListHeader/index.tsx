import Image from 'next/image';
import React from 'react';
import { IMovie } from '../../interfaces/IMovie';
import { shuffle } from '../../utils';
import { Card, Container, ContainerHover, ContentHover, ContentHoverHeader, IconFavorite } from './styles';

const List: React.FC<{ films: IMovie[] }> = ({ films }) => {
  return (
    <Container>
      {shuffle(films).map((film) => (
        <Card key={film.id}>
          <Image
            src={`https://image.tmdb.org/t/p/original${film.poster_path}`}
            alt={film.original_title}
            objectFit="cover"
            layout="fixed"
            width={500}
            height={500}
          />
          <ContainerHover>
            <ContentHover>
              <ContentHoverHeader>
                <IconFavorite />
              </ContentHoverHeader>
              <span>{new Date(film.release_date).getFullYear()}</span>
            </ContentHover>
          </ContainerHover>
        </Card>
      ))}
    </Container>
  );
};

export default List;
