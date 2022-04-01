import { gql, useQuery } from "@apollo/client";

import { moviesClient } from "../../config/movieClient";
import { ReviewVars } from "./schema/reviewQuery";

const REVIEW_BY_ID_QUERY = gql`
  query MovieReview($id: UUID!) {
    movieReviewById(id: $id) {
      id
      body
      movieId
      rating
      title
      movieByMovieId {
        id
        title
      }
      commentsByMovieReviewId {
        nodes {
          title
          id
          body
          userByUserId {
            name
            id
          }
        }
      }
    }
  }
`;

const REVIEW_BY_NODE_ID_QUERY = gql`
  query MovieReview($id: ID!) {
    movieReview(nodeId: $id) {
      id
      body
      movieId
      rating
      title
      movie: movieByMovieId {
        id
        title
      }
      commentsQuery: commentsByMovieReviewId {
        comments: nodes {
          title
          id
          body
          userByUserId {
            name
            id
          }
        }
      }
    }
  }
`;

const getReviewQuery = ({ id, nodeId }: ReviewVars) => {
  const QUERY = nodeId ? REVIEW_BY_NODE_ID_QUERY : REVIEW_BY_ID_QUERY;
  return moviesClient.query({
    query: QUERY,
    variables: { id: nodeId || id },
    fetchPolicy: "network-only",
  });
};

export default getReviewQuery;
