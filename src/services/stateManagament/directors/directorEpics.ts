import { combineEpics } from "redux-observable";

import { epicFetchUsers } from "./epics/epicUser";
import { epicSaveDirector } from "./epics/epicSaveDirector";

const directorEpics = combineEpics(epicFetchUsers, epicSaveDirector);

export default directorEpics;
