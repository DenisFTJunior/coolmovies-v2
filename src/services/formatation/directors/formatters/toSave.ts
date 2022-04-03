import { SaveDirectorInput, SaveDirectorOutput } from "../schema/save";

export const toSave = (input: SaveDirectorInput): SaveDirectorOutput => {
  return {
    movieDirector: {
      ...input,
    },
  };
};
