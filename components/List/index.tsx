import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Favorite } from '..';
import { IMovie } from '../../interfaces/IMovie';
import { shuffle } from '../../utils';
import properties from './properties';
import { Badge, Card, Container, ContainerCards, ContainerOver, ContentOver, Footer, Header } from './styles';

const List: React.FC<{ films?: IMovie[]; size?: 'big' | 'small' }> = ({ films = [], size = 'small' }) => {
  return (
    <Container position={properties[size].container.position} paddingTop={properties[size].container.paddingTop}>
      <ContainerCards
        width={properties[size].image.width}
        height={properties[size].image.height}
        margin={properties[size].containerCards.margin}
        overflow={properties[size].containerCards.overflow}
        flex={properties[size].containerCards.flex}
      >
        {shuffle(films).map((film: IMovie) => (
          <Link key={film.id} href={`/${film.id}`} passHref>
            <Card
              transtionSpan={properties[size].span.transition}
              transtionImage={properties[size].image.transition}
              opacity={properties[size].image.opacity}
              borderRadius={properties[size].card.borderRadius}
              background={properties[size].card.background}
            >
              <Image
                src={`https://image.tmdb.org/t/p/${properties[size].image.size}${film.poster_path}`}
                alt={film.title}
                objectFit="cover"
                layout="fixed"
                width={properties[size].image.width}
                height={properties[size].image.height}
              />
              <ContainerOver>
                <ContentOver>
                  <Header>
                    <span>{film.original_title}</span>
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
          </Link>
        ))}
      </ContainerCards>
    </Container>
  );
};

export default List;
