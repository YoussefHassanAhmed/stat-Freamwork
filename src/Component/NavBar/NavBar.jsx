import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
 return <>
      <nav className="navbar navbar-expand-lg navbar-dark  p-4 fixed-top">
        <div className="container">
          <Link className="navbar-brand fw-bolder fs-2" href="#">
            START FRAMEWORK
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item fw-bolder">
                <NavLink className="nav-link"  aria-current="page" to={"about"}>
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item fw-bolder">
                <NavLink className="nav-link"  aria-current="page" to={"protfolio"}>
                  PORTFOLIO
                </NavLink>
              </li>
              <li className="nav-item fw-bolder">
                <NavLink className="nav-link"   aria-current="page" to={"contact"}>
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>

}
