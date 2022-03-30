import { UnformattedUser, User } from "../../../../entities/user";

export const many = (unformattedMovie: UnformattedUser): User[] => {
  const users = unformattedMovie.allUsers.users.map((user) => {
    return {
      id: user.id,
      nodeId: user.nodeId,
      name: user.name,
    };
  });
  return users;
};
