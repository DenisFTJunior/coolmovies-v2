import { useEffect, useState } from "react";

import { useStateDispatch } from "../../config/useDispatch";
import { useStateSelector } from "../../config/useSelector";
import { actions as userActions } from "../userSlice";
import { UsersVars } from "../schema/userQuery";

const useUsers = (vars: UsersVars) => {
  const dispatch = useStateDispatch();
  const { fetchUsers } = userActions;

  const action = (v: UsersVars = {}) => dispatch(fetchUsers({ ...vars, ...v }));

  useEffect(() => {
    action();
  }, []);

  const stateMovie = useStateSelector((state) => state.movie);

  return [stateMovie.fetchedUsers, action, stateMovie];
};

export default useUsers;
