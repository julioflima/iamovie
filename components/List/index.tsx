import Image from 'next/image';
import React from 'react';
import { IMovie } from '../../interfaces/IMovie';
import {
  Card,
  Container,
  ContainerCards,
  ContainerHover,
  ContentHover,
  ContentHoverHeader,
  IconFavorite
} from './styles';

const List: React.FC<{ films: IMovie[] }> = ({ films }) => {
  return (
    <Container>
      <ContainerCards>
        {films.map((film) => (
          <Card key={film.id}>
            <Image
              src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
              alt={film.original_title}
              objectFit="cover"
              layout="fixed"
              width={150}
              height={200}
            />
            <ContainerHover>
              <ContentHover>
                <ContentHoverHeader>
                  <span>{film.original_title}</span>
                  <IconFavorite />
                </ContentHoverHeader>
                <span>{new Date(film.release_date).getFullYear()}</span>
              </ContentHover>
            </ContainerHover>
          </Card>
        ))}
      </ContainerCards>
    </Container>
  );
};

export default List;
