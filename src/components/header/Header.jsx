import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <nav>
        <input type="checkbox" id="nav-toggle" />
        <div className="logo">
          <span className="hilight-logo">Book </span> My Ticket
        </div>
        <ul className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <label htmlFor="nav-toggle" className="icon-burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </label>
      </nav>
    </header>
  )
}

export default Header
