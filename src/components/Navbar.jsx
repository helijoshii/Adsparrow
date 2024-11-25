import React from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const navigate = useNavigate();
    const login = () => {
      navigate("/login");
    };

    
  return (
    <>
      <div className="app-header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <ul className="navbar-nav">
            <li className="nav-item d-block d-xl-none">
              <a
                className="nav-link sidebartoggler nav-icon-hover"
                id="headerCollapse"
                href="javascript:void(0)"
              >
                <FontAwesomeIcon icon={faBars} />
              </a>
            </li>
          </ul>
          {/* <FontAwesomeIcon icon={faBars} /> */}
          <div
            className="navbar-collapse justify-content-end px-0"
            id="navbarNav"
          >
            <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
              <li className="nav-item dropdown">
                <a
                  className="nav-link nav-icon-hover"
                  href="javascript:void(0)"
                  id="drop2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SR
                </a>
                <div
                  className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up"
                  aria-labelledby="drop2"
                >
                  <div className="message-body">
                    <a
                      href=""
                      className="btn btn-outline-primary mx-3 mt-2 d-block"
                      onClick={login}
                    >
                      Logout
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar
