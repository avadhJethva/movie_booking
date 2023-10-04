import { useDispatch, useSelector } from "react-redux"
import Cinema from "../components/cinema/Cinema"
import { bookSeat, removeselected } from "../strore/action"
import { Fragment, memo, useEffect, useState } from "react"
import Modal from "../components/modal/Modal"
import { useNavigate } from "react-router-dom"
import Ticket from "../components/ticket/Ticket"

const Theater = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { selectedMovie, selectedSeats, ticketPrice, summerypoup } =
    useSelector((state) => state.MovieReducer)

  const [open, setOpen] = useState(false)

  const onclose = () => {
    setOpen(false)
  }
  const onOpen = () => {
    setOpen(true)
  }
  useEffect(() => {
    return () => dispatch(removeselected())
  }, [])
  return (
    <Fragment>
      <div className="container">
        <div className="selected-movies-info">
          <div className="ticket-info">
            <h1 className="heading">{selectedMovie?.Title}</h1>
            <h3>Ticket Prize : {ticketPrice}</h3>
          </div>
          <Cinema selectedMovie={selectedMovie} />
          <div className="poster">
            <img src={selectedMovie.Poster} alt="current movie" />
          </div>
        </div>
        {selectedSeats.length !== 0 && (
          <div className="fixed">
            <button
              className="mainbutton"
              onClick={() => {
                dispatch(bookSeat())
                onOpen()
              }}
            >
              Pay Rs.{selectedSeats.length * ticketPrice}
            </button>
          </div>
        )}
      </div>

      <Modal show={open} close={onclose}>
        <Modal.Title>booking summary</Modal.Title>
        <Modal.Body>
          <div className="summary">
            {console.log(selectedSeats.length * ticketPrice)}
            <Ticket
              title={selectedMovie?.Title}
              total={selectedSeats.length * ticketPrice}
              poster={selectedMovie?.Poster}
              seats={selectedSeats}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={() => {
              onclose()
              dispatch(removeselected())
            }}
          >
            okay
          </button>
          {/* <button onClick={() => navigate("/")}>see more</button> */}
        </Modal.Footer>
      </Modal>
    </Fragment>
  )
}

export default memo(Theater)
