import { Comment } from "./comment";
import { Movie } from "./movie";

export type Review = {
  id: string;
  title: string;
  body: string;
  rating: number;

  movie: Movie;

  comments: Comment[];
};

export type UnformattedReviews = {
  allMovieReviews: {
    totalCount: number;
    pageInfo: {
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    };
    reviews: [
      {
        id: string;
        nodeId: string;
        title: string;
        body: string;
        rating: number;
        movie: Movie;
      }
    ];
  };
};

export type UnformattedReview = {
  movieReview: {
    id: string;
    nodeId: string;
    title: string;
    body: string;
    rating: number;

    movie: Movie;

    commentsQuery: {
      comments: Comment[];
    };
  };
};
