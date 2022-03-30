import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary text-light">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">
          IMME
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link
              className="nav-link text-light active"
              aria-current="page"
              to="/"
            >
              Home
            </Link>
            <Link className="nav-link text-light" to="/movies">
              Movies
            </Link>
            <Link className="nav-link text-light" to="/Favourits">
              Favourits
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;