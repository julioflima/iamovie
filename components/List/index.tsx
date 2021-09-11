import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Favorite } from '..';
import { IMovie } from '../../interfaces/IMovie';
import properties from './properties';
import { Badge, Card, Container, ContainerCards, ContainerOver, ContentOver, Footer, Header } from './styles';

const List: React.FC<{ movies: IMovie[]; size?: 'big' | 'small' }> = ({ movies, size = 'small' }) => {
  const moviesShuffle = size === 'big' ? movies?.sort(() => Math.random() - 0.5) : movies;

  return (
    <Container position={properties[size].container.position}>
      <ContainerCards
        width={properties[size].image.width}
        height={properties[size].image.height}
        margin={properties[size].containerCards.margin}
        overflow={properties[size].containerCards.overflow}
        flex={properties[size].containerCards.flex}
      >
        {moviesShuffle?.map((movie: IMovie) => (
          <Link key={movie?.id} href={`/movie/${movie?.id}`} passHref>
            <Card
              transtionSpan={properties[size].span.transition}
              transtionImage={properties[size].image.transition}
              opacity={properties[size].image.opacity}
              borderRadius={properties[size].card.borderRadius}
              background={properties[size].card.background}
            >
              <Image
                src={`https://image.tmdb.org/t/p/${properties[size].image.size}${movie?.poster_path}`}
                alt={movie?.title}
                objectFit="cover"
                layout="fixed"
                width={properties[size].image.width}
                height={properties[size].image.height}
                placeholder="blur"
                blurDataURL={`https://image.tmdb.org/t/p/w92${movie?.poster_path}`}
              />
              <ContainerOver>
                <ContentOver>
                  <Header>
                    <span>{movie?.original_title}</span>
                    <span>
                      <Favorite />
                    </span>
                  </Header>
                  <Footer>
                    <span>{new Date(movie?.release_date).getFullYear()}</span>
                    <p />
                    <Badge>{Number(movie?.vote_average).toFixed(1)}</Badge>
                  </Footer>
                </ContentOver>
              </ContainerOver>
            </Card>
          </Link>
        ))}
      </ContainerCards>
    </Container>
  );
};

export default List;
