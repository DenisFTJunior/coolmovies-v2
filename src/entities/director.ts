export type Director = {
  id?: string;
  nodeId?: string;
  name: string;
  age: number;
};

export type UnformattedDirector = {
  allMovieDirectors: {
    directors: Director[];
    totalCount: number;
    pageInfo: {
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    };
  };
};
