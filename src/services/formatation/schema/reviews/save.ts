export type SaveReviewOutput = {
  input: {
    movieReview: {
      title: string;
      movieId: string;
      userReviewerId: string;
      rating: number;
      body: string;
    };
  };
};

export type SaveReviewInput = {
  title: string;
  movieId: string;
  userReviewerId: string;
  rating: number;
  body: string;
};
