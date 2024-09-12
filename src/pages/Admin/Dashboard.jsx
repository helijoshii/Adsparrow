import React, { useState, useEffect } from "react";
import $ from "jquery";
import "datatables.net-bs5";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRectangleAd,
  faCalendarDays,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";


const ShimmerRow = () => (
  <tr>
    {[...Array(3)].map((_, index) => (
      <td key={index}>
        <div className="shimmer-line"></div>
      </td>
    ))}
  </tr>
);

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize DataTable on the table after the component mounts
    $(document).ready(function () {
      $("#Meta_data_table").DataTable();
      $("#Google_data_table").DataTable();
    });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    if (!loading) {
      $("#Meta_data_table").DataTable({
        scrollX: true,
        destroy: true, // Ensure old table is destroyed before reinitializing
      });
    }

  }, []);

  return (
    <div>
      <div className="container-fluid">
        <div className="row pt-3">
          <div className="col-auto">
            <h2 className="main_title">Dashboard</h2>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="row">
              <div className="col-lg-auto col-md-auto col-sm-auto col-12">
                <div className="white_shadow dasboard-3">
                  <div className="left">
                    <span>Total META ADS Counts</span>
                    <h3>30 </h3>
                  </div>
                  <div className="right">
                    <span>
                      <FontAwesomeIcon icon={faRectangleAd} />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="white_table">
                  
                  <table id="Meta_data_table" className="table table-striped " style={{ width: '100%' }}>
                         <thead>
                           <tr>
                             <th>Sr No</th>
                             <th>Ad Name</th>
                             <th>Last SYNC</th>
                           </tr>
                         </thead>
                         <tbody>
                         {loading ? (
                  // Show shimmer rows when data is loading
                  [...Array(3)].map((_, index) => <ShimmerRow key={index} />)
                ) : (
                  // Show actual data after loading
                  <>
                           <tr>
                             <td>1</td>
                             <td>Google</td>
                             <td>
                               <p className="mb-0">
                                 <span className="d-flex justify-content-center align-items-center">
                                  
                                   <FontAwesomeIcon icon={faCalendarDays} className=' me-2' />
                                   27/03/2021
                                   <br />
                                 </span>
                                 <span className="d-flex justify-content-center align-items-center time_span">
                                 <FontAwesomeIcon icon={faClock} className=' me-2' />07:00AM
                                 </span>
                               </p>
                             </td>
                           </tr>
                           <tr>
                             <td>2</td>
                             <td>Webapprise</td>
                             <td>
                               <p className="mb-0">
                                 <span className="d-flex justify-content-center align-items-center">
                                   <i className="fa fa-calendar-alt me-2"></i>
                                   27/03/2021
                                   <br />
                                 </span>
                                 <span className="d-flex justify-content-center align-items-center time_span">
                                   <i className="fa fa-clock me-2"></i>07:00AM
                                 </span>
                               </p>
                             </td>
                           </tr>
                           <tr>
                             <td>3</td>
                             <td>Zion z1</td>
                             <td>
                               <p className="mb-0">
                                 <span className="d-flex justify-content-center align-items-center">
                                   <i className="fa fa-calendar-alt me-2"></i>
                                   27/03/2021
                                   <br />
                                 </span>
                                 <span className="d-flex justify-content-center align-items-center time_span">
                                   <i className="fa fa-clock me-2"></i>07:00AM
                                 </span>
                               </p>
                             </td>
                           </tr>
                           </>
                )}
                         </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="row">
              <div className="col-lg-auto col-md-auto col-sm-auto col-12">
                <div className="white_shadow dasboard-3">
                  <div className="left">
                    <span>Total Google Counts</span>
                    <h3>1 </h3>
                  </div>
                  <div className="right">
                    <span>
                      <FontAwesomeIcon icon={faGoogle} />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="white_table">
                  <table
                    id="Google_data_table"
                    className="table table-striped "
                    style={{ width: "100%" }}
                  >
                    <thead>
                      <tr>
                        <th>Sr No</th>
                        <th>Ad Name</th>
                        <th>Last SYNC</th>
                      </tr>
                    </thead>
                    <tbody>
                    {loading ? (
                  // Show shimmer rows when data is loading
                  [...Array(1)].map((_, index) => <ShimmerRow key={index} />)
                ) : (
                  // Show actual data after loading
                  <>
                      <tr>
                        <td>1</td>
                        <td>Google</td>
                        <td>
                          <p className="mb-0">
                            <span className="d-flex justify-content-center align-items-center">
                              {/* <i className="fa fa-calendar-alt me-2"></i> */}
                              <FontAwesomeIcon
                                icon={faCalendarDays}
                                className=" me-2"
                              />
                              27/03/2021
                              <br />
                            </span>
                            <span className="d-flex justify-content-center align-items-center time_span">
                              <FontAwesomeIcon
                                icon={faClock}
                                className=" me-2"
                              />
                              07:00AM
                            </span>
                          </p>
                        </td>
                      </tr>
                      </>
                )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-3"></div>

          <div className="row"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
