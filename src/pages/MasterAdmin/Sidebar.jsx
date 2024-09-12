import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from 'jquery';
import {
  faGauge,
  faUsersRays 
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';





const Sidebar = () => {
  
  return (
    <div>
      <aside className="left-sidebar">
        <div>
          <div className="brand-logo d-flex align-items-center justify-content-center">
            <NavLink className="text-nowrap logo-img" to="/MasterAdmin" end>
              <img src={logo} width="150" alt="" />
            </NavLink>
            <div
              className="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
              id="sidebarCollapse"
            >
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
          <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
            <ul id="sidebarnav">
              <li className="sidebar-item">
                <NavLink className="sidebar-link" to="/MasterAdmin/" end>
                  <span>
                    <FontAwesomeIcon icon={faGauge} />
                  </span>
                  <span className="hide-menu">Dashboard</span>
                </NavLink>
              </li>
              <li className="sidebar-item">
                <NavLink className="sidebar-link" to="/MasterAdmin/ManageUser">
                  <span>
                  <FontAwesomeIcon icon={faUsersRays} />
                  </span>
                  <span className="hide-menu">Manage user</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
