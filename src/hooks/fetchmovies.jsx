import axios from "axios"
import * as actions from "../strore/action"

export function fetchMovies(dispatch) {
  dispatch(actions.fetchDataBegin())
  axios
    .get(
      `${import.meta.env.VITE_API_URL}?s=hindi&apikey=${
        import.meta.env.VITE_SECRET_KEY
      }`
    )
    .then((res) => {
      dispatch(actions.fetchData(res.data.Search))
    })
    .catch((error) => {
      dispatch(
        actions.fetchDataFailure(error.message ? error.message : "error accour")
      )
    })
}
