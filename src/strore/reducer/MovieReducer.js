import { UUID } from "../../utils/utils"
import * as actions from "../action"
import Moment from "moment"

const initialState = {
  movies: [],
  loading: false,
  error: null,
  selectedMovie: {},
  selectedSeats: [],
  ticketPrice: 200,
}
function MovieReducer(state = initialState, action) {
  const movies = [...state.movies]
  const selectedMovie = state.selectedMovie
  switch (action.type) {
    case actions.FETCH_DATA_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case actions.FETCH_DATA:
      return {
        ...state,
        loading: false,
        movies: action.payload.movies.map((movie) => {
          return {
            id: UUID(),
            ...movie,
            bookedSeat: [],
            timeCreated: new Moment(),
            formattedWaitTime: new Moment().fromNow(true),
          }
        }),
      }
    case actions.FETCH_DATA_FAILURE:
      // console.log(action.payload)
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        movies: [],
      }
    case actions.SET_CURRENT_MOVIE:
      return {
        ...state,
        selectedMovie: movies.find((_, i) => i === parseInt(action.payload.id)),
      }
    case actions.SET_SEAT:
      return {
        ...state,
        selectedSeats: action.payload,
      }
    case actions.REMOVE_SEAT:
      return {
        ...state,
        selectedSeats: [],
      }
    case actions.BOOK:
      selectedMovie.bookedSeat = [
        ...selectedMovie.bookedSeat,
        ...state.selectedSeats,
      ]
      return {
        ...state,
        movies: movies
          .filter((movie) => movie.id !== selectedMovie.id)
          .concat(selectedMovie),
        // selectedSeats: [],
      }
    default:
      return state
  }
}

export default MovieReducer
