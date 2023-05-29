import React from "react";
import "./Header5.css";
const Header5 = () => {
  return (
    <>
      <div className="header5">
        <section className="dwnldPg">
          <img
            src="./Assets/mobile.svg"
            alt="img"
            height={350}
            className="d-lg-block d-sm-none "
          />
          <div className="instDown">
            <h3 className="text-success">Download the app</h3>
            <p style={{ color: "#ccc", fontSize: "13px", fontWeight: "400" }}>
              Lorem ipsum dolor sit amet co nsectetur adipisicing elit.
              Architecto nobis corrupti optio labore, adipisci eius similique
              odit perferendis. Blanditiis, necessitatibus perspiciatis nesciunt
              libero, recusandae quia odit ut illum pariatur, voluptatum nihil
              nisi sint. Magni, nulla iste. Error ipsum eaque doloribus quia,
              minus voluptates. Labore sint eaque quis tempora ipsum totam.
            </p>
            <button className="btnJoin"><img src="./Assets/play-store.png" height={60} alt="play btn" /></button>
            <button className="btnJoin"><img src="./Assets/apple-store.png" height={40} alt="play btn" /></button>

          </div>
        </section>
        <section className="joinUsForm">
            <h1 className=''>Keep in touch, join our newletter</h1>
            <form>
                <input type="email" name="email" id="email" placeholder="Enter your email id"/>
                <input type="submit" value="Submit" />
            </form>
        </section>
      </div>
    </>
  );
};

export default Header5;
