import { memo } from "react"
import Loader from "../components/loader/Loader"
import Card from "../components/card/Card"
import { useSelector } from "react-redux"

const Dashboard = () => {
  const { loading, movies, error } = useSelector((state) => state.MovieReducer)

  return loading ? (
    <Loader />
  ) : (
    <div className="container">
      <h1 className="heading">Select Your Movie</h1>
      <div className="cardWrapper">
        {movies.map((movie, i) => {
          return <Card {...movie} id={i} key={i} />
        })}
      </div>
    </div>
  )
}

export default memo(Dashboard)
