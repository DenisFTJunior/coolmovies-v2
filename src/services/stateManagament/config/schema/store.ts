import movieStore from "../../config/movieStore";

export type StateDispatch = ReturnType<typeof movieStore>["dispatch"];
export type RootState = ReturnType<ReturnType<typeof movieStore>['getState']>;