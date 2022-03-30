export type SaveMovieOutput = {
  movie: {
    movieDirectorId?: string;
    releaseDate: string;
    title: string;
    userCreatorId?: string;
  };
};

export type SaveMovieInput = {
  directorId?: string;
  releaseDate: string;
  title: string;
  userId?: string;
};
