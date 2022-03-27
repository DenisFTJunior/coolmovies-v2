import { TypedUseSelectorHook, useSelector } from "react-redux";

import { RootState } from "./schema/store";

export const useStateSelector: TypedUseSelectorHook<RootState> = useSelector;
