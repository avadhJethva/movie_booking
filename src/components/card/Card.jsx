import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setCurentMovie } from "../../strore/action"

const Card = ({ Poster, Title, Type, id, Year }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(setCurentMovie(id))
    navigate(`/${id}`)
  }
  return (
    <div className="cellphone-container">
      <div className="movie">
        <div className="movie-img">
          <img src={Poster} alt="movie poster" />
        </div>
        <div className="text-movie-cont">
          <div className="mr-grid">
            <div className="col1">
              <h1 className="card-heading">{Title}</h1>
            </div>
          </div>
          <div className="mr-grid summary-row">
            <div className="col2">
              <h5 className="card-heading">{Type}</h5>
              <h5 className="card-heading">release {Year}</h5>
            </div>
          </div>
          <div className="mr-grid action-row">
            <div className="col2">
              <button className="watch-btn" onClick={handleClick}>
                Book Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
