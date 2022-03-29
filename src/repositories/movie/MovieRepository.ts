import { Repository } from "../schema/repository";
import saveReview from "./request/saveMovie";
import getReviews from "./request/getMovies";
import { SaveMovieVars } from "./request/schema/movieMutation";
import { MoviesVars } from "./request/schema/movieQuery";

class MovieRepository implements Repository {
  getOne(vars?: any) {
    throw new Error("Method not implemented.");
  }
  delete(vars?: any) {
    throw new Error("Method not implemented.");
  }
  update(vars?: any) {
    throw new Error("Method not implemented.");
  }

  async save(vars: SaveMovieVars) {
    return await saveReview(vars);
  }
  async getMany(vars: MoviesVars) {
    return await getReviews(vars);
  }
}

export default MovieRepository;
