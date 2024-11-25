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
  faPlus,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import upload from "../../../assets/upload.png"

// Shimmer loader component
const ShimmerRow = () => (
  <tr>
    {[...Array(3)].map((_, index) => (
      <td key={index}>
        <div className="shimmer-line"></div>
      </td>
    ))}
  </tr>
);


const ManageGoogleAccount = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Destroy the DataTable if it is already initialized
    if ($.fn.DataTable.isDataTable("#Manage_Google_table")) {
      $("#Manage_Google_table").DataTable().destroy();
    }

    // Simulate data loading
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate loading delay

    // Once data is loaded, initialize DataTable
    if (!loading) {
      $("#Manage_Google_table").DataTable({
        scrollX: true,
        destroy: true, // Ensure old table is destroyed before reinitializing
      });
    }
  }, [loading]); 

  return (
    <>
      <div class="container-fluid">
        <div class="row g-2">
          <div class="col-lg-auto  col-md-auto col-sm-auto my-auto me-auto">
            <h2 class="main_title m-0">Manage Google Account</h2>
          </div>
          <div class="col-lg-auto  col-md-auto col-sm-auto col-auto ms-auto">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#add_google_account"
            >
              <FontAwesomeIcon icon={faPlus} className="me-2" /> Add Google
              Account
            </button>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <div class="white_table">
              <table
                id="Manage_Google_table"
                class="table table-striped data-table-dr"
                style={{ width: "100%" }}
              >
                <thead>
                  <tr>
                    <th>Sr No</th>

                    <th>AD Name</th>

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
                        <td>Facebook </td>

                        <td>
                          <p class="mb-0">
                            <span class="d-flex justify-content-center align-items-center">
                              <FontAwesomeIcon
                                icon={faCalendarDays}
                                className=" me-2"
                              />
                              27/03/2021
                              <br />
                            </span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Google </td>

                        <td>
                          <p class="mb-0">
                            <span class="d-flex justify-content-center align-items-center">
                              <FontAwesomeIcon
                                icon={faCalendarDays}
                                className=" me-2"
                              />
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
        <div
          class="modal fade"
          id="add_google_account"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Add Google Account
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="mb-3">
                  <label for="property_id" class="form-label">
                    Property ID
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="property_id"
                    placeholder="Enter Property ID"
                  />
                </div>
                <div class="mb-3">
                  <label for="json_key" class="form-label">
                    File Upload
                  </label>
                  <div class="upload_img">
                    <div class="up_img">
                      <img src={upload} />
                    </div>
                    <span>Drop Files Here Or Browse Files</span>
                    <input
                      type="file"
                      name="json_key"
                      class="form-control"
                      id="json_key"
                    />
                  </div>
                </div>
              </div>
              <div class="modal-footer justify-content-center">
                <button type="button" class="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManageGoogleAccount
