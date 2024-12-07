import { useState, useEffect } from "react";
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
import { addUserSchema } from "../../utils/validationSchemas";
import { errorToast } from "../../utils/helper";
const MySwal = withReactContent(Swal);

const ShimmerRow = () => (
  <tr>
    {[...Array(8)].map((_, index) => (
      <td key={index}>
        <div className="shimmer-line"></div>
      </td>
    ))}
  </tr>
);

const ManageUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  
  const [checkboxStates, setCheckboxStates] = useState({
    toggle1: false,
    toggle2: false,
    toggle3: false,
  });
  const token = localStorage.getItem("token");
  const handleCheckboxChange = (id) => (event) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      checked(id);
    } else {
      unChecked(id);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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

  // const handleAddUser = async (data) => {
  //   console.log("Form Data:", data);

  //   // Retrieve the token from local storage
  //   const token = localStorage.getItem("token");

  //   try {
  //     const response = await axios.post(
  //       `http://devadsparrowapi.bdccoder.in/api/manageuser/`,
  //       data,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`, // Pass token in Authorization header
  //           "Content-Type": "application/json", // Optional, specifies the type of data being sent
  //         },
  //       }
  //     );

  //     // Handle the response if needed
  //     console.log("API Response:", response.data);
  //   } catch (error) {
  //     console.error("API Error:", error);
  //     errorToast(error.message); // Display error notification
  //   }
  // };

  const handleManageUser = () => {
    const result = addUserSchema.safeParse(formData);
    if (result.success) {
      handleAddUser(result.data);
      setErrors({});
    } else {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors(fieldErrors);
    }
  };

  // Fetch users on component load
  const fetchUsers = async () => {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // Ensure this is set correctly in your .env file
    try {
      const response = await axios.get(`${API_BASE_URL}/manageuser/`, {
        headers: {
          Authorization: `Token ${token}`,
          Accept: "application/json",
        },
      });

      // setUsers(response.data.results.data);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false); // Set loading to false once data is fetched
    }
  };

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  // Add user
  const handleAddUser = async () => {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `${API_BASE_URL}/manageuser/`,
        formData,
        { headers: { Authorization: `Token ${token}` } }
      );
      if (response.status === 201) {
        setUsers((prevUsers) => [...prevUsers, response.data]);
        setFormData({ email: "", password: "", name: "" });
        alert("User added successfully!");
      }
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  // Update user
  const handleUpdateUser = async (userId) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.put(
        `http://devadsparrowapi.bdccoder.in/api/manageuser/${userId}`,
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.user_id === userId ? { ...user, ...response.data } : user
        )
      );
      alert("User updated successfully!");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  useEffect(() => {
    if (!loading) {
      // Destroy previous DataTable if it exists
      if ($.fn.DataTable.isDataTable("#Manage_User")) {
        $("#Manage_User").DataTable().destroy();
      }

      // Initialize DataTable
      $("#Manage_User").DataTable({
        scrollX: true,
        destroy: true,
        ordering: false,
        lengthMenu: [
          [100, 200, 300, 400],
          [100, 200, 300, 400],
        ],
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
                    <th>Premium Access</th>
                    <th>Status</th>
                    <th>Date And Time</th>
                  </tr>
                </thead>
                <tbody>
                  {loading
                    ? // Shimmer loader for 2 rows while loading
                      [...Array(2)].map((_, index) => (
                        <tr key={index}>
                          <td colSpan="8" className="text-center">
                            Loading...
                          </td>
                        </tr>
                      ))
                    : users?.results?.data?.map((user, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
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
                          <td>{user.name || "N/A"}</td>
                          <td>{user.email || "N/A"}</td>
                          <td>
                            {
                              "N/A" /* Replace with actual password if available */
                            }
                          </td>
                          <td>
                            <div className="toggle">
                              <input
                                type="checkbox"
                                className="phase-className"
                                id={`premium-${index}`}
                                checked={!!user.premium_access}
                                onChange={() =>
                                  console.log(
                                    "Toggle Premium Access for:",
                                    user.user_id
                                  )
                                }
                              />
                              <label htmlFor={`premium-${index}`}></label>
                            </div>
                          </td>
                          <td>
                            <div className="toggle">
                              <input
                                type="checkbox"
                                className="phase-className"
                                id={`status-${index}`}
                                checked={!!user.status}
                                onChange={() =>
                                  console.log(
                                    "Toggle Status for:",
                                    user.user_id
                                  )
                                }
                              />
                              <label htmlFor={`status-${index}`}></label>
                            </div>
                          </td>
                          <td>
                            <p className="mb-0">
                              <span className="d-flex justify-content-center align-items-center">
                                <FontAwesomeIcon
                                  icon={faCalendarDays}
                                  className="me-2"
                                />
                                {user.date || "N/A"}
                                <br />
                              </span>
                              <span className="d-flex justify-content-center align-items-center time_span">
                                <FontAwesomeIcon
                                  icon={faClock}
                                  className="me-2"
                                />
                                {user.time || "N/A"}
                              </span>
                            </p>
                          </td>
                        </tr>
                      ))}

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
                  <label htmlFor="name" className="form-label">
                    Name<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    id="edit-name"
                    placeholder="Enter Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  {errors.name && (
                    <small className="text-danger">{errors.name}</small>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    id="edit-email"
                    placeholder="Enter Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && (
                    <small className="text-danger">{errors.email}</small>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="password"
                    className={`form-control ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    id="edit-password"
                    name="password"
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  {errors.password && (
                    <small className="text-danger">{errors.password}</small>
                  )}
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
                  <label htmlFor="name" className="form-label">
                    Name<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    id="edit-name"
                    placeholder="Enter Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  {errors.name && (
                    <small className="text-danger">{errors.name}</small>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    id="edit-email"
                    placeholder="Enter Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && (
                    <small className="text-danger">{errors.email}</small>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="password"
                    className={`form-control ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    id="edit-password"
                    name="password"
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  {errors.password && (
                    <small className="text-danger">{errors.password}</small>
                  )}
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