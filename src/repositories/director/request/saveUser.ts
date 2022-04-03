import { gql } from "@apollo/client";

import { moviesClient } from "../../config/movieClient";
import { SaveDirectorVars } from "./schema/directorMutation";

const SAVE_USER_MUTATION = gql`
  mutation CreateMovieDirector($input: CreateMovieDirectorInput!) {
    createMovieDirector(input: $input) {
      id: clientMutationId
    }
  }
`;

const saveDirector = (input: SaveDirectorVars) =>
  moviesClient.mutate({
    mutation: SAVE_USER_MUTATION,
    variables: { input },
    refetchQueries: ["Directors"],
  });

export default saveDirector;
