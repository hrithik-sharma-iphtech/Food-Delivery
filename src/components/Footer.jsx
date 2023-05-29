import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="text-center text-lg-start text-muted">
        {/* Section: Links  */}
        <section className="bg-footer d-flex justify-content-center justify-content-lg-between p-4 ">
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold mb-4">About Us</h6>
                <p className="footerText">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio hic fuga eaque modi libero, aperiam soluta
                  consectetur perferendis alias architecto expedita temporibus
                  quos suscipit animi in porro tenetur id veritatis deleniti
                  enim consequatur, dolorum sed. Exercitationem suscipit ex
                  nemo?
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">About Us</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Home
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    About Us
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Contact
                  </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Help & Support</h6>
                <p>
                  <a href="#!" className="text-reset">
                    FAQ
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Term & Condition
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Policy and Privacy
                  </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Social</h6>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="btn btn-outline-light border btn-floating m-1"
                      href="#!"
                      role="button"
                    >
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-outline-light border btn-floating m-1"
                      href="#!"
                      role="button"
                    >
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-outline-light border btn-floating m-1"
                      href="#!"
                      role="button"
                    >
                      <i class="fab fa-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}
        {/* Copyright */}
        <div
          className="text-center p-4 bg-copyright"
        >
          © 2018-2019 Kin Kao. Inc. ALL RIGHT RESERVED.
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </>
  );
};

export default Footer;
