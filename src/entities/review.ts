import { Comment } from "./comment";
import { Movie } from "./movie";
import { User } from "./user";

export type Review = {
  id: string;
  title: string;
  body: string;
  rating: number;

  movie: Movie;

  comments?: Comment[];
};

export type FormReview = {
  id?: string;
  title?: string;
  body?: string;
  rating?: number;

  movieId?: string;
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
        user: User;
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

    user: User;

    commentsByMovieReviewId: {
      comments: Comment[];
    };
  };
};
