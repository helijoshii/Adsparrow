import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from 'jquery';
import {
  faGauge,
  faUsersRays,
  faBars,
  faXmark 
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const body = document.body;

    if (isOpen) {
      // Remove the classes when sidebar is open
      body.classList.remove("sidebar-closed");
    } else {
      // Add the classes when sidebar is closed
      body.classList.add("sidebar-closed");
    }
  }, [isOpen]);
  const location = useLocation();

  useEffect(() => {
    $(".sidebar-link").off("click");

    $(".sidebar-link").click(function (event) {
      const submenu = $(this).next(".submenu");

      if ($(this).closest(".submenu").length) {
        return; 
      }

      // Only toggle if the clicked link has a submenu (i.e., the main 'Settings' tab)
      if (submenu.length) {
        // Close other submenus and toggle the clicked one
        $(".submenu").not(submenu).slideUp(); // Close other open submenus
        submenu.slideToggle(); // Toggle the clicked submenu
      } else {
        $(".submenu").slideUp(); // Close all submenus when clicking non-settings links
      }

      // Remove active class from all sidebar links and add to the clicked one
      $(".sidebar-link").removeClass("active");
      $(this).addClass("active");

      // Keep the settings tab open when any of its submenus is active
      if ($(this).parents(".submenu").length) {
        $(this)
          .closest(".sidebar-item")
          .children(".sidebar-link")
          .addClass("active");
      }
    });

    // Add active class based on current URL
    const path = window.location.href;
    $(".sidebar-link").each(function () {
      if (this.href === path) {
        $(this).addClass("active");

        // Open the settings tab if a submenu is active
        $(this).parents("li").parent(".submenu").addClass("active").slideDown(); // Make sure submenu stays open

        $(this)
          .closest(".submenu")
          .parents(".sidebar-item")
          .children(".sidebar-link")
          .addClass("active");
      }
    });
  }, [location]);

  return (
    <>
      <div className={`left-sidebar  ${isOpen ? "open" : "closed"}`}>
      <button className="toggle-btn " onClick={toggleSidebar}>
            
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} size="2x" color="white" />
          </button>
        <div>
          <div className="brand-logo d-flex align-items-center justify-content-center">
            <NavLink className="text-nowrap logo-img" to="/master-admin" end>
              <img src={logo} width="150" alt="" />
            </NavLink>
            {/* <div
              className="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
              id="sidebarCollapse"
            >
              <i className="fa-solid fa-xmark"></i>
            </div> */}
          </div>
          <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
            <ul id="sidebarnav">
              <li className="sidebar-item">
                <NavLink className="sidebar-link" to="/master-admin/" end>
                  <span>
                    <FontAwesomeIcon icon={faGauge} />
                  </span>
                  <span className="hide-menu">Dashboard</span>
                </NavLink>
              </li>
              <li className="sidebar-item">
                <NavLink className="sidebar-link" to="/master-admin/manage-user">
                  <span>
                  <FontAwesomeIcon icon={faUsersRays} />
                  </span>
                  <span className="hide-menu">Manage user</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
