import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { combineEpics, createEpicMiddleware, Epic } from "redux-observable";

import { moviesClient } from "../../../repositories/config/movieClient";
//Reducers
import reviewReducer from "../reviews/reviewSlice";
import movieReducer from "../movies/movieSlice";
//Epics
import reviewEpics from "../reviews/reviewEpics";
import movieEpics from "../movies/movieEpics";

const rootEpic = combineEpics(reviewEpics, movieEpics);

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
    },
  });

  epicMiddleware.run(rootEpic);

  return store;
};

export default movieStore;
