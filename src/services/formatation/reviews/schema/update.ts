export type UpdateReviewOutput = {
  id?: string;
  nodeId?: string;
  movieReviewPatch: {
    title: string;
    movieId: string;
    userReviewerId?: string;
    rating: number;
    body: string;
  };
};

export type UpdateReviewInput = {
  id?: string;
  nodeId?: string;
  title: string;
  movieId: string;
  userId?: string;
  rating: number;
  body: string;
};
