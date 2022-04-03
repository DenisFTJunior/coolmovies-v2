import { combineEpics } from "redux-observable";

import { epicFetchDirectors } from "./epics/epicDirectors";
import { epicSaveDirector } from "./epics/epicSaveDirector";

const directorEpics = combineEpics(epicFetchDirectors, epicSaveDirector);

export default directorEpics;
