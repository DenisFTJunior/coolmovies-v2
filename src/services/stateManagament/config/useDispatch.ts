import { useDispatch } from "react-redux";

import { StateDispatch } from "./schema/store";

export const useStateDispatch = () => useDispatch<StateDispatch>();
