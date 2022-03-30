import { gql } from "@apollo/client";
import { UnformattedReviews } from "../../../entities/review";

import { moviesClient } from "../../config/movieClient";
import { UsersVars } from "./schema/userQuery";

const QUERY = gql`
  query Users(
    $orderBy: [UsersOrderBy!]
    $condition: UserCondition
    $filter: UserFilter
    $offset: Int
    $last: Int
    $first: Int
  ) {
    allUsers(
      condition: $condition
      filter: $filter
      orderBy: $orderBy
      offset: $offset
      last: $last
      first: $first
    ) {
      users: nodes {
        id
        nodeId
        name
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;

const getUsersQuery = (vars: UsersVars) =>
  moviesClient.query({
    query: QUERY,
    variables: vars,
    fetchPolicy: "network-only",
  });

export default getUsersQuery;
