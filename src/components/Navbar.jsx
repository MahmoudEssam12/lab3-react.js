import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary text-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-light" to="/">
          IMME
        </NavLink>
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
            <NavLink
              className="nav-link text-light"
              aria-current="page"
              exact
              to="/"
              activeClassName="activeLink"
            >
              Home
            </NavLink>
            <NavLink
              className="nav-link text-light"
              to="/movies"
              activeClassName="activeLink"
            >
              Movies
            </NavLink>
            <NavLink
              className="nav-link text-light"
              exact
              to="/Favourits"
              activeClassName="activeLink"
            >
              Favourits
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
