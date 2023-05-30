import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./AbtRestrant.css";

const AbtRestrant = () => {
  return (
    <div>
      <div className="abtRestrant">
        <div className="abtTabs">
          <div className="abt-btns row">
            <Link className="btn-link active col" to="!#">
              Menu
            </Link>
            <Link className="btn-link col" to="/">
              Reviews
            </Link>
            <Link className="btn-link col" to="/">
              Info
            </Link>
          </div>
          <div className="bread-crum-btn">
            {/* Breadcrumb */}
            <nav className="d-flex row">
              <h6 className="mb-0">
                <Link href="" className="bread-link col">
                  Trending
                </Link>
                <span>|</span>
                <Link href="" className="bread-link col">
                  Chicken
                </Link>
                <span>|</span>
                <Link href="" className="bread-link col">
                  <u>Burger</u>
                </Link>
                <span>|</span>
                <Link href="" className="bread-link col">
                  <u>Rice Bowlz</u>
                </Link>
                <span>|</span>
                <Link href="" className="bread-link col">
                  <u>Snacks</u>
                </Link>
              </h6>
            </nav>
            {/* Breadcrumb */}
          </div>
        </div>
        {/* <div className="orderList">
          <div className="card text-center">
            <div className="card-header">Your Order</div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
            <div className="bg-warning card-footer">
              <NavLink className="text-dark fs-6">PROCESS TO CHECKOUT</NavLink>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AbtRestrant;
