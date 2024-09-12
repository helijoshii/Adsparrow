import React, { useState, useEffect } from "react";
import $ from "jquery";
import "datatables.net-bs5";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faCalendarDays, faPlus } from "@fortawesome/free-solid-svg-icons";

// Shimmer loader component
const ShimmerRow = () => (
  <tr>
    {[...Array(8)].map((_, index) => (
      <td key={index}>
        <div className="shimmer-line"></div>
      </td>
    ))}
  </tr>
);

const Demo = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Destroy the DataTable if it is already initialized
    if ($.fn.DataTable.isDataTable("#AD_Account_table")) {
      $("#AD_Account_table").DataTable().destroy();
    }

    // Simulate data loading
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulate loading delay

    // Once data is loaded, initialize DataTable
    if (!loading) {
      $("#AD_Account_table").DataTable({
        scrollX: true,
        destroy: true, // Ensure old table is destroyed before reinitializing
      });
    }
  }, [loading]); // Re-run effect when loading state changes

  return (
    <div className="container-fluid">
      <div className="row g-2">
        <div className="col-lg-auto col-md-auto col-sm-auto my-auto me-auto">
          <h2 className="main_title m-0">Manage AD Account</h2>
        </div>
        <div className="col-lg-auto col-md-auto col-sm-auto col-auto ms-auto">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#add_account"
          >
            <FontAwesomeIcon icon={faPlus} className="me-2" /> Add Account
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="white_table">
            <table id="AD_Account_table" className="table table-striped data-table-dr" style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th>Sr No</th>
                  <th>Action</th>
                  <th>AD Account ID</th>
                  <th>Token ID</th>
                  <th>AD Name</th>
                  <th>Visibility</th>
                  <th>Status</th>
                  <th>Last Sync</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  // Show shimmer rows when data is loading
                  [...Array(2)].map((_, index) => <ShimmerRow key={index} />)
                ) : (
                  <>
                    <tr>
                      <td>1</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-primary small_bt"
                          data-bs-toggle="modal"
                          data-bs-target="#edit"
                        >
                          <FontAwesomeIcon icon={faPenToSquare} />
                        </button>
                      </td>
                      <td>AD9879</td>
                      <td>98ASV</td>
                      <td>Facebook</td>
                      <td>
                        <div className="toggle">
                          <input type="checkbox" className="phase-class1" />
                          <label></label>
                        </div>
                      </td>
                      <td>
                        <div className="toggle">
                          <input type="checkbox" className="phase-class" />
                          <label></label>
                        </div>
                      </td>
                      <td>
                        <p className="mb-0">
                          <span className="d-flex justify-content-center align-items-center">
                            <FontAwesomeIcon icon={faCalendarDays} className="me-2" />
                            27/03/2021
                            <br />
                          </span>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-primary small_bt"
                          data-bs-toggle="modal"
                          data-bs-target="#edit"
                        >
                          <FontAwesomeIcon icon={faPenToSquare} />
                        </button>
                      </td>
                      <td>AD9879</td>
                      <td>98ASV</td>
                      <td>Google</td>
                      <td>
                        <div className="toggle">
                          <input type="checkbox" className="phase-class1" />
                          <label></label>
                        </div>
                      </td>
                      <td>
                        <div className="toggle">
                          <input type="checkbox" className="phase-class" />
                          <label></label>
                        </div>
                      </td>
                      <td>
                        <p className="mb-0">
                          <span className="d-flex justify-content-center align-items-center">
                            <FontAwesomeIcon icon={faCalendarDays} className="me-2" />
                            27/03/2021
                            <br />
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
  );
};

export default Demo;
