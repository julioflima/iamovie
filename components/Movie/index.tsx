import Image from 'next/image';
import React from 'react';
import { BadgeImdb, Description, FavoriteButton, Paragraph, Title } from '..';
import { IMovieComplete } from '../../interfaces/IMovie';
import { Column, Container, Content, ImageContainer, Row } from './styles';

const Movie: React.FC<{ movie: IMovieComplete }> = ({ movie }) => {
  const genres = movie?.genres.map((genre) => `${genre.name}, `).join('');

  return (
    <Container>
      <Content>
        <Column>
          <Row>
            <Description runtime={movie?.runtime} date={movie?.release_date} />
          </Row>
        </Column>

        <Column>
          <Row>
            <Title subtitle={movie?.original_title}>{movie?.title}</Title>
          </Row>
        </Column>

        <Column>
          <Row>
            <BadgeImdb score={movie?.vote_average} />
            <FavoriteButton movieId={movie.id} />
          </Row>
        </Column>

        <Column>
          <Row>
            <Paragraph label="Sinopse">{movie?.overview}</Paragraph>
          </Row>
        </Column>

        <Column>
          <Paragraph label="Summarize">{movie?.tagline}</Paragraph>
        </Column>
        <Column>
          <Paragraph label="Genres">{`${genres?.slice(0, genres.length - 2)}.` ?? ''}</Paragraph>
        </Column>
        <Column>
          <Paragraph label="Original Language">{String(movie?.original_language).toLocaleUpperCase()}</Paragraph>
        </Column>
      </Content>

      <ImageContainer>
        <Image
          src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
          alt={movie?.title}
          objectFit="contain"
          layout="fill"
          placeholder="blur"
          blurDataURL={`https://image.tmdb.org/t/p/w92${movie?.poster_path}`}
        />
      </ImageContainer>
    </Container>
  );
};

export default Movie;
