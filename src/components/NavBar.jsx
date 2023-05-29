import React from "react";
import { NavLink } from "react-router-dom";
// import logo from "../Assets/logo.png";

const NavBar = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        {/* Container wrapper */}
        <div className="container">
          {/* Navbar brand */}
          <a className="navbar-brand me-2" href="/">
            <img
              src='/Assets/logo.png'
              height={30}
              alt="MDB Logo"
              loading="lazy"
              style={{ marginTop: "-1px" }}
            />
          </a>
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link fs-4" to="/">
                  Kim Kao | Just eat
                </NavLink>
              </li>
            </ul>
            {/* Left links */}
            <div className="d-flex align-items-center">
              <ul class="navbar-nav mb-2 mb-lg-0 me-5">
                <li class="nav-item me-3">
                  <NavLink class="nav-link active" aria-current="page" to="">
                    Home
                  </NavLink>
                </li>
                <li class="nav-item me-3">
                  <NavLink class="nav-link active" aria-current="page" to="/about">
                    About us
                  </NavLink>
                </li>
                <li class="nav-item me-3">
                  <NavLink class="nav-link active" aria-current="page" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
              <NavLink type="button" className="btn btn-success me-3 fw-bolder" to="/login" >
                Login / Register
              </NavLink>
            </div>
          </div>
          {/* Collapsible wrapper */}
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </>
  );
};

export default NavBar;
