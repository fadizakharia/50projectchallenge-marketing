import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "rgb(37, 31, 40)", color: "white" }}
      >
        <div className="d-flex w-100">
          <h3>
            <Link style={{ color: "white" }} to="/">
              LoremIpsum
            </Link>
          </h3>

          <button type="button" className="btn btn-outline-light ml-auto ">
            <Link style={{ color: "white" }} to="/contact">
              Contact Us
            </Link>
          </button>
        </div>
      </nav>
    </header>
  );
}
