import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import {
  ChartLine,
  ChevronDown,
  LayoutDashboard,
  Settings,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from "jquery";
import {
  faGauge,
  faChartLine,
  faAngleDown,
  faGears,
  faRectangleAd,
  faXmark,
  faBars
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const location = useLocation();

  useEffect(() => {
    // Unbind any existing click events to prevent multiple toggles
    $(".sidebar-link").off("click");

    // jQuery to toggle submenu and handle active class
    $(".sidebar-link").click(function (event) {
      const submenu = $(this).next(".submenu");

      // If it's a submenu link (e.g., Manage Google Account), do nothing
      if ($(this).closest(".submenu").length) {
        return; // Prevent toggling when clicking a submenu link
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
    <div>
       
      <div className={`left-sidebar ${isOpen ? "open" : "closed"}`}>


          <button className="toggle-btn" onClick={toggleSidebar}>
            {/* {isOpen ? "Close" : "Open"} */}
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} size="2x" color="white" />
          </button>
          <div>
            <div className="brand-logo d-flex align-items-center justify-content-center">
              <NavLink className="text-nowrap logo-img" to="/" end>
                <img src={logo} width="150" alt="" />
              </NavLink>
              {/* <div
                className="close-btn d-xl-none d-block sidebartoggler cursor-pointer "
                id="sidebarCollapse"
              >
                <FontAwesomeIcon icon={faXmark} />
              </div> */}
            </div>
            <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
              <ul id="sidebarnav">
                <li className="sidebar-item">
                  <NavLink className="sidebar-link" to="/" end>
                    <span>
                      <FontAwesomeIcon icon={faGauge} />
                    </span>
                    <span className="hide-menu">Dashboard</span>
                  </NavLink>
                </li>
                <li className="sidebar-item">
                  <NavLink className="sidebar-link" to="/analytics">
                    <span>
                      <FontAwesomeIcon icon={faChartLine} />
                    </span>
                    <span className="hide-menu">Analytics</span>
                  </NavLink>
                </li>
                {/* current setting tab */}
                <li className="sidebar-item">
                  <a className="sidebar-link" href="#" aria-expanded="false">
                    <span>
                      <FontAwesomeIcon icon={faGears} />
                    </span>
                    <span className="hide-menu">Setting</span>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </a>
                  <ul className="submenu">
                    <li className="sidebar-item">
                      <NavLink className="sidebar-link" to="/ManageAdAccount">
                        <span>
                          <FontAwesomeIcon icon={faRectangleAd} />
                        </span>
                        <span className="hide-menu">Manage AD Account</span>
                      </NavLink>
                    </li>
                    <li className="sidebar-item">
                      <NavLink
                        className="sidebar-link"
                        to="/managegoogleaccount"
                      >
                        <span>
                          <FontAwesomeIcon icon={faGoogle} />
                        </span>
                        <span className="hide-menu">Manage Google Account</span>
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>





      </div>
    </div>
  );
};

export default Sidebar;
