import { useState, useEffect } from "react";
import $ from "jquery";
import "datatables.net-bs5";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faCalendarDays,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { userSchema } from "../../../utils/validationSchemas";
const MySwal = withReactContent(Swal);

// Shimmer loader component
const ShimmerRow = () => (
  <tr>
    {[...Array(11)].map((_, index) => (
      <td key={index}>
        <div className="shimmer-line"></div>
      </td>
    ))}
  </tr>
);

const ManageAdAccount = () => { 
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    adAccountId: "",
    tokenId: "",
    adName: "",
    appSecret: "",
    accountName: "",
  });
  const [errors, setErrors] = useState({});
    // status toggle 
    const [checkboxStates, setCheckboxStates] = useState({
      toggle1: false,
      toggle2: false,
      toggle3: false,
      toggle4: false, // Add more toggles as needed
    });
    const token = localStorage.getItem("token");
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleManageUser = () => {
      const result = userSchema.safeParse(formData);
      if (result.success) {
        handleAddUser(result.data);
        setErrors({});
      } else {
        const fieldErrors = result.error.flatten().fieldErrors;
        setErrors(fieldErrors);
      }
    };
      // Add user
  const handleAddUser = async () => {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `${API_BASE_URL}/facebook-ad-account/`,
        {
          fb_ad_account_id: formData.tokenId,          // Mapping directly in the request
          fb_ad_access_token: formData.adAccountId,    // Mapping directly in the request
          fb_ad_account_name: formData.accountName,    // Mapping directly in the request
          fb_ad_app_id: formData.adName,               // Mapping directly in the request
          fb_ad_app_secret_key: formData.appSecret,    // Mapping directly in the request
        },
        { headers: { Authorization: `Token ${token}` } }
      );
      if (response.status === 201) {
        setUsers((prevUsers) => [...prevUsers, response.data]);
        setFormData({ accountName: "", adAccountId: "", adName: "" , appSecret: "", tokenId: "" });
        alert("User added successfully!");
        
      }
    } catch (error) {
      console.error("Error adding user:", error);
      console.error("Error adding user:", error.response?.data || error.message);
alert(error.response?.data?.message || "Failed to add user.");
    }
  };


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
        ordering: false,
        lengthMenu: [
          [100, 200, 300, 400],
          [100, 200, 300, 400],
        ], // Set custom page length options
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
      <div className="container-fluid">
        <div className="row g-2">
          <div className="col-lg-auto  col-md-auto col-sm-auto my-auto me-auto">
            <h2 className="main_title m-0">Manage AD Account</h2>
          </div>
          <div className="col-lg-auto  col-md-auto col-sm-auto col-auto ms-auto">
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
              <table
                id="AD_Account_table"
                className="table table-striped data-table-dr"
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
                    [...Array(1)].map((_, index) => <ShimmerRow key={index} />)
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
                        <td>Temuu2</td>
                        <td>276971163774132</td>
                        <td>EAAPBBfYwfZBEBO</td>
                        <td>1056656279502817 </td>
                        <td>2262d17143d0195c0384c347f63f6434</td>
                        <td>Success</td>
                        <td>
                          <div className="toggle">
                            <input
                              type="checkbox"
                              className="phase-className"
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
                              className="phase-className"
                              id="toggle2"
                              checked={checkboxStates.toggle2}
                              onChange={handleCheckboxChange("toggle2")}
                            />
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
          id="add_account"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Account Access Token
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
                  <label for="Access Token" className="form-label">
                    Access Token<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.adAccountId ? "is-invalid" : ""
                    }`}
                    id="adAccountId"
                    name="adAccountId"
                    placeholder="Enter Access Token"
                    value={formData.adAccountId}
                    onChange={handleInputChange}
                  />
                  {errors.adAccountId && (
                    <small className="text-danger">{errors.adAccountId}</small>
                  )}
                </div>
                <div className="mb-3">
                  <label for="tokenId" className="form-label">
                    AD Account ID<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.tokenId ? "is-invalid" : ""
                    }`}
                    id="tokenId"
                    name="tokenId"
                    placeholder="Enter AD Account ID"
                    value={formData.tokenId}
                    onChange={handleInputChange}
                  />
                  {errors.tokenId && (
                    <small className="text-danger">{errors.tokenId}</small>
                  )}
                </div>
                <div className="mb-3">
                  <label for="adName" className="form-label">
                    App ID<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.adName ? "is-invalid" : ""
                    }`}
                    id="adName"
                    name="adName"
                    placeholder="Enter App ID"
                    value={formData.adName}
                    onChange={handleInputChange}
                  />
                  {errors.adName && (
                    <small className="text-danger">{errors.adName}</small>
                  )}
                </div>

                <div className="mb-3">
                  <label for="appSecret" className="form-label">
                    App Secret<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.appSecret ? "is-invalid" : ""
                    }`}
                    id="appSecret"
                    name="appSecret"
                    placeholder="Enter App Secret"
                    value={formData.appSecret}
                    onChange={handleInputChange}
                  />
                  {errors.appSecret && (
                    <small className="text-danger">{errors.appSecret}</small>
                  )}
                </div>
                <div className="mb-3">
                  <label for="accountName" className="form-label">
                    Account Name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.accountName ? "is-invalid" : ""
                    }`}
                    id="accountName"
                    name="accountName"
                    placeholder="Enter Account Name"
                    value={formData.accountName}
                    onChange={handleInputChange}
                  />
                  {errors.accountName && (
                    <small className="text-danger">{errors.accountName}</small>
                  )}
                </div>
              </div>
              <div className="modal-footer justify-content-center">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleManageUser}
                >
                    
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="edit"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Edit Account Access Token
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
                  <label for="" className="form-label">
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
                <div className="mb-3">
                  <label for="" className="form-label">
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
                <div className="mb-3">
                  <label for="" className="form-label">
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
                <div className="mb-3">
                  <label for="" className="form-label">
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
                <div className="mb-3">
                  <label for="" className="form-label">
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
              <div className="modal-footer justify-content-center">
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
      </div>
    </>
  );
};

export default ManageAdAccount;
