import ReviewFormatter from "../services/formatation/reviews/ReviewFormatter";
import { expectedReview, review } from "./data/review/review";
import { expectedReviews, reviews } from "./data/review/reviews";
import { expectedSaveData, saveData } from "./data/review/saveData";
import { expectedUpdateData, updateData } from "./data/review/updateData";

describe("test review formatter", () => {
  const rf = new ReviewFormatter();
  it("format toSave", () => {
    const formattedData = rf.toSave(saveData);
    expect(formattedData).toEqual(expectedSaveData);
  });

  it("format toUpdate", () => {
    const formattedData = rf.toUpdate(updateData);
    expect(formattedData).toEqual(expectedUpdateData);
  });

  it("format one", () => {
    const formattedData = rf.one(review);
    expect(formattedData).toEqual(expectedReview);
  });

  it("format many", () => {
    const formattedData = rf.many(reviews);
    expect(formattedData).toEqual(expectedReviews);
  });
});
