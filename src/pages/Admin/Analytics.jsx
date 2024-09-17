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
} from "@fortawesome/free-solid-svg-icons";
import 'select2/dist/css/select2.min.css'; // Import Select2 CSS
import 'select2'; // Import Select2 JavaScript
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns"; // This helps format the date
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);


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
  // date picker 
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  
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
      });
    }
  }, [loading]); 

  // Date picker 
  // Toggle the calendar
    const handleToggleCalendar = () => {
      setIsOpen(!isOpen);
    };
  
    // Close the calendar when clicking outside
    const datePickerRef = useRef(null);
    const handleClickOutside = (e) => {
      if (datePickerRef.current && !datePickerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
  
    // Add event listener to detect clicks outside
    React.useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  
    const handleDateChange = (dates) => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
    };
  
    // Handle the "Today" button click
    const handleTodayClick = () => {
      const today = new Date();
      setStartDate(today);
      setEndDate(today);
      setIsOpen(false); // Optionally close the calendar after selecting today
    };

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
              {/* <div id="reportrange" className="daterange">
                <FontAwesomeIcon icon={faCalendarDays} />
                &nbsp;
                <span>January 11, 2024 - February 9, 2024</span>{" "}
                <FontAwesomeIcon icon={faAngleDown} />
              </div> */}
              <div
        id="reportrange"
        className="daterange"
        onClick={handleToggleCalendar}
        style={{ cursor: "pointer", display: "inline-block", position: "relative" }}
      >
        <FontAwesomeIcon icon={faCalendarDays} />
        &nbsp;
        <span>
          {format(startDate, "MMMM dd, yyyy")} - {format(endDate || startDate, "MMMM dd, yyyy")}
        </span>{" "}
        <FontAwesomeIcon icon={faAngleDown} />
      </div>

      {isOpen && (
        <div ref={datePickerRef} style={{ position: "absolute", zIndex: 1000, top: '100%' }}>
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
            renderCustomHeader={({
              monthDate,
              customHeaderCount,
              decreaseMonth,
              increaseMonth,
            }) => (
              <div>
                <button className="cal-btn" onClick={decreaseMonth}>{"<"}</button>
                <span>{format(monthDate, "MMMM yyyy")}</span>
                <button className="cal-btn" onClick={increaseMonth}>{">"}</button>
              </div>
            )}
            renderDayContents={(day, date) => <span>{day}</span>}
            // Adding today button in calendar footer
            calendarContainer={({ className, children }) => (
              <div className={className}>
                {children}
                <div style={{ textAlign: "center", padding: "10px 0" }}>
                  <button
                    style={{
                      background: "#cf2027",
                      color: "#fff",
                      border: "none",
                      padding: "5px 10px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={handleTodayClick}
                  >
                    Today
                  </button>
                </div>
              </div>
            )}
          />
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
                    <th>Campaign Name</th>
                    <th>AD Sets</th>
                    <th>AD Name</th>
                    <th>Budget</th>
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
                    [...Array(10)].map((_, index) => <ShimmerRow key={index} />)
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
                            <input
                              type="checkbox"
                              className="phase-class"
                              id="toggle1"
                              checked={checkboxStates.toggle1}
                              onChange={handleCheckboxChange('toggle1')}
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
                            <input
                              type="checkbox"
                              className="phase-class"
                              id="toggle2"
                              checked={checkboxStates.toggle2}
                              onChange={handleCheckboxChange('toggle2')}
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
                            <input
                              type="checkbox"
                              className="phase-class"
                              id="toggle3"
                              checked={checkboxStates.toggle3}
                              onChange={handleCheckboxChange('toggle3')}
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
                        <td>4</td>
                        <td>Jayesh</td>
                        <td>Ram</td>
                        <td>
                          <span className="Inactive">Twitter</span>
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
                        <td>25,000</td>
                        <td>4000</td>
                        <td>900</td>
                        <td>20</td>
                        <td>30</td>

                        <td>
                          <div className="toggle">
                            <input
                              type="checkbox"
                              className="phase-class"
                              id="toggle4"
                              checked={checkboxStates.toggle4}
                              onChange={handleCheckboxChange('toggle4')}
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
                        <td>5</td>
                        <td>Suresh</td>
                        <td>Ram</td>
                        <td>
                          <span className="Inactive">Amazon</span>
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
                        <td>2,000</td>
                        <td>900</td>
                        <td>2000</td>
                        <td>26</td>
                        <td>38</td>

                        <td>
                        <div className="toggle">
                            <input
                              type="checkbox"
                              className="phase-class"
                              id="toggle5"
                              checked={checkboxStates.toggle5}
                              onChange={handleCheckboxChange('toggle5')}
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
                        <td>6</td>
                        <td>Rajesh</td>
                        <td>Ram</td>

                        <td>
                          <span className="Review_Pending">Zomato</span>
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
                            <input
                              type="checkbox"
                              className="phase-class"
                              id="toggle6"
                              checked={checkboxStates.toggle6}
                              onChange={handleCheckboxChange('toggle6')}
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
                        <td>7</td>
                        <td>Jayesh</td>
                        <td>Ram</td>
                        <td>
                          <span className="Inactive">Linkedin</span>
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
                        <td>25,000</td>
                        <td>4000</td>
                        <td>900</td>
                        <td>20</td>
                        <td>30</td>

                        <td>
                          <div className="toggle">
                            <input
                              type="checkbox"
                              className="phase-class"
                              id="toggle7"
                              checked={checkboxStates.toggle7}
                              onChange={handleCheckboxChange('toggle7')}
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
                        <td>8</td>
                        <td>Suresh</td>
                        <td>Ram</td>
                        <td>
                          <span className="Active">Snapchat</span>
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
                        <td>2,000</td>
                        <td>900</td>
                        <td>2000</td>
                        <td>26</td>
                        <td>38</td>

                        <td>
                        <div className="toggle">
                            <input
                              type="checkbox"
                              className="phase-class"
                              id="toggle8"
                              checked={checkboxStates.toggle8}
                              onChange={handleCheckboxChange('toggle8')}
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
                        <td>9</td>
                        <td>Rajesh</td>
                        <td>Shyam</td>

                        <td>
                          <span className="Active">Aloha</span>
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
                            <input
                              type="checkbox"
                              className="phase-class"
                              id="toggle9"
                              checked={checkboxStates.toggle9}
                              onChange={handleCheckboxChange('toggle9')}
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
                        <td>10</td>
                        <td>Rajesh</td>
                        <td>Ram</td>

                        <td>
                          <span className="Review_Pending">Instamart</span>
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
                            <input
                              type="checkbox"
                              className="phase-class"
                              id="toggle10"
                              checked={checkboxStates.toggle10}
                              onChange={handleCheckboxChange('toggle10')}
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
                        <td>11</td>
                        <td>Jayesh</td>
                        <td>Ram</td>
                        <td>
                          <span className="Active">Blinkit</span>
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
                        <td>25,000</td>
                        <td>4000</td>
                        <td>900</td>
                        <td>20</td>
                        <td>30</td>

                        <td>
                          <div className="toggle">
                            <input
                              type="checkbox"
                              className="phase-class"
                              id="toggle11"
                              checked={checkboxStates.toggle11}
                              onChange={handleCheckboxChange('toggle11')}
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
                        <td>12</td>
                        <td>Suresh</td>
                        <td>Ram</td>
                        <td>
                          <span className="Inactive">Swiggy</span>
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
                        <td>2,000</td>
                        <td>900</td>
                        <td>2000</td>
                        <td>26</td>
                        <td>38</td>

                        <td>
                        <div className="toggle">
                            <input
                              type="checkbox"
                              className="phase-class"
                              id="toggle12"
                              checked={checkboxStates.toggle12}
                              onChange={handleCheckboxChange('toggle12')}
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
                        <td>13</td>
                        <td>Rajesh</td>
                        <td>Shyam</td>

                        <td>
                          <span className="Review_Pending">Goldman</span>
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
                            <input
                              type="checkbox"
                              className="phase-class"
                              id="toggle13"
                              checked={checkboxStates.toggle13}
                              onChange={handleCheckboxChange('toggle13')}
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
