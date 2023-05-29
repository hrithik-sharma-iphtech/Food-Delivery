import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
// import logo from "../Assets/logo.png";
import Header2 from "./Header2";
import Header3 from "./Header3";
import Header4 from "./Header4";
import Header5 from "./Header5";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="main">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
          {/* Container wrapper */}
          <div className="container">
            {/* Navbar brand */}
            <a className="navbar-brand me-2" href="/">
              <img
                src="/Assets/logo.png"
                height={30}
                alt="MDB Logo"
                loading="lazy"
                style={{ marginTop: "-1px" }}
              />
            </a>
            {/* Toggle button */}
            <button
              className="navbar-toggler text-light"
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
                  <NavLink className="nav-link fs-4" to="">
                    Kim Kao | Just eat
                  </NavLink>
                </li>
              </ul>
              {/* Left links */}
              <div className="d-flex align-items-center">
                <ul className="navbar-nav mb-2 mb-lg-0 me-5">
                  <li className="nav-item me-3">
                    <NavLink
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item me-3">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to="/about"
                    >
                      About us
                    </NavLink>
                  </li>
                  <li className="nav-item me-3">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to="/contact"
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
                <NavLink
                  type="button"
                  className="btn btn-success me-3 fw-bolder"
                  to="/login"
                >
                  Login / Register
                </NavLink>
              </div>
            </div>
            {/* Collapsible wrapper */}
          </div>
          {/* Container wrapper */}
        </nav>
        {/* Navbar */}

        <div className="content">
          <div className="title">
            <h1>Delivery App</h1>
            <span>Food delivery service</span>
          </div>
          <div className="location mt-3 row">
            {/* <form action=""> */}
            {/* <div className="dropdown col">
                <button
                  className="btn btn-light dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select City
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div> */}
            <div className="dropdown col">
              <button
                className="btn btn-light dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                Select City
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
              <button
                className="btn btn-light dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                Select City
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>

            <button className="submitBtn mt-3">SUBMIT</button>
            {/* </form> */}
          </div>
        </div>
      </div>
      <Header2 />
      <Header3 />
      <Header4 />
      <Header5 />
      <Footer />
    </>
  );
};

export default Home;
