import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns"; // This helps format the date

const Temp = () => {
  const [startDate, setStartDate] = useState(new Date("2024/09/12"));
  const [endDate, setEndDate] = useState(new Date("2024/09/15"));
  const [isOpen, setIsOpen] = useState(false);

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
      <div
        id="reportrange"
        className="daterange"
        onClick={handleToggleCalendar}
        style={{ cursor: "pointer", display: "inline-block" }}
      >
        <FontAwesomeIcon icon={faCalendarDays} />
        &nbsp;
        <span>
          {format(startDate, "MMMM dd, yyyy")} - {format(endDate || startDate, "MMMM dd, yyyy")}
        </span>{" "}
        <FontAwesomeIcon icon={faAngleDown} />
      </div>

      {isOpen && (
        <div ref={datePickerRef} style={{ position: "absolute", zIndex: 1000 }}>
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
    </div>
  );
};

export default Temp;
