import React, { useState, useEffect } from "react";
import $ from "jquery";
import "datatables.net-bs5";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faCalendarDays,
  faClock,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";
const MySwal = withReactContent(Swal);
import { z } from "zod";

// Shimmer loader component
const ShimmerRow = () => (
  <tr>
    {[...Array(7)].map((_, index) => (
      <td key={index}>
        <div className="shimmer-line"></div>
      </td>
    ))}
  </tr>
);

const ManageUser = () => {
  const [loading, setLoading] = useState(true);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  

  const [checkboxStates, setCheckboxStates] = useState({
    toggle1: false,
    toggle2: false,
    toggle3: false, // Add more toggles as needed
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
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

  const handleManageUser = async () => {
    console.log(inputs);
    try {
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
      const res = await axios.post(`${API_BASE_URL}/manageuser/`, inputs);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Destroy the DataTable if it is already initialized
    if ($.fn.DataTable.isDataTable("#Manage_User")) {
      $("#Manage_User").DataTable().destroy();
    }

    // Simulate data loading
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate loading delay

    // Once data is loaded, initialize DataTable
    if (!loading) {
      $("#Manage_User").DataTable({
        scrollX: true,
        destroy: true, // Ensure old table is destroyed before reinitializing
        ordering: false,
        lengthMenu: [[100, 200, 300, 400], [100, 200, 300, 400]], // Set custom page length options
      });
    }
  }, [loading]);

  return (
    <>
      <div className="container-fluid">
        <div className="row g-2">
          <div className="col-lg-auto  col-md-auto col-sm-auto my-auto me-auto">
            <h2 className="main_title m-0">Manage User</h2>
          </div>

          <div className="col-lg-auto  col-md-auto col-sm-auto col-auto ms-auto">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#add_user"
            >
              <FontAwesomeIcon icon={faPlus} className="me-2" /> Add User
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="white_table">
              <table
                id="Manage_User"
                className="table table-striped data-table-dr"
                style={{ width: "100%" }}
              >
                <thead>
                  <tr>
                    <th>Sr No</th>
                    <th>Action</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Premium access</th>
                    <th>Status</th>
                    <th>Date And Time</th>
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
                        <td>Jayesh</td>
                        <td>abc@gmail.com</td>
                        <td>1234567890</td>
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
                              id="toggle1"
                              checked={checkboxStates.toggle1}
                              onChange={handleCheckboxChange("toggle1")}
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
                        <td>Rajesh</td>
                        <td>xyz@gmail.com</td>
                        <td>1234567890</td>

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
        <div
          className="modal fade"
          id="add_user"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Add User
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
                  <label htmlFor="" className="form-label">
                    Name<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    placeholder="Enter Name"
                    name="name"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Email<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    placeholder="Enter Email"
                    name="email"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Password<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id=""
                    name="password"
                    placeholder="Enter Password"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="modal-footer justify-content-center">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleManageUser}
                >
                  Save
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
                  Edit User
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
                  <label htmlFor="" className="form-label">
                    Name<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    placeholder="Enter Name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Email<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    placeholder="Enter Email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Password<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    placeholder="Enter Password"
                  />
                </div>
              </div>
              <div className="modal-footer justify-content-center">
                <button type="button" className="btn btn-primary">
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

export default ManageUser;
