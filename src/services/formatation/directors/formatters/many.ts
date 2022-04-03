import { UnformattedDirector, Director } from "../../../../entities/director";

export const many = (unformattedMovie: UnformattedDirector): Director[] => {
  const directors = unformattedMovie.allMovieDirectors.directors.map(
    (director) => {
      return {
        id: director.id,
        nodeId: director.nodeId,
        name: director.name,
        age: director.age,
      };
    }
  );
  return directors;
};
