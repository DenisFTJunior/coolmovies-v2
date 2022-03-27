export type Review = {
  id: string;
  title: string;
  body: string;
  rating: number;

  movie: {
    id: string;
    title: string;
  };

  comments: {
    id: string;
    title: string;
    body: string;
  }[];
};

export type UnformattedReview = {
  allMovieReviews: {
    totalCount: number;
    pageInfo: {
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    };
    reviews: [
      {
        body: string;
        id: string;
        nodeId: string;
        rating: number;
        title: string;
        movie: {
          id: string;
          title: string;
        };
        commentsByMovieReviewId: {
          comments: [
            {
              id: string;
              title: string;
              body: string;
            }
          ];
        };
      }
    ];
  };
};
