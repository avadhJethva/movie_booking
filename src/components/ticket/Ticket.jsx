import React from "react"
import Moment from "moment"

const Ticket = ({ total, title, seats, poster }) => {
  return (
    <div className="ticket">
      <div className="holes-top" />
      <div className="holes-bottom" />
      <div className="title">
        <p className="cinema">BOOK my ticket presents</p>
        <p className="movie-title">{title}</p>
      </div>
      <div className="poster">
        {console.log(poster)}
        <img src={poster} alt="Movie: Only God Forgives" />
      </div>
      <div className="info">
        <table>
          <tbody>
            <tr>
              <th>SEATS</th>
            </tr>
            <tr>
              <td className="bigger">{seats.join(" , ")}</td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <th>PRICE</th>
              <th>DATE</th>
              <th>TIME</th>
            </tr>
            <tr>
              <td>rs {total}</td>
              <td>{Moment(new Date()).format("DD/MM/YYYY")}</td>
              <td>{Moment(new Date()).format("HH:mm A")}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Ticket
