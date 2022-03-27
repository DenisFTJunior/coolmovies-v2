import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { combineEpics, createEpicMiddleware, Epic } from "redux-observable";

import { moviesClient } from "../../../repositories/config/movieClient";
//Reducers
import reviewReducer from "../reviews/reviewSlice";
//Epics
import reviewEpics from "../reviews/reviewEpics";

const rootEpic = combineEpics(reviewEpics);

const movieStore = (): EnhancedStore => {
  const epicMiddleware = createEpicMiddleware({
    dependencies: { client: moviesClient },
  });

  const store = configureStore({
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(epicMiddleware),

    reducer: {
      review: reviewReducer,
    },
  });

  epicMiddleware.run(rootEpic);

  return store;
};

export default movieStore;
