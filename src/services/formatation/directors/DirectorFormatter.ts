import { Formatter } from "../schema/formatter";
import { many } from "./formatters/many";
import { toSave } from "./formatters/toSave";

class DirectorFormatter implements Formatter {
  toSave = toSave;
  many = many;
  toUpdate(vars?: any) {
    throw new Error("Method not implemented.");
  }
  one(vars?: any) {
    throw new Error("Method not implemented.");
  }
}

export default DirectorFormatter;
