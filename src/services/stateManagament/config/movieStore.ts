import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { combineEpics, createEpicMiddleware, Epic } from "redux-observable";

import { moviesClient } from "../../../repositories/config/movieClient";
//Reducers
import reviewReducer from "../reviews/reviewSlice";
import movieReducer from "../movies/movieSlice";
import userSlice from "../users/userSlice";

//Epics
import reviewEpics from "../reviews/reviewEpics";
import movieEpics from "../movies/movieEpics";
import userEpics from "../users/userEpics";

const rootEpic = combineEpics(reviewEpics, movieEpics, userEpics);

const movieStore = (): EnhancedStore => {
  const epicMiddleware = createEpicMiddleware({
    dependencies: { client: moviesClient },
  });

  const store = configureStore({
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(epicMiddleware),

    reducer: {
      review: reviewReducer,
      movie: movieReducer,
      user: userSlice,
    },
  });

  epicMiddleware.run(rootEpic);

  return store;
};

export default movieStore;
