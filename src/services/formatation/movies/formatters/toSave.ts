import { SaveMovieInput, SaveMovieOutput } from "../schema/save";

export const toSave = (input: SaveMovieInput): SaveMovieOutput => {
  return {
    input: {
      movie: {
        title: input.title,
        releaseDate: input.releaseDate,
        userCreatorId: input.userId,
        movieDirectorId: input.directorId,
      },
    },
  };
};
