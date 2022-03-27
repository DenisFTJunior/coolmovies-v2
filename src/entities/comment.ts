export type Comment = {
  id: string;
  title: string;
  body: Date;

  user?: {
    id: string;
    name: string;
  };
};
