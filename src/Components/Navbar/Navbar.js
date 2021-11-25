import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link
            to="/home"
            className="navbar-brand fw-bold text-primary "
            style={{ fontStyle: "italic", fontSize: "23px" }}
            href="#"
          >
            YooCycle
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto fw-bold d-flex align-items-center">
              <li className="nav-item">
                <Link
                  to="/home"
                  className="nav-link text-primary"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/explore"
                  className="nav-link text-primary"
                  aria-current="page"
                  href="#"
                >
                  Explore
                </Link>
              </li>

              {user?.email && (
                <li className="nav-item">
                  <Link
                    to="/dashboard"
                    className="nav-link text-primary"
                    aria-current="page"
                    href="#"
                  >
                    Dashboard
                  </Link>
                </li>
              )}

              {user?.email ? (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    As: {user?.displayName && user?.displayName}
                  </a>
                  <ul
                    className="dropdown-menu text-center mt-2"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      {user?.email && (
                        <button
                          onClick={logOut}
                          className="btn btn-info mt-2 text-white py-0"
                        >
                          {" "}
                          Log Out{" "}
                        </button>
                      )}
                    </li>
                  </ul>
                </li>
              ) : (
                <Link style={{ textDecoration: "none" }} to="/login">
                  Login
                </Link>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
