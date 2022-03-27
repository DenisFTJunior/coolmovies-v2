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
        movie: {
          id: string;
          title: string;
        };
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
    movie: {
      id: string;
      title: string;
    };
    commentsQuery: {
      comments: [
        {
          id: string;
          title: string;
          body: string;
        }
      ];
    };
  };
};
