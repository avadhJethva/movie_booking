import { useDispatch, useSelector } from "react-redux"
import { selectSeat } from "../../strore/action"
import { seates } from "../../utils/utils"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Cinema() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { selectedMovie, selectedSeats } = useSelector(
    (state) => state.MovieReducer
  )

  function handleSelectedState(seat) {
    const isSelected = selectedSeats.includes(seat)
    if (isSelected) {
      dispatch(selectSeat(selectedSeats.filter((s) => s !== seat)))
    } else {
      dispatch(selectSeat([...selectedSeats, seat]))
    }
  }
  // useEffect(() => {
  if (Object.keys(selectedMovie).length === 0)
    return (
      <>
        <button onClick={() => navigate("/")}> goto home</button>
      </>
    )
  // }, [])

  return (
    <div className="Cinema">
      <div className="box-labels">
        <div className="box box-available">Available</div>
        <div className="box box-selected">Selected</div>
        <div className="box box-unavailable">Unavailable</div>
      </div>
      <div className="seats">
        {seates().map((seat) => {
          const isSelected = selectedSeats?.includes(seat)
          const isOccupied = selectedMovie?.bookedSeat?.includes(seat)
          return (
            <span
              tabIndex="0"
              key={seat}
              className={`seat
              ${isSelected ? "selected" : ""}
                ${isOccupied ? "occupied" : ""} 
                `}
              onClick={isOccupied ? null : () => handleSelectedState(seat)}
              // onClick={isOccupied ? null : () => dispatch(bookSeat(seat))}
            >
              {seat}
            </span>
          )
        })}
      </div>
    </div>
  )
}
// onKeyPress={
//   isOccupied
//     ? null
//     : (e) => {
//         if (e.key === "Enter") {
//           handleSelectedState(seat);
//         }
//       }
// }
