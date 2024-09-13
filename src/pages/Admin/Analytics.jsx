import React, { useState, useEffect } from "react";
import $ from "jquery";
import "datatables.net-bs5";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faAngleDown,
  faMagnifyingGlass,
  faXmark,
  faArrowsRotate,
  faPenToSquare,
  faCalendarDays,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import 'select2/dist/css/select2.min.css'; // Import Select2 CSS
import 'select2'; // Import Select2 JavaScript


// Shimmer loader component
const ShimmerRow = () => (
  <tr>
    {[...Array(12)].map((_, index) => (
      <td key={index}>
        <div className="shimmer-line"></div>
      </td>
    ))}
  </tr>
);

const Analytics = () => {
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Destroy any existing DataTable instance and initialize a new one
  //   if ($.fn.DataTable.isDataTable("#Analytics_table_data")) {
  //     $("#Analytics_table_data").DataTable().destroy();
  //   }
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);

  //   const table = $('#Analytics_table_data').DataTable({
  //     scrollX: true, // Enable horizontal scrolling
  //     destroy: true, // Allow reinitialization
  //   });
    

  //   // Cleanup function to destroy the DataTable when component unmounts
  //   return () => {
  //     if ($.fn.DataTable.isDataTable("#Analytics_table_data")) {
  //       $("#Analytics_table_data").DataTable().destroy();
  //     }
  //   };
  // }, []);

  useEffect(() => {
    if ($.fn.DataTable.isDataTable("#Analytics_table_data")) {
      $("#Analytics_table_data").DataTable().destroy();
    }

    // Simulate data loading
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    if (!loading) {
      $("#Analytics_table_data").DataTable({
        scrollX: true,
        destroy: true, 
      });
    }
  }, [loading]); 


  

  return (
    <div>
      <div className="container-fluid">
        <div className="row g-2">
          <div className="col-lg-auto  col-md-auto col-sm-auto my-auto me-auto">
            <h2 className="main_title m-0">Analytics</h2>
          </div>
          <div className="col-lg-auto  col-md-auto col-sm-auto">
            <select
              className="select2 js-example-basic-single select-label form-control w-100"
              name="select-label"
            >
              <option value="Senora" selected>
                Ad Account name
              </option>
              <option value="Senora">Account 1</option>
              <option value="Senora">Account 2</option>
              <option value="Senora">Account 3</option>
            </select>
          </div>
          <div className="col-lg-auto  col-md-auto col-sm-auto">
            <select
              className="select2 js-example-basic-single select-label form-control w-100"
              name="select-label"
            >
              <option value="Senora" selected>
                Select Status
              </option>
              <option value="Senora">Pending</option>
              <option value="Senora">Completed</option>
              <option value="Senora">Approved</option>
            </select>
          </div>
          <div className="col-lg-auto  col-md-auto col-sm-auto">
            <div className="d-flex align-items-center">
              <div id="reportrange" className="daterange">
                <i className="fa fa-calendar"></i>&nbsp;
                <span>January 11, 2024 - February 9, 2024</span>{" "}
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
              <a href="#" className="btn btn-primary ms-2">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </a>
              <a href="#" className="btn btn-danger ms-2">
                <FontAwesomeIcon icon={faXmark} />
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="white_table">
              <div className="row">
                <div className="col-lg-auto  col-md-auto col-sm-auto col-auto me-auto">
                  <ul className="list_view">
                    <li>
                      <FontAwesomeIcon icon={faCircle} /> Inactive
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCircle} /> Active
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCircle} /> Review Pending{" "}
                    </li>
                  </ul>
                </div>
                <div className="col-lg-auto  col-md-auto col-sm-auto col-auto">
                  <div className="text-end mb-2">
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="me-1 fa-fade"
                      style={{ color: "red" }}
                    />
                    Last SYNC at : 30-02-2025 : 12:15:50 PM
                    <a href="#" className="btn btn-primary ms-2">
                      <FontAwesomeIcon icon={faArrowsRotate} />{" "}
                    </a>
                  </div>
                </div>
              </div>
              <table
                id="Analytics_table_data"
                className="table table-striped data-table-dr"
                style={{ width: "100%" }}
              >
                <thead>
                  <tr>
                    <th>Sr No</th>
                    <th>Campaign Name</th>
                    <th>AD Sets</th>
                    <th>AD Name</th>
                    <th>Buget</th>
                    <th>Amount Spent</th>
                    <th>Current CPC</th>
                    <th>Average CPC</th>
                    <th>Revenue</th>
                    <th>ROI </th>
                    <th>Action</th>
                    <th>Date And Time</th>
                  </tr>
                </thead>
                <tbody>
                {loading ? (
                  // Show shimmer rows when data is loading
                  [...Array(3)].map((_, index) => <ShimmerRow key={index} />)
                ) : (
                  <>
                  <tr>
                    <td>1</td>
                    <td>Jayesh</td>
                    <td>Ram</td>
                    <td>
                      <span className="Inactive">Instagram</span>
                    </td>
                    <td>
                      <span></span>
                    </td>
                    <td>20,000</td>
                    <td>4500</td>
                    <td>9000</td>
                    <td>20</td>
                    <td>30</td>

                    <td>
                      <div className="toggle">
                        <input type="checkbox" className="phase-class" />
                        <label></label>
                      </div>
                    </td>

                    <td>
                      <p className="mb-0">
                        <span className="d-flex justify-content-center align-items-center">
                          <FontAwesomeIcon
                            icon={faCalendarDays}
                            className=" me-2"
                          />
                          27/03/2021
                          <br />
                        </span>
                        <span className="d-flex justify-content-center align-items-center time_span">
                          <FontAwesomeIcon icon={faClock} className=" me-2" />
                          07:00AM
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Suresh</td>
                    <td>Ram</td>
                    <td>
                      <span className="Active">Google</span>
                    </td>
                    <td>
                      <span className="badge text-bg-info">5</span>
                      <button
                        type="button"
                        className="btn btn-primary small_bt"
                        data-bs-toggle="modal"
                        data-bs-target="#buget"
                      >
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </button>
                    </td>
                    <td>20,000</td>
                    <td>4500</td>
                    <td>9000</td>
                    <td>20</td>
                    <td>30</td>

                    <td>
                      <div className="toggle">
                        <input type="checkbox" className="phase-class" />
                        <label></label>
                      </div>
                    </td>

                    <td>
                      <p className="mb-0">
                        <span className="d-flex justify-content-center align-items-center">
                          <FontAwesomeIcon
                            icon={faCalendarDays}
                            className=" me-2"
                          />
                          27/03/2021
                          <br />
                        </span>
                        <span className="d-flex justify-content-center align-items-center time_span">
                        <FontAwesomeIcon icon={faClock} className=" me-2" />
                          07:00AM
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Rajesh</td>
                    <td>Ram</td>

                    <td>
                      <span className="Review_Pending">Facebook</span>
                    </td>
                    <td>
                      <span className="badge text-bg-info">5</span>
                      <button
                        type="button"
                        className="btn btn-primary small_bt"
                        data-bs-toggle="modal"
                        data-bs-target="#buget"
                      >
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </button>
                    </td>
                    <td>20,000</td>
                    <td>4500</td>
                    <td>9000</td>
                    <td>20</td>
                    <td>30</td>
                    <td>
                      <div className="toggle">
                        <input type="checkbox" className="phase-class" />
                        <label></label>
                      </div>
                    </td>

                    <td>
                      <p className="mb-0">
                        <span className="d-flex justify-content-center align-items-center">
                          <FontAwesomeIcon
                            icon={faCalendarDays}
                            className=" me-2"
                          />
                          27/03/2021
                          <br />
                        </span>
                        <span className="d-flex justify-content-center align-items-center time_span">
                        <FontAwesomeIcon icon={faClock} className=" me-2" />
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
        <div
          className="modal fade"
          id="buget"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Edit Buget
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="" className="form-label"></label>
                  <input type="text" className="form-control" id="" />
                </div>
              </div>
              <div className="modal-footer justify-content-center">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
