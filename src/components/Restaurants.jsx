import React from "react";
import { NavLink } from "react-router-dom";
import AbtRestrant from "./AbtRestrant";
import NavBar from "./NavBar";
import "./Restaurant.css";

const Restaurants = () => {
  return (
    <>
      <NavBar />
      <div className="restrnt-bg">
        <div className="restrantCard">
          <img
            src="./Assets/food3.jpeg"
            width={300}
            className="img-fluid rounded-circle border border-5"
          />
          <div className="card-body mt-3">
            <h2 className="card-title fw-bold">
              Behrouz Biryani (South Extension)
            </h2>
            <p className="card-text fs-2 fw-light">
              Biryani
              <br />
              <span className="fs-6">
                <i className="fa-solid fa-star" style={{ color: "#ffee38" }} />
                (2.3)
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-dark text-center text-lg-start">
        {/* Copyright */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", color: "#999" }}
        >
          Behrouz Biryani (South Extension) can deliver to you at Lalpat Nagar
          &nbsp;
          <a
            className="text-success border border-success border-2 p-1"
            href="!#"
          >
            <i
              className="fa-sharp fa-solid fa-location-dot p-1"
              style={{ color: "#00a803" }}
            />
            CHANGE LOCATION
          </a>
        </div>
        {/* Copyright */}
      </div>
      <AbtRestrant />
    </>
  );
};

export default Restaurants;
