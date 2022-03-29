import { combineEpics } from "redux-observable";

import { epicFetchMovies } from "./epics/epicMovies";
import { epicSaveMovie } from "./epics/epicSaveMovie";

const movieEpics = combineEpics(
  epicFetchMovies,
  epicSaveMovie
);

export default movieEpics;
