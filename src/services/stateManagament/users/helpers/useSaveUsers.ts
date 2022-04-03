import { SaveUserInput } from "../../../formatation/users/schema/save";
import { useStateDispatch } from "../../config/useDispatch";
import { actions as userActions } from "../userSlice";

const useSaveUsers = () => {
  const dispatch = useStateDispatch();
  const { saveUser, fetchUsers } = userActions;

  const save = (vars: SaveUserInput) => {
    dispatch(saveUser(vars));
    dispatch(fetchUsers({}));
  };

  return save;
};

export default useSaveUsers;
