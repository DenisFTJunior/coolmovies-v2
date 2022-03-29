import { Formatter } from "../schema/formatter";
import { many } from "./formatters/many";
import { one } from "./formatters/one";
import { toSave } from "./formatters/toSave";
import { toUpdate } from "./formatters/toUpdate";

class ReviewFormatter implements Formatter {
  toSave = toSave;
  toUpdate = toUpdate;
  one = one;
  many = many;
}

export default ReviewFormatter;
