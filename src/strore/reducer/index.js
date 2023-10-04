import { combineReducers } from "redux"

import MovieReducer from "./MovieReducer"

// export the first argument of Redux.createStore that is combining the reducers, to be used by index.js later on
export default combineReducers({
  MovieReducer,
})
