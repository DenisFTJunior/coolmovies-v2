import { Repository } from "../schema/repository";
import saveReview from "./request/saveUser";
import getReviews from "./request/getUsers";
import { SaveUserVars } from "./request/schema/userMutation";
import { UsersVars } from "./request/schema/userQuery";

class UserRepository implements Repository {
  getOne(vars?: any) {
    throw new Error("Method not implemented.");
  }
  delete(vars?: any) {
    throw new Error("Method not implemented.");
  }
  update(vars?: any) {
    throw new Error("Method not implemented.");
  }

  async save(vars: SaveUserVars) {
    return await saveReview(vars);
  }
  async getMany(vars: UsersVars) {
    return await getReviews(vars);
  }
}

export default UserRepository;
