import { Repository } from "../schema/repository";
import deleteReview from "./request/deleteReview";
import saveReview from "./request/saveReview";
import updateReview from "./request/updateReview";
import getReview from "./request/getReview";
import getReviews from "./request/getReviews";

class ReviewRepository implements Repository {
  save = saveReview;
  delete = deleteReview;
  update = updateReview;
  getOne = getReview;
  getMany = getReviews;
}

export default ReviewRepository;
