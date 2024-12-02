import React, { useState, useEffect, useRef } from "react";
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
  faAnglesRight 
} from "@fortawesome/free-solid-svg-icons";
import "select2/dist/css/select2.min.css"; // Import Select2 CSS
import "select2"; // Import Select2 JavaScript
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns"; // This helps format the date
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // Main CSS file
import "react-date-range/dist/theme/default.css"; // Theme CSS file
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import { z } from "zod";


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
  const [budget, setBudget] = useState("");
  const [error, setError] = useState("");
  // date picker
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());
  // const [isOpen, setIsOpen] = useState(false);

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // const calendarRef = useRef(null); // Reference for the calendar container

  // const handleRangeClick = () => {
  //   setIsCalendarOpen((prev) => !prev); // Toggle calendar open/close
  // };

  // // Close calendar when clicking outside
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (calendarRef.current && !calendarRef.current.contains(event.target)) {
  //       setIsCalendarOpen(false);
  //     }
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);

  const [tempState, setTempState] = useState(state); // Temporary state for date selection
  const calendarRef = useRef(null);

  const handleRangeClick = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const handleApply = () => {
    setState(tempState); // Update the main state with the temporary selection
    setIsCalendarOpen(false); // Close the calendar
  };

  const handleCancel = () => {
    setTempState(state); // Reset temporary state to the original state
    setIsCalendarOpen(false); // Close the calendar
  };

  // Close calendar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setIsCalendarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) { // Allow only numbers
      setBudget(value);
      setError(""); // Clear error while typing valid input
    }
  };

  const handleSave = (e) => {
    e.preventDefault();

    // Parse the budget as a number and validate using Zod
    const result = budgetSchema.safeParse({ budget: Number(budget) });

    if (!result.success) {
      setError(result.error.format().budget?._errors[0] || "Invalid input");
    } else {
      setError("");
      console.log("Budget saved:", budget);
      // Perform save operation or API call here
    }
  };


  // status toggle
  const [checkboxStates, setCheckboxStates] = useState({
    toggle1: false,
    toggle2: false,
    toggle3: false,
    toggle4: false,
    toggle5: false,
    toggle6: false,
    toggle7: false,
    toggle8: false,
    toggle9: false,
    toggle10: false,
    toggle11: false,
    toggle12: false,
    toggle13: false,
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

  // shimmer effect timer
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
        ordering: false,
      });
    }
  }, [loading]);

  useEffect(() => {
    if ($.fn.DataTable.isDataTable("#Trends")) {
      $("#Trends").DataTable().destroy();
    }

    // Simulate data loading
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    if (!loading) {
      $("#Trends").DataTable({
        scrollX: true,
        destroy: true, 
        bLengthChange: false, // Hides page length dropdown
        paging: false,        // Disables pagination
        searching: false,     // Disables the search bar
        ordering: false,
      });
    }
  }, [loading]); 

  // Date picker
  // Toggle the calendar
  // const handleToggleCalendar = () => {
  //   setIsOpen(!isOpen);
  // };

  // Close the calendar when clicking outside
  // const datePickerRef = useRef(null);
  // const handleClickOutside = (e) => {
  //   if (datePickerRef.current && !datePickerRef.current.contains(e.target)) {
  //     setIsOpen(false);
  //   }
  // };

  // Add event listener to detect clicks outside
  // React.useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row g-2">
          <div className="col-lg-auto  col-md-auto col-sm-auto my-auto me-auto">
            <h2 className="main_title m-0">Analytics</h2>
          </div>
          <div className="col-lg-auto  col-md-auto col-sm-auto">
            <select            
              name="select-label"
              className="form-control select_control"
            >
              <option value="Senora" defaultValue>
                Ad Account name
              </option>
              <option value="Senora">Account 1</option>
              <option value="Senora">Account 2</option>
              <option value="Senora">Account 3</option>
            </select>
          </div>
          <div className="col-lg-auto  col-md-auto col-sm-auto">
            <select
              
              className="form-control select_control"
              name="select-label"
            >
              <option value="Senora" defaultValue>
                Select Status
              </option>
              <option value="Senora">Pending</option>
              <option value="Senora">Completed</option>
              <option value="Senora">Approved</option>
            </select>
          </div>
          <div className="col-lg-auto  col-md-auto col-sm-auto">
            <div className="d-flex align-items-center">
              

              <div
                id="reportrange"
                className="daterange"
                onClick={handleRangeClick}
              >
                <FontAwesomeIcon icon={faCalendarDays} />
                &nbsp;
                <span>
                  {`${state[0].startDate.toDateString()} - ${state[0].endDate.toDateString()}`}
                </span>{" "}
                <FontAwesomeIcon icon={faAngleDown} />
              </div>

              {isCalendarOpen && (
                <div
                  className="calendar-container"
                  ref={calendarRef}
                  style={{
                    position: "absolute",
                    zIndex: 1000,
                    top: "45px",
                    left: "auto",
                    right: 0,
                  }}
                >
                  <DateRangePicker
                    ranges={tempState}
                    onChange={(item) => setTempState([item.selection])} // Update temporary state
                    showSelectionPreview={true}
                    moveRangeOnFirstSelection={false}
                    months={2} // Display two months at a time
                    direction="horizontal" // Layout to show months side by side
                    rangeColors={["#fff"]} // Custom color for the selected range
                  />
                  <div
                    className="button-container"
                    style={{ backgroundColor: "white" }}
                  >
                    <button
                      onClick={handleCancel}
                      className="btn btn-danger btn-cal"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleApply}
                      className="btn btn-primary btn-cal"
                      style={{ marginLeft: "10px" }}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              )}

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
                    <th>Ad Account</th>
                    <th>AD Name</th>
                    <th>Budget</th>
                    <th>Amount Spent</th>
                    <th>Amount Spent
                    (18% GST)</th>
                    <th>Current CPC</th>
                    <th> CPC</th>
                    <th>Revenue</th>
                    <th> P & L</th>
                    <th>ROI </th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    // Show shimmer rows when data is loading
                    [...Array(10)].map((_, index) => <ShimmerRow key={index} />)
                  ) : (
                    <>
                      <tr>
                        <td>1</td>
                        <td>Temuu2</td>
                        <td><button type="button"
                           className="btn "
                           style={{ backgroundColor: '#3abc2f', color: 'white' }}
                            data-bs-toggle="modal"
                            data-bs-target="#trends">boss386</button></td>
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
                        <td>
                        5948.20
                        </td>
                        <td>7018.88</td>
                        <td>0.37</td>
                        <td>0.34</td>
                        <td>13442.12	</td>
                        <td>+ 6423.24</td>
                        <td>1.92</td>

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
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Temuu2</td>
                        <td><button type="button"
                           className="btn "
                           style={{ backgroundColor: '#3abc2f', color: 'white' }}
                            data-bs-toggle="modal"
                            data-bs-target="#trends">boss386</button>
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
                        <td>
                        5948.20
                        </td>
                        <td>7018.88</td>
                        <td>0.37</td>
                        <td>0.34</td>
                        <td>13442.12	</td>
                        <td>+ 6423.24</td>
                        <td>1.92</td>

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
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Temuu3</td>
                        <td><button type="button"
                           className="btn "
                           style={{ backgroundColor: '#3abc2f', color: 'white' }}
                            data-bs-toggle="modal"
                            data-bs-target="#trends">boss386</button>
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
                        <td>
                        5948.20
                        </td>
                        <td>7018.88</td>
                        <td>0.37</td>
                        <td>0.34</td>
                        <td>13442.12	</td>
                        <td>+ 6423.24</td>
                        <td>1.92</td>

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
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Temuu4</td>
                        <td><button type="button"
                           className="btn "
                           style={{ backgroundColor: '#3abc2f', color: 'white' }}
                            data-bs-toggle="modal"
                            data-bs-target="#trends">boss386</button>
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
                        <td>
                        5948.20
                        </td>
                        <td>7018.88</td>
                        <td>0.37</td>
                        <td>0.34</td>
                        <td>13442.12	</td>
                        <td>+ 6423.24</td>
                        <td>1.92</td>

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
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Temuu5</td>
                        <td><button type="button"
                           className="btn "
                           style={{ backgroundColor: '#3abc2f', color: 'white' }}
                            data-bs-toggle="modal"
                            data-bs-target="#trends">boss386</button>
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
                        <td>
                        5948.20
                        </td>
                        <td>7018.88</td>
                        <td>0.37</td>
                        <td>0.34</td>
                        <td>13442.12	</td>
                        <td>+ 6423.24</td>
                        <td>1.92</td>

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
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Temuu6</td>
                        <td><button type="button"
                           className="btn "
                           style={{ backgroundColor: '#3abc2f', color: 'white' }}
                            data-bs-toggle="modal"
                            data-bs-target="#trends">boss386</button>
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
                        <td>
                        5948.20
                        </td>
                        <td>7018.88</td>
                        <td>0.37</td>
                        <td>0.34</td>
                        <td>13442.12	</td>
                        <td>+ 6423.24</td>
                        <td>1.92</td>

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
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>Temuu7</td>
                        <td><button type="button"
                           className="btn "
                           style={{ backgroundColor: '#3abc2f', color: 'white' }}
                            data-bs-toggle="modal"
                            data-bs-target="#trends">boss386</button>
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
                        <td>
                        5948.20
                        </td>
                        <td>7018.88</td>
                        <td>0.37</td>
                        <td>0.34</td>
                        <td>13442.12	</td>
                        <td>+ 6423.24</td>
                        <td>1.92</td>

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
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>Temuu8</td>
                        <td><button type="button"
                           className="btn "
                           style={{ backgroundColor: '#3abc2f', color: 'white' }}
                            data-bs-toggle="modal"
                            data-bs-target="#trends">boss386</button>
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
                        <td>
                        5948.20
                        </td>
                        <td>7018.88</td>
                        <td>0.37</td>
                        <td>0.34</td>
                        <td>13442.12	</td>
                        <td>+ 6423.24</td>
                        <td>1.92</td>

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
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>Temuu9</td>
                        <td><button type="button"
                           className="btn "
                           style={{ backgroundColor: '#3abc2f', color: 'white' }}
                            data-bs-toggle="modal"
                            data-bs-target="#trends">boss386</button>
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
                        <td>
                        5948.20
                        </td>
                        <td>7018.88</td>
                        <td>0.37</td>
                        <td>0.34</td>
                        <td>13442.12	</td>
                        <td>+ 6423.24</td>
                        <td>1.92</td>

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
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>Temuu10</td>
                        <td><button type="button"
                           className="btn "
                           style={{ backgroundColor: '#3abc2f', color: 'white' }}
                            data-bs-toggle="modal"
                            data-bs-target="#trends">boss386</button>
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
                        <td>
                        5948.20
                        </td>
                        <td>7018.88</td>
                        <td>0.37</td>
                        <td>0.34</td>
                        <td>13442.12	</td>
                        <td>+ 6423.24</td>
                        <td>1.92</td>

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
                      </tr>
                      <tr>
                        <td>11</td>
                        <td>Temuu11</td>
                        <td><button type="button"
                           className="btn "
                           style={{ backgroundColor: '#3abc2f', color: 'white' }}
                            data-bs-toggle="modal"
                            data-bs-target="#trends">boss386</button>
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
                        <td>
                        5948.20
                        </td>
                        <td>7018.88</td>
                        <td>0.37</td>
                        <td>0.34</td>
                        <td>13442.12	</td>
                        <td>+ 6423.24</td>
                        <td>1.92</td>

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
                      </tr>
                      <tr>
                        <td>12</td>
                        <td>Temuu12</td>
                        <td><button type="button"
                           className="btn "
                           style={{ backgroundColor: '#3abc2f', color: 'white' }}
                            data-bs-toggle="modal"
                            data-bs-target="#trends">boss386</button>
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
                        <td>
                        5948.20
                        </td>
                        <td>7018.88</td>
                        <td>0.37</td>
                        <td>0.34</td>
                        <td>13442.12	</td>
                        <td>+ 6423.24</td>
                        <td>1.92</td>

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
                      </tr>
                      <tr>
                        <td>13</td>
                        <td>Temuu13</td>
                        <td><button type="button"
                           className="btn "
                           style={{ backgroundColor: '#3abc2f', color: 'white' }}
                            data-bs-toggle="modal"
                            data-bs-target="#trends">boss386</button>
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
                        <td>
                        5948.20
                        </td>
                        <td>7018.88</td>
                        <td>0.37</td>
                        <td>0.34</td>
                        <td>13442.12	</td>
                        <td>+ 6423.24</td>
                        <td>1.92</td>

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
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>


        {/* modal for edit budget  */}
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
                  Edit Budget
                </h1>
                <button
                  type="submit"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="" className="form-label"></label>
                  <input
                type="text"
                className={`form-control ${error ? "is-invalid" : ""}`}
                id="budget"
                value={budget}
                onChange={handleChange}
              />
                  {error && <div className="invalid-feedback">{error} </div>}
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
                <button type="submit" className="btn btn-primary"  onClick={handleSave}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
          

          {/* modal for trends  */}
        <div>
        <div className="modal fade" id="trends" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-xl">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel"> <b>7 days trends</b> </h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <ul className="ad_acc">
          <li><FontAwesomeIcon icon={faAnglesRight} /> <b>Ad Account :</b>  Google </li>
          <li><FontAwesomeIcon icon={faAnglesRight} /> <b>Ad Name :</b> Video </li>
          <li><FontAwesomeIcon icon={faAnglesRight} /> <b>Current CPC :</b> Video</li>
          <li>
            <FontAwesomeIcon icon={faAnglesRight} /> <b>Current Budget :</b>
            <span>
              <span className="badge text-bg-info">5</span>
              <button type="button" className="btn btn-primary small_bt" data-bs-toggle="modal" data-bs-target="#buget">
              <FontAwesomeIcon icon={faPenToSquare} />
              </button>
            </span>
          </li>
          <li>
            <FontAwesomeIcon icon={faAnglesRight} /> <b>Status :</b>
            <span>
              <div className="toggle" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                <input type="checkbox" />
                <label></label>
              </div>
            </span>
          </li>
        </ul>
        <div className="daye_sevan_rs">
          <table id="Trends" className="table table-striped data-table-dr1"  style={{ width: '100%' }}>
            <thead>
              <tr>
                <th></th>
                <th>Total</th>
                <th>9th Nov </th>
                <th>10th Nov  </th>
                <th>11th Nov   </th>
                <th>12th Nov  </th>
                <th>13th Nov </th>
                <th>14th Nov </th>
                <th>15th Nov </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ROI</td>
                <td>Average ROI</td>
                <td>-</td>
                <td>- </td>
                <td>1200</td>
                <td>1250</td>
                <td>1350</td>
                <td>4000</td>
                <td>4500 </td>
              </tr>
              <tr>
                <td>Amount Spend </td>
                <td>Total Amount Spend</td>
                <td>-</td>
                <td>- </td>
                <td>1200</td>
                <td>1250</td>
                <td>1350</td>
                <td>4000</td>
                <td>4500 </td>
              </tr>
              <tr>
                <td>CPC </td>
                <td>Average CPC</td>
                <td>-</td>
                <td>- </td>
                <td>1200</td>
                <td>1250</td>
                <td>1350</td>
                <td>4000</td>
                <td>4500 </td>
              </tr>
              <tr>
                <td>Revenue </td>
                <td>Total Revenue</td>
                <td>-</td>
                <td>- </td>
                <td>1200</td>
                <td>1250</td>
                <td>1350</td>
                <td>4000</td>
                <td>4500 </td>
              </tr>
              <tr>
                <td>P&L </td>
                <td>Total P&L</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>



      </div>
    </>
  );
};

export default Analytics;
