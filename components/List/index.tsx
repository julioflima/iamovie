import Image from 'next/image';
import React from 'react';
import { IMovie } from '../../interfaces/IMovie';
import {
  Badge,
  Card,
  Container,
  ContainerCards,
  ContainerOver,
  ContentOver,
  Footer,
  Header,
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
            <ContainerOver>
              <ContentOver>
                <Header>
                  <span>{film.original_title}</span>
                  <span>
                    <IconFavorite />
                  </span>
                </Header>
                <Footer>
                  <span>{new Date(film.release_date).getFullYear()}</span>
                  <p />
                  <Badge>{Number(film.vote_average).toFixed(1)}</Badge>
                </Footer>
              </ContentOver>
            </ContainerOver>
          </Card>
        ))}
      </ContainerCards>
    </Container>
  );
};

export default List;
