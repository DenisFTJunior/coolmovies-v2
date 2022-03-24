export type Review = {
  id: string;
  title: string;
  body: string;
  rating: number;

  movie: {
    id: string;
    title: String;
  };

  comments: {
    id: string;
    title: String;
    body: string;
  };
};
