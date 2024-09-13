import React, { useEffect, useState } from 'react';
import $ from 'jquery'; // jQuery will be globally available
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const Temp = () => {
  const [isChecked, setIsChecked] = useState(false);

 const checked = () => {
    MySwal.fire({
      title: <p>Are you sure?</p>,
      text: "Do you want to activate your status?",
      icon: "success",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        // Handle the confirmed action here
        setIsChecked(true);
      } else {
        // Revert the checkbox state if not confirmed
        setIsChecked(false);
      }
    });
  };

  const unChecked = () => {
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
        // Handle the confirmed action here
        setIsChecked(false);
      } else {
        // Revert the checkbox state if not confirmed
        setIsChecked(true);
      }
    });
  };

  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      checked();
    } else {
      unChecked();
    }
  };
  return (
    <div>
      {/* <button onClick={checked}>Show Alert</button>
      <button onClick={unChecked}>Show Close</button> */}

      <div className="toggle">
      <input
        type="checkbox"
        className="phase-class"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label></label>
    </div>
    </div>
  );
};

export default Temp;
