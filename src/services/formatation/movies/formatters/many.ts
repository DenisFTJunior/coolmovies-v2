import { Movie, UnformattedMovie } from "../../../../entities/movie";

export const many = (unformattedMovie: UnformattedMovie): Movie[] => {
  const reviews = unformattedMovie.allMovies.movies.map((movie) => {
    return {
      id: movie.id,
      title: movie.title,
      releaseDate: movie.releaseDate,
    };
  });
  return reviews;
};
