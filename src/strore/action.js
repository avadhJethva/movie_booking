// export const movie = {
//   GET_MOVIES: "GET_MOVIES",
// }
//actions -> reducers

export const FETCH_DATA_BEGIN = "FETCH_DATA_BEGIN"
export const FETCH_DATA = "FETCH_DATA"
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE"
export const SET_CURRENT_MOVIE = "SET_CURRENT_MOVIE"
export const BOOK = "BOOK"
export const SET_SEAT = "SET_SEAT"
export const REMOVE_SEAT = "REMOVE_SEAT"

export const fetchDataBegin = () => ({
  type: FETCH_DATA_BEGIN,
})

export const fetchData = (movies) => ({
  type: FETCH_DATA,
  payload: { movies },
})
export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: { error },
})
export const setCurentMovie = (id) => ({
  type: SET_CURRENT_MOVIE,
  payload: { id },
})
export const bookSeat = (seat) => ({
  type: BOOK,
  payload: { seat },
})
export const selectSeat = (arr) => ({
  type: SET_SEAT,
  payload: arr,
})
export const removeselected = () => ({
  type: REMOVE_SEAT,
})
