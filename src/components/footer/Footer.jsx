import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer>
      <div className="copy-right-sec">
        <i className="fa-solid fa-copyright"></i>
        Book My Ticket {new Date().getFullYear()} Powerd By{" "}
        <Link to="/">Book My Ticket </Link>
      </div>
    </footer>
  )
}

export default Footer
