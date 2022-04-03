import { useStateDispatch } from "../../config/useDispatch";
import { actions as directorActions } from "../DirectorSlice";
import { SaveDirectorInput } from "../schema/directorMutation";

const useSaveDirector = () => {
  const dispatch = useStateDispatch();
  const { saveDirector, fetchDirectors } = directorActions;

  const save = (vars: SaveDirectorInput) => {
    dispatch(saveDirector(vars));
    dispatch(fetchDirectors({}));
  };

  return save;
};

export default useSaveDirector;
