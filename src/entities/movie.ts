export type Movie = {
  id: string;
  title: string;
  releaseDate: Date;
};

export type UnformattedMovie = {
  allMovies: {
    movies: Movie[];
    totalCount: number;
    pageInfo: {
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    };
  };
};
