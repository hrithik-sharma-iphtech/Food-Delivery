import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./AbtRestrant.css";
import Trending from "./Trending";
import Header5 from "./Header5";
import Footer from "./Footer";

const AbtRestrant = () => {
  return (
    <div>
      <div className="abtRestrant row">
        <section className="abtTabs col-sm">
          <div className="abt-btns row text-center">
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
                <Link activeStyle={{color:'#02851c'}} to="#!" className="bread-link col-6">
                  Trending
                </Link>

                <Link to="#!" className="bread-link col-6">
                  Chicken
                </Link>

                <Link to="#!" className="bread-link col-6">
                  Burger
                </Link>

                <Link to="#!" className="bread-link col-6">
                  Rice Bowlz
                </Link>

                <Link to="#!" className="bread-link col-6">
                  Snacks
                </Link>
              </h6>
            </nav>
            {/* Breadcrumb */}
          </div>
          <Trending />
        </section>

        {/* Order List Card */}
        <section className="orderList col-sm">
          <div
            className="card text-center"
            style={{ backgroundColor: "#f5f5f5" }}
          >
            <div className="card-header">
              <h4>Your Order</h4>
              <hr />
            </div>
            <table className="card-body table">
              <tbody>
                <tr className="text-start">
                  <td>Mark Zukerburger sandwick with coke and Fries.</td>
                  <td style={{width:'30%'}}>
                    <b>$20.00</b>
                    <Link>
                      <i
                        className="fa-solid fa-trash"
                        style={{ color: "#ff5e00", margin: "5px" }}
                      />
                    </Link>
                  </td>
                </tr>
                <tr style={{ backgroundColor: "#cdcdcd", textAlign: "start" }}>
                  <td>Total</td>
                  <td>
                    <b>$20.00</b>
                    <i
                      className="fa-light fa-trash-xmark"
                      style={{ color: "#ff5757" }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <div
              style={{
                backgroundColor: "#ffcd1a",
                padding: "10px",
                marginTop: "-17px",
              }}
            >
              <NavLink
                style={{ color: "#333", fontSize: "13px", fontWeight: "600" }}
              >
                PROCESS TO CHECKOUT
              </NavLink>
            </div>
          </div>
        </section>
      </div>

      <Header5 />
      <Footer />
    </div>
  );
};

export default AbtRestrant;
