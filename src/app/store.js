import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import userReducer from "../reducers/user/userSlice";
import movieReducer from "../reducers/movie/movieSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  })
});