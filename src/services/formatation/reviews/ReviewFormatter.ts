import { Formatter } from "../schema/formatter";
import { many } from "./formatters/many";
import { one } from "./formatters/one";

class ReviewFormatter implements Formatter {
  toSave(vars?: any) {
    throw new Error("Method not implemented.");
  }
  toUpdate(vars?: any) {
    throw new Error("Method not implemented.");
  }
  one = one;
  many = many;
}

export default ReviewFormatter
