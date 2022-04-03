import { Repository } from "../schema/repository";
import saveReview from "./request/saveUser";
import getReviews from "./request/getDirectors";

import { SaveDirectorVars } from "./request/schema/directorMutation";
import { DirectorsVars } from "./request/schema/directorQuery";

class DirectorRepository implements Repository {
  getOne(vars?: any) {
    throw new Error("Method not implemented.");
  }
  delete(vars?: any) {
    throw new Error("Method not implemented.");
  }
  update(vars?: any) {
    throw new Error("Method not implemented.");
  }

  async save(vars: SaveDirectorVars) {
    return await saveReview(vars);
  }
  async getMany(vars: DirectorsVars) {
    return await getReviews(vars);
  }
}

export default DirectorRepository;
