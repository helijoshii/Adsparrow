// import React, { useState } from 'react';
// import { DateRangePicker } from 'react-date-range';
// import { addDays, startOfMonth, endOfMonth, startOfMonth as startOfLastMonth, endOfMonth as endOfLastMonth, subDays, startOfToday, endOfToday, startOfYesterday, endOfYesterday } from 'date-fns';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarDays, faAngleDown } from '@fortawesome/free-solid-svg-icons';
// import 'react-date-range/dist/styles.css'; // Main CSS file
// import 'react-date-range/dist/theme/default.css'; // Theme CSS file

// const Temp = () => {
//   const [isCalendarOpen, setIsCalendarOpen] = useState(false);
//   // const [state, setState] = useState({
//   //   startDate: startOfMonth(new Date()), 
//   //   endDate: endOfMonth(new Date()), 
//   //   key: 'selection',
//   // });
//   const [state, setState] = useState([
//     {
//       startDate: new Date(),
//       endDate: new Date(),
//       key: 'selection',
//     },
//   ]);
//   const [selectedRange, setSelectedRange] = useState('This Month');

//   const predefinedRanges = [
//     // { label: 'Today', range: () => ({ startDate: new Date(), endDate: new Date() }) },
//     // { label: 'Yesterday', range: () => ({ startDate: subDays(new Date(), 1), endDate: subDays(new Date(), 1) }) },
//     // { label: 'Last 7 Days', range: () => ({ startDate: subDays(new Date(), 6), endDate: new Date() }) },
//     // { label: 'Last 30 Days', range: () => ({ startDate: subDays(new Date(), 29), endDate: new Date() }) },
//     // { label: 'This Month', range: () => ({ startDate: startOfMonth(new Date()), endDate: endOfMonth(new Date()) }) },
//     // { label: 'Last Month', range: () => ({ startDate: startOfMonth(subDays(new Date(), 30)), endDate: endOfMonth(subDays(new Date(), 30)) }) },
//     {
//       label: 'Custom Range',
//       range: () => ([{ startDate: state[0].startDate, endDate: state[0].endDate, key: 'selection' }]),
//     },
//     // { label: 'Custom Range', range: () => ({ startDate: state.startDate, endDate: state.endDate }) }
//   ];

//   const handleRangeClick = (range) => {
//     setState(range.range());
//     setSelectedRange(range.label);
//     setIsCalendarOpen(range.label === 'Custom Range');
//   };

//   return (
//     <div>
//        <div>
//       <div
//         id="reportrange"
//         className="daterange"
//         onClick={() => setIsCalendarOpen(!isCalendarOpen)}
//       >
//         <FontAwesomeIcon icon={faCalendarDays} />
//         &nbsp;
//         <span>
//           {`${state[0].startDate.toDateString()} - ${state[0].endDate.toDateString()}`}
//         </span>{" "}
//         <FontAwesomeIcon icon={faAngleDown} />
//       </div>

//       {isCalendarOpen && (
//         <div className="calendar-container">
//           {!['Custom Range'].includes(selectedRange) && (
//             <div className="predefined-ranges">
//               {predefinedRanges.map((range) => (
//                 <div
//                   key={range.label}
//                   onClick={() => handleRangeClick(range)}
//                   className={`predefined-range ${selectedRange === range.label ? 'selected' : ''}`}
//                 >
//                   {range.label}
//                 </div>
//               ))}
//             </div>
//           )}

//           {selectedRange === 'Custom Range' && (
//             <DateRangePicker
//               ranges={state}
//               onChange={(item) => setState([item.selection])}
//               showSelectionPreview={true}
//               moveRangeOnFirstSelection={false}
//               months={2} // Display two months at a time
//               direction="horizontal" // Layout to show months side by side
//               rangeColors={['#3d91ff']} // Custom color for the selected range
//             />
//           )}
//         </div>
//       )}
//     </div>
//     </div>
//   );
// };

// export default Temp;


import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import 'react-date-range/dist/styles.css'; // Main CSS file
import 'react-date-range/dist/theme/default.css'; // Theme CSS file

const Temp = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const handleRangeClick = () => {
    // Open the calendar directly when the date range is clicked
    setIsCalendarOpen(true);
  };

  return (
    <div>
      <div>
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
          <div className="calendar-container">
            <DateRangePicker
              ranges={state}
              onChange={(item) => setState([item.selection])}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              months={2} // Display two months at a time
              direction="horizontal" // Layout to show months side by side
              rangeColors={['#fff']} // Custom color for the selected range
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Temp;




















// import React, { useState, useRef, useEffect } from 'react';
// import { DateRangePicker } from 'react-date-range';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarDays, faAngleDown } from '@fortawesome/free-solid-svg-icons';
// import 'react-date-range/dist/styles.css'; // Main CSS file
// import 'react-date-range/dist/theme/default.css'; // Theme CSS file

// const Temp = () => {
//   const [state, setState] = useState([
//     {
//       startDate: new Date(),
//       endDate: new Date(),
//       key: 'selection',
//     },
//   ]);
//   const [isCalendarOpen, setIsCalendarOpen] = useState(false);
//   const calendarRef = useRef(null);

//   // Close calendar when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (calendarRef.current && !calendarRef.current.contains(event.target)) {
//         setIsCalendarOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div>
//       <div>
//         <div
//           id="reportrange"
//           className="daterange"
//           onClick={() => setIsCalendarOpen(!isCalendarOpen)}
//         >
//           <FontAwesomeIcon icon={faCalendarDays} />
//           &nbsp;
//           <span>
//             {`${state[0].startDate.toDateString()} - ${state[0].endDate.toDateString()}`}
//           </span>{" "}
//           <FontAwesomeIcon icon={faAngleDown} />
//         </div>

//         {isCalendarOpen && (
//           <div className="calendar-container" ref={calendarRef}>
//             <DateRangePicker
//               ranges={state}
//               onChange={(item) => setState([item.selection])}
//               showSelectionPreview={true}
//               moveRangeOnFirstSelection={false}
//               months={2} // Display two months at a time
//               direction="horizontal" // Layout to show months side by side
//               rangeColors={['#3d91ff']} // Custom color for the selected range
//               staticRanges={[]} // Do not display static ranges
//               inputRanges={[]} // Do not display input ranges
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Temp;
