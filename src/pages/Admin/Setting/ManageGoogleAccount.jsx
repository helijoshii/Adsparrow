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
    {[...Array(9)].map((_, index) => (
      <td key={index}>
        <div className="shimmer-line"></div>
      </td>
    ))}
  </tr>
);

const ManageGoogleAccount = () => {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    propertyId: "",
    adName: "",
    file: null,
  });
  // Disable save button untill all form data is filled
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      file: e.target.files[0],
    }));
  };

  const isFormValid = formData.propertyId && formData.adName && formData.file;

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
        ordering: false,
        lengthMenu: [
          [100, 200, 300, 400],
          [100, 200, 300, 400],
        ], // Set custom page length options
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
                    <th>Action</th>
                    <th>Ad Account Name</th>
                    <th>Proprty Id</th>
                    <th>Json File</th>
                    <th>Account Status</th>
                    <th>Visibility</th>
                    <th>Status</th>
                    <th>Last Sync</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    // Show shimmer rows when data is loading
                    [...Array(1)].map((_, index) => <ShimmerRow key={index} />)
                  ) : (
                    <>
                      <tr>
                        <td>1</td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-primary small_bt"
                            data-bs-toggle="modal"
                            data-bs-target="#edit"
                          >
                            <FontAwesomeIcon icon={faPenToSquare} />
                          </button>
                        </td>
                        <td>Google Analytics </td>
                        <td>456061812</td>

                        <td>google_keys/savvy-fountain-434706-q5-f56ab62b4ac7.json</td>
                        <td>Success</td>
                        <td>
                          
                        </td>
                        <td>
                          
                        </td>
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
              <div className="mb-3">
            <label htmlFor="propertyId" className="form-label">
              Property ID
            </label>
            <input
              type="text"
              className="form-control"
              id="propertyId"
              name="propertyId"
              placeholder="Enter Property ID"
              value={formData.propertyId}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="adName" className="form-label">
              Ad Name
            </label>
            <input
              type="text"
              className="form-control"
              id="adName"
              name="adName"
              placeholder="Enter Ad Name"
              value={formData.adName}
              onChange={handleInputChange}
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
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
              </div>
              <div class="modal-footer justify-content-center">
                <button type="button" class="btn btn-primary" disabled={!isFormValid}>
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
