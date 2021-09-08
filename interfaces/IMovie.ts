export interface IMovie {
  adult: boolean;
  backdrop_path: null | string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IGenres {
  id: number;
  name: string;
}

export interface IProductionCompanies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface IProductionCountries {
  iso_3166_1: string;
  name: string;
}

export interface ISpokenLanguages {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface IMovieComplete extends IMovie {
  belongs_to_collection: null;
  budget: number;
  genres: IGenres[];
  homepage: string;
  imdb_id: string;
  production_companies: IProductionCompanies[];
  production_countries: IProductionCountries[];
  revenue: number;
  runtime: number;
  spoken_languages: ISpokenLanguages[];
  status: string;
  tagline: string;
}
