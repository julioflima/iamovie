import Image from 'next/image';
import React from 'react';
import { BadgeImdb, Description, FavoriteButton, Paragraph, Title } from '..';
import { IMovieComplete } from '../../interfaces/IMovie';
import { concatenate, money } from '../../utils/text';
import { Column, Container, Content, ImageContainer, Row } from './styles';

const Movie: React.FC<{ movie: IMovieComplete }> = ({ movie }) => {
  const genres = concatenate(movie?.genres.map((genre) => genre?.name));
  const spokenLanguages = concatenate(movie?.spoken_languages.map((lang) => lang?.english_name));
  const productionCompanies = concatenate(movie?.production_companies.map((inc) => inc?.name));
  const originalLanguage = String(movie?.original_language).toLocaleUpperCase();
  const budgetRevenue = `${money(movie?.budget)} / ${money(movie?.revenue)}`;

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
            <FavoriteButton movieId={movie?.id} />
          </Row>
        </Column>

        {movie?.overview && (
          <Column>
            <Row>
              <Paragraph label="Sinopse">{movie?.overview}</Paragraph>
            </Row>
          </Column>
        )}

        {movie?.tagline && (
          <Column>
            <Paragraph label="Summarize">{movie?.tagline}</Paragraph>
          </Column>
        )}

        {genres && (
          <Column>
            <Paragraph label="Genres">{genres}</Paragraph>
          </Column>
        )}

        {originalLanguage && (
          <Column>
            <Paragraph label="Original Language">{originalLanguage}</Paragraph>
          </Column>
        )}

        {spokenLanguages && (
          <Column>
            <Paragraph label="Spoken Languages">{spokenLanguages}</Paragraph>
          </Column>
        )}

        {productionCompanies && (
          <Column>
            <Paragraph label="Production Companies">{productionCompanies}</Paragraph>
          </Column>
        )}

        {budgetRevenue && (
          <Column>
            <Paragraph label="Budget/Revenue">{budgetRevenue}</Paragraph>
          </Column>
        )}
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
