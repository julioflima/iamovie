import Image from 'next/image';
import React from 'react';
import { BadgeImdb, Description, Favorite, Paragraph, Title } from '..';
import { IMovieComplete } from '../../interfaces/IMovie';
import { Column, Container, ImageContainer, Row } from './styles';

const List: React.FC<{ movie: IMovieComplete }> = ({ movie }) => {
  return (
    <Container>
      <Column>
        <Row>
          <Description runtime={movie?.runtime} date={movie?.release_date} />
        </Row>
        <Row>
          <Title subtitle={movie?.original_title}>{movie?.title}</Title>
        </Row>
        <Row>
          <BadgeImdb score={movie?.vote_average} />
          <Favorite button size="bigger" />
        </Row>
        <Row>
          <Paragraph label="Sinopse">{movie?.overview}</Paragraph>
        </Row>
        <Row>
          <Paragraph label="Summarize">{movie?.tagline}</Paragraph>
        </Row>
        <Row>
          <Paragraph label="Genres">{movie?.genres.map((genre) => `"${genre.name}", `).join('')}</Paragraph>
        </Row>
        <Row>
          <Paragraph label="Original Language">{movie?.original_language}</Paragraph>
        </Row>
      </Column>
      <ImageContainer>
        <Image
          src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
          alt={movie?.title}
          objectFit="contain"
          layout="fill"
          width={700}
          height={1000}
          placeholder="blur"
          blurDataURL={`https://image.tmdb.org/t/p/w92${movie?.poster_path}`}
        />
      </ImageContainer>
    </Container>
  );
};

export default List;
