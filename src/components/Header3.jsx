import React from "react";
import "./Header3.css";
const Header3 = () => {
  return (
    <>
      <div className="header3">
        <section className="infoCount row">
          <div className="infoCard  col col-md">
            {/* <div className="card-body"> */}
            <h2 className="cardTitle">745</h2>
            <h5>Restaurants</h5>
            {/* </div> */}
          </div>
          <div className="infoCard col">
            {/* <div className="card-body"> */}
            <h2 className="cardTitle">2,934</h2>
            <h5>Food Lovers</h5>
            {/* </div> */}
          </div>
          <div className="infoCard col">
            {/* <div className="card-body"> */}
            <h2 className="cardTitle">98</h2>
            <h5>Daily Orders</h5>
            {/* </div> */}
          </div>
          <div className="infoCard col">
            {/* <div className="card-body"> */}
            <h2 className="cardTitle">150</h2>
            <h5>Delivers in City</h5>
            {/* </div> */}
          </div>
        </section>
        <section className="drivers row">
          <h1 className="fw-lighter">Become a driver</h1>
          <p className="fw-light">Make money on the go</p>
          <div className="driverCards m-5 col-lg col-md col-xs">
            <div className="driveImg">
              <img
                src="/Assets/key-chain.png"
                className="card-img-top "
                alt="Location"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Your vehicle, your time</h5>
              <p className="card-text fw-light fs-6 mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus quasi cumque eaque ab, fuga inventore quas
                distinctio.
              </p>
            </div>
          </div>
          <div className="driverCards m-5 col-lg col-md col-xs">
            <div className="driveImg">
              <img
                src="/Assets/wallet.png"
                className="card-img-top "
                alt="Location"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Weekly payments</h5>
              <p className="card-text fw-light fs-6 mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus quasi cumque eaque ab, fuga inventore quas
                distinctio.
              </p>
            </div>
          </div>
          <div className="driverCards m-5 col-lg col-md col-xs">
            <div className="driveImg">
              <img
                src="/Assets/buildings.png"
                className="card-img-top "
                alt="Location"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Enjoy your city</h5>
              <p className="card-text fw-light fs-6 mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus quasi cumque eaque ab, fuga inventore quas
                distinctio.
              </p>
            </div>
          </div>
        </section>
            <button className="driverBtn">Become a driver</button>
      </div>
    </>
  );
};

export default Header3;
