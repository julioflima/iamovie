import Image from 'next/image';
import React from 'react';
import { Favorite } from '..';
import { IMovie } from '../../interfaces/IMovie';
import { shuffle } from '../../utils';
import { Badge, Card, Container, ContainerCards, ContainerOver, ContentOver, Footer, Header } from './styles';

const List: React.FC<{ films?: IMovie[]; size?: 'big' | 'small' }> = ({ films = [], size = 'small' }) => {
  const properties = {
    small: {
      title: true,
      container: { position: 'absolute', absolute: true },
      containerCards: { margin: '0.5rem', overflow: 'revert' },
      card: { borderRadius: '0.125rem' },
      span: { transition: 0.4 },
      image: { size: 'w300', width: 150, height: 200, transition: 0.2, opacity: 0.6 }
    },
    big: {
      title: false,
      container: { position: 'revert', absolute: false },
      containerCards: { margin: '0rem', overflow: 'hidden' },
      card: { borderRadius: '0rem' },
      span: { transition: 0.4 },
      image: { size: 'original', width: 300, height: 500, transition: 0.2, opacity: 0.2 }
    }
  };

  return (
    <Container position={properties[size].container.position}>
      <ContainerCards
        width={properties[size].image.width}
        height={properties[size].image.height}
        margin={properties[size].containerCards.margin}
        overflow={properties[size].containerCards.overflow}
      >
        {shuffle(films).map((film: IMovie) => (
          <Card
            key={film.id}
            transtionSpan={properties[size].span.transition}
            transtionImage={properties[size].image.transition}
            opacity={properties[size].image.opacity}
            borderRadius={properties[size].card.borderRadius}
          >
            <Image
              src={`https://image.tmdb.org/t/p/${properties[size].image.size}${film.poster_path}`}
              alt={film.original_title}
              objectFit="cover"
              layout="fixed"
              width={properties[size].image.width}
              height={properties[size].image.height}
            />
            <ContainerOver>
              <ContentOver>
                <Header>
                  {properties[size].title && <span>{film.original_title}</span>}
                  <span>
                    <Favorite />
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
