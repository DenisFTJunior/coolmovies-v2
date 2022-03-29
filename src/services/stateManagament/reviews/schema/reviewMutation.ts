export type SaveReviewVars = {
  movieReview: {
    title: string;
    movieId: string;
    userReviewerId: string;
    rating: number;
    body: string;
  };
};

export type UpdateReviewVars = {
  id?: string;
  nodeId?: string;
  movieReviewPatch: {
    title: string;
    movieId: string;
    userReviewerId: string;
    rating: number;
    body: string;
  };
};

export type DeleteReviewInput = {
  input: DeleteReviewVars;
};

export type DeleteReviewVars = {
  id?: string;
  nodeId?: string;
};
