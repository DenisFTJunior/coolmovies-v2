import { gql } from "@apollo/client";

import { moviesClient } from "../../config/movieClient";
import { SaveUserVars } from "./schema/userMutation";

const SAVE_USER_MUTATION = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id: clientMutationId
    }
  }
`;

const saveUser = (input: SaveUserVars) =>
  moviesClient.mutate({
    mutation: SAVE_USER_MUTATION,
    variables: { input },
    refetchQueries: ["Movie", "Movies"],
  });

export default saveUser;
