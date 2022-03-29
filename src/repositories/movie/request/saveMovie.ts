import { gql } from "@apollo/client";

import { moviesClient } from "../../config/movieClient";
import { SaveMovieVars } from "./schema/movieMutation";

const SAVE_MOVIE_MUTATION = gql`
  mutation CreateMovie($input: CreateMovieInput!) {
    createMovie(input: $input) {
      id: clientMutationId
    }
  }
`;

const saveMovie = (input: SaveMovieVars) =>
  moviesClient.mutate({
    mutation: SAVE_MOVIE_MUTATION,
    variables: { input },
    refetchQueries: ["Movie", "Movies"],
  });

export default saveMovie;
