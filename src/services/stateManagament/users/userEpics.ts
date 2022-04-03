import { combineEpics } from "redux-observable";

import { epicFetchUsers } from "./epics/epicUser";
import { epicSaveUser } from "./epics/epicSaveUser";

const userEpics = combineEpics(epicFetchUsers, epicSaveUser);

export default userEpics;
