import { Link } from 'react-router-dom'
import "../styles/navStyles.css"

export const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Home
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/add">
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/edit">
                Edit
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/details">
                Details
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
