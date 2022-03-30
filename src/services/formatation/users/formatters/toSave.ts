import { SaveUserInput, SaveUserOutput } from "../schema/save";

export const toSave = (input: SaveUserInput): SaveUserOutput => {
  return {
    user: {
      ...input,
    },
  };
};
