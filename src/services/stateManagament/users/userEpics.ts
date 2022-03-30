import { combineEpics } from "redux-observable";

import { epicFetchUsers } from "./epics/epicUser";
import { epicSaveUser } from "./epics/epicSaveUser";

const movieEpics = combineEpics(epicFetchUsers, epicSaveUser);

export default movieEpics;
