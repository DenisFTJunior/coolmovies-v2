import {
  DeleteReviewVars,
  SaveReviewVars,
  UpdateReviewVars,
} from "./request/schema/reviewMutation";
import { ReviewVars, reviewsVars } from "./request/schema/reviewQuery";

import { Repository } from "../schema/repository";
import deleteReview from "./request/deleteReview";
import saveReview from "./request/saveReview";
import updateReview from "./request/updateReview";
import getReview from "./request/getReview";
import getReviews from "./request/getReviews";

class ReviewRepository implements Repository {
  async save(vars: SaveReviewVars) {
    return await saveReview(vars);
  }
  async delete(vars: DeleteReviewVars) {
    return await deleteReview(vars);
  }
  async update(vars: UpdateReviewVars) {
    return await updateReview(vars);
  }
  async getOne(vars: ReviewVars) {
    return await getReview(vars);
  }
  async getMany(vars: reviewsVars) {
    return await getReviews(vars);
  }
}

export default ReviewRepository;
