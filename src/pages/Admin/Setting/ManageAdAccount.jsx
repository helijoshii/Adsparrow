import React, { useState, useEffect } from "react";
import $ from "jquery";
import "datatables.net-bs5";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faCalendarDays,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

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

const ManageAdAccount = () => {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    adAccountId: "",
    tokenId: "",
    adName: "",
    appSecret: "",
    accountName: "",
  });

    // status toggle 
    const [checkboxStates, setCheckboxStates] = useState({
      toggle1: false,
      toggle2: false,
      toggle3: false,
      toggle4: false, // Add more toggles as needed
    });
  
    const handleCheckboxChange = (id) => (event) => {
      const isChecked = event.target.checked;
  
      // Show confirmation dialog based on the checkbox state
      if (isChecked) {
        checked(id);
      } else {
        unChecked(id);
      }
    };
  
    const checked = (id) => {
      MySwal.fire({
        title: <p>Are you sure?</p>,
        text: "Do you want to activate your status?",
        icon: "success",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        showCancelButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          setCheckboxStates((prev) => ({
            ...prev,
            [id]: true,
          }));
        } else {
          // If cancelled, reset the checkbox state
          setCheckboxStates((prev) => ({
            ...prev,
            [id]: false,
          }));
        }
      });
    };
  
    const unChecked = (id) => {
      MySwal.fire({
        title: "Are you sure?",
        text: "Do you want to deactivate your status?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          setCheckboxStates((prev) => ({
            ...prev,
            [id]: false,
          }));
        } else {
          // If cancelled, reset the checkbox state
          setCheckboxStates((prev) => ({
            ...prev,
            [id]: true,
          }));
        }
      });
    };

  useEffect(() => {
    // Destroy the DataTable if it is already initialized
    if ($.fn.DataTable.isDataTable("#AD_Account_table")) {
      $("#AD_Account_table").DataTable().destroy();
    }

    // Simulate data loading
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate loading delay

    // Once data is loaded, initialize DataTable
    if (!loading) {
      $("#AD_Account_table").DataTable({
        scrollX: true,
        destroy: true, // Ensure old table is destroyed before reinitializing
      });
    }
  }, [loading]); 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Check if all fields are filled
  const isFormComplete =
    formData.adAccountId.trim() &&
    formData.tokenId.trim() &&
    formData.adName.trim() &&
    formData.appSecret.trim() &&
    formData.accountName.trim();

  return (
    <>
      <div class="container-fluid">
        <div class="row g-2">
          <div class="col-lg-auto  col-md-auto col-sm-auto my-auto me-auto">
            <h2 class="main_title m-0">Manage AD Account</h2>
          </div>
          <div class="col-lg-auto  col-md-auto col-sm-auto col-auto ms-auto">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#add_account"
            >
              <FontAwesomeIcon icon={faPlus} className="me-2" /> Add Account
            </button>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <div class="white_table">
              <table
                id="AD_Account_table"
                class="table table-striped data-table-dr"
                style={{ width: "100%" }}
              >
                <thead>
                  <tr>
                    <th>Sr No</th>
                    <th>Action</th>
                    <th>AD Account Name</th>
                    <th>AD Account ID</th>
                    <th>Access Token ID</th>
                    <th>App Id</th>
                    <th>Secret Key</th>
                    <th>Account Status</th>
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
                            class="btn btn-primary small_bt"
                            data-bs-toggle="modal"
                            data-bs-target="#edit"
                          >
                            <FontAwesomeIcon icon={faPenToSquare} />
                          </button>
                        </td>
                        <td>Temuu2</td>
                        <td>276971163774132</td>
                        <td>EAAPBBfYwfZBEBO</td>
                        <td>1056656279502817	</td>
                        <td>2262d17143d0195c0384c347f63f6434</td>
                        <td>Success</td>
                        <td>
                          <div className="toggle">
                            <input
                              type="checkbox"
                              className="phase-class"
                              id="toggle1"
                              checked={checkboxStates.toggle1}
                              onChange={handleCheckboxChange("toggle1")}
                            />
                            <label></label>
                          </div>
                        </td>
                       
                        
                        <td>
                          <div className="toggle">
                            <input
                              type="checkbox"
                              className="phase-class"
                              id="toggle2"
                              checked={checkboxStates.toggle2}
                              onChange={handleCheckboxChange("toggle2")}
                            />
                            <label></label>
                          </div>
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
          id="add_account"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Account Access Token
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
                  <label for="" class="form-label">
                  Access Token<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
              type="text"
              className="form-control"
              id="adAccountId"
              name="adAccountId"
              placeholder="Enter Access Token"
              value={formData.adAccountId}
              onChange={handleChange}
            />
                </div>
                <div class="mb-3">
                  <label for="" class="form-label">
                    AD Account ID<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
              type="text"
              className="form-control"
              id="tokenId"
              name="tokenId"
              placeholder="Enter AD Account ID"
              value={formData.tokenId}
              onChange={handleChange}
            />
                </div>
                <div class="mb-3">
                  <label for="" class="form-label">
                    App ID<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
              type="text"
              className="form-control"
              id="adName"
              name="adName"
              placeholder="Enter App ID"
              value={formData.adName}
              onChange={handleChange}
            />
                </div>
                <div class="mb-3">
                  <label for="" class="form-label">
                    App Secret<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
              type="text"
              className="form-control"
              id="appSecret"
              name="appSecret"
              placeholder="Enter App Secret"
              value={formData.appSecret}
              onChange={handleChange}
            />
            </div>
                <div class="mb-3">
                  <label for="" class="form-label">
                    Account Name (optional)
                  </label>
                  <input
              type="text"
              className="form-control"
              id="accountName"
              name="accountName"
              placeholder="Enter Account Name (optional)"
              value={formData.accountName}
              onChange={handleChange}
            />
                </div>
              </div>
              <div class="modal-footer justify-content-center">
              <button
            type="button"
            className="btn btn-primary"
            disabled={!isFormComplete} // Disable if fields are not filled
          >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="edit"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Edit Account Access Token
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
                  <label for="" class="form-label">
                  Access Token
                  </label>
                  <input
              type="text"
              className="form-control"
              id="adAccountId"
              name="adAccountId"
              placeholder="Enter AD Account ID"
              value={formData.adAccountId}
              onChange={handleChange}
            />
                </div>
                <div class="mb-3">
                  <label for="" class="form-label">
                  AD Account ID
                  </label>
                  <input
              type="text"
              className="form-control"
              id="tokenId"
              name="tokenId"
              placeholder="Enter Token ID"
              value={formData.tokenId}
              onChange={handleChange}
            />
                </div>
                <div class="mb-3">
                  <label for="" class="form-label">
                  App ID
                  </label>
                  <input
              type="text"
              className="form-control"
              id="adName"
              name="adName"
              placeholder="Enter App ID"
              value={formData.adName}
              onChange={handleChange}
            />
                </div>
                <div class="mb-3">
                  <label for="" class="form-label">
                 App Secret
                  </label>
                  <input
              type="text"
              className="form-control"
              id="adName"
              name="adName"
              placeholder="Enter App Secret"
              value={formData.adName}
              onChange={handleChange}
            />
                </div>
                <div class="mb-3">
                  <label for="" class="form-label">
                 Account Name
                  </label>
                  <input
              type="text"
              className="form-control"
              id="adName"
              name="adName"
              placeholder="Enter Account Name"
              value={formData.adName}
              onChange={handleChange}
            />
                </div>
              </div>
              <div class="modal-footer justify-content-center">
                <button type="button" class="btn btn-primary"
                disabled={!isFormComplete} // Disable if fields are not filled
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default ManageAdAccount;
