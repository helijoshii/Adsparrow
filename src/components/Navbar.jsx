// import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const logout = async () => {
//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // Access the env variable
//     const res = await axios.post(
//       `${API_BASE_URL}/logout/`
//     );
//     if (res.status === 200) {
//       localStorage.removeItem("token");
//       navigate("/login");
//       // console.log("Logged out");
//     }
//   };

//   return (
//     <>
//       <div className="app-header">
//         <nav className="navbar navbar-expand-lg navbar-light">
//           {/* <ul className="navbar-nav">
//             <li className="nav-item d-block d-xl-none">
//               <a
//                 className="nav-link sidebartoggler nav-icon-hover"
//                 id="headerCollapse"
//                 href="#"
//               >
//                 <FontAwesomeIcon icon={faBars} />
//               </a>
//             </li>
//           </ul> */}
//           <div
//             className="navbar-collapse justify-content-end px-0"
//             id="navbarNav"
//           >
//             <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
//               <li className="nav-item dropdown">
//                 <a
//                   className="nav-link nav-icon-hover"
//                   href="#"
//                   id="drop2"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   SR
//                 </a>
//                 <div
//                   className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up"
//                   aria-labelledby="drop2"
//                 >
//                   <div className="message-body">
//                     <p
//                       className="btn btn-outline-primary mx-3 mt-2 d-block"
//                       onClick={logout}
//                     >
//                       Logout
//                     </p>
//                   </div>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Navbar;

import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();
  // const userData = JSON.parse(localStorage.getItem("user_info"));
  const userData = JSON.parse(localStorage.getItem("user_info")) || {};
  const userEmail = userData.email || "";
  const logout = async () => {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const token = localStorage.getItem("token");

    // const res = await axios.post(`${API_BASE_URL}/logout/`);
    
    // if (res.status === 200) {
    //   localStorage.removeItem("token");
    //   localStorage.removeItem("user_info");
    //   navigate("/login");
    // }

    try {
      // Make API request with token in headers
      const res = await axios.post(
        `${API_BASE_URL}/logout/`,
        {}, // Empty body
        {
          headers: {
            Authorization: `Token ${token}`, // Add the token here
          },
        }
      );
      
      if (res.status === 200) {
        // Clear user data from local storage
        localStorage.removeItem("token");
        localStorage.removeItem("user_info");
        
        // Redirect to login page
        navigate("/login");
      }
    } catch (error) {
      // console.error("Error during logout:", error);
      // Handle error appropriately (e.g., show a notification or redirect)
    }
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
                href="#"
              >
                <FontAwesomeIcon icon={faBars} />
              </a>
            </li>
          </ul>
          <div
            className="navbar-collapse justify-content-end px-0"
            id="navbarNav"
          >
            <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
              <li className="nav-item dropdown">
                <p
                  className="nav-link nav-icon-hover cursor-pointer"
                  id="drop2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {userEmail.slice(0, 1).toUpperCase()}
                </p>
                <div
                  className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up"
                  aria-labelledby="drop2"
                >
                  <div className="message-body">
                    <p
                      className="btn btn-outline-primary mx-3 mt-2 d-block"
                      onClick={logout}
                    >
                      Logout
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
