export type SaveReviewOutput = {
  movieReview: {
    title: string;
    movieId: string;
    userReviewerId: string;
    rating: number;
    body: string;
  };
};

export type SaveReviewInput = {
  title: string;
  movieId: string;
  userId: string;
  rating: number;
  body: string;
};
