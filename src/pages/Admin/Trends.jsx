import { useState, useEffect, useRef } from "react";
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
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { z } from "zod";

const Trends = () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const [loading, setLoading] = useState(true);

    const handleTabClick = (tabId) => {
        setActiveTab(tabId); // Set active tab when a tab is clicked
      }; 
      useEffect(() => {
        if ($.fn.DataTable.isDataTable("#ROI_data_table")) {
          $("#ROI_data_table").DataTable().destroy();
        }
    
        // Simulate data loading
        setTimeout(() => {
          setLoading(false);
        }, 1000);
    
        if (!loading) {
          $("#ROI_data_table").DataTable({
            scrollX: true,
            destroy: true, 
            ordering: false,
          });
        }
      }, [loading]); 
      useEffect(() => {
        if ($.fn.DataTable.isDataTable("#Amount_data_table")) {
          $("#Amount_data_table").DataTable().destroy();
        }
    
        // Simulate data loading
        setTimeout(() => {
          setLoading(false);
        }, 1000);
    
        if (!loading) {
          $("#Amount_data_table").DataTable({
            scrollX: true,
            destroy: true, 
            ordering: false,
          });
        }
      }, [loading]); 
      useEffect(() => {
        if ($.fn.DataTable.isDataTable("#Revenue_data_table")) {
          $("#Revenue_data_table").DataTable().destroy();
        }
    
        // Simulate data loading
        setTimeout(() => {
          setLoading(false);
        }, 1000);
    
        if (!loading) {
          $("#Revenue_data_table").DataTable({
            scrollX: true,
            destroy: true, 
            ordering: false,
          });
        }
      }, [loading]); 
      useEffect(() => {
        if ($.fn.DataTable.isDataTable("#PL_data_table")) {
          $("#PL_data_table").DataTable().destroy();
        }
    
        // Simulate data loading
        setTimeout(() => {
          setLoading(false);
        }, 1000);
    
        if (!loading) {
          $("#PL_data_table").DataTable({
            scrollX: true,
            destroy: true, 
            ordering: false,
          });
        }
      }, [loading]); 
      useEffect(() => {
        if ($.fn.DataTable.isDataTable("#CPC_data_table")) {
          $("#CPC_data_table").DataTable().destroy();
        }
    
        // Simulate data loading
        setTimeout(() => {
          setLoading(false);
        }, 1000);
    
        if (!loading) {
          $("#CPC_data_table").DataTable({
            scrollX: true,
            destroy: true, 
            ordering: false,
          });
        }
      }, [loading]); 

      
  return (
    <>
      <div>
        <div class="container-fluid">
          <div class="row g-2">
            <div class="col-lg-auto  col-md-auto col-sm-auto my-auto me-auto">
              <h2 class="main_title m-0">Trends</h2>
            </div>
            <div class="col-lg-auto  col-md-auto col-sm-auto">
              <select
                class="select2 js-example-basic-single select-label form-control w-100"
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
            <div class="col-lg-auto  col-md-auto col-sm-auto">
              <select
                class="select2 js-example-basic-single select-label form-control w-100"
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
            <div class="col-lg-auto  col-md-auto col-sm-auto">
              <div class="d-flex align-items-center">
                <div id="reportrange" class="daterange none_disabled">
                  <FontAwesomeIcon icon={faCalendarDays} />
                  &nbsp;
                  <span>November 9, 2025 - November 15, 2025</span>{" "}
                  <i class="fa fa-caret-down"></i>
                </div>
                <a href="#" class="btn btn-primary ms-2">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </a>
                <a href="#" class="btn btn-danger ms-2">
                  <FontAwesomeIcon icon={faXmark} />
                </a>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <div class="white_table">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="amount_spend">
                      <ul class="tabs">
                        <li className={activeTab === 'tab1' ? 'current' : ''}
          onClick={() => handleTabClick('tab1')}>
                          <span>
                          <svg
                              id="Layer_2"
                              data-name="Layer 2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 296.79 268.68"
                            >
                              <g id="Layer_1-2" data-name="Layer 1">
                                <path
                                  class="cls-1"
                                  d="M148.4,0C77.5,0,19.38,55.07,14.43,124.72l-2.45-2.45c-2.81-2.71-7.29-2.64-10,.17-2.65,2.74-2.65,7.08,0,9.82l14.14,14.14c2.76,2.76,7.23,2.76,9.99,0,0,0,0,0,0,0l14.14-14.14c2.71-2.81,2.63-7.29-.17-10-2.74-2.65-7.08-2.65-9.82,0l-1.61,1.61C33.98,62.43,85.58,14.14,148.4,14.14c3.91,0,7.07-3.17,7.07-7.07s-3.17-7.07-7.07-7.07ZM148.4,42.42c-50.73,0-91.92,41.19-91.92,91.92s41.19,91.92,91.92,91.92,91.92-41.19,91.92-91.92-41.19-91.92-91.92-91.92ZM148.4,56.57c42.93,0,77.78,34.85,77.78,77.78s-34.85,77.78-77.78,77.78-77.78-34.85-77.78-77.78,34.85-77.78,77.78-77.78ZM148.4,77.76c-3.9,0-7.07,3.17-7.07,7.08v9.56c-12.04,1.21-21.2,11.34-21.2,23.43h0c0,13.02,10.53,23.57,23.53,23.57h9.47c5.2,0,9.42,4.21,9.42,9.42v.03c0,5.19-4.21,9.4-9.4,9.4,0,0,0,0-.01,0h-4.38c-.24-.01-.48-.01-.72,0h-20.84c-3.91,0-7.08,3.17-7.08,7.08s3.17,7.08,7.08,7.08h14.13v9.42c0,3.91,3.17,7.07,7.07,7.07s7.07-3.17,7.07-7.07v-9.55c12.04-1.2,21.22-11.33,21.23-23.43v-.03c0-13.01-10.55-23.56-23.56-23.56h-9.46c-5.19,0-9.4-4.21-9.4-9.4,0,0,0,0,0-.01h0c0-5.21,4.2-9.42,9.39-9.43,0,0,0,0,.01,0h25.95c3.91,0,7.07-3.17,7.07-7.07s-3.17-7.07-7.07-7.07h-14.16v-9.43c0-3.91-3.17-7.08-7.07-7.08ZM275.67,120.2c-1.88,0-3.68.74-5,2.07l-14.14,14.14c-2.71,2.81-2.64,7.28.17,10,2.74,2.65,7.08,2.65,9.82,0l1.59-1.59c-5.32,61.44-56.91,109.72-119.72,109.72-3.9,0-7.07,3.17-7.07,7.07s3.17,7.07,7.07,7.07c70.9,0,129.01-55.07,133.95-124.73l2.46,2.46c2.81,2.71,7.28,2.64,10-.17,2.65-2.74,2.65-7.08,0-9.82l-14.14-14.14c-1.32-1.33-3.12-2.08-5-2.07Z"
                                />
                              </g>
                            </svg>
                          </span>
                          <p> ROI</p>
                        </li>
                        <li className={activeTab === 'tab2' ? 'current' : ''}
          onClick={() => handleTabClick('tab2')}>
                          <span>
                            <svg
                              id="Layer_2"
                              data-name="Layer 2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 480 453.15"
                            >
                              <g id="Layer_1-2" data-name="Layer 1">
                                <g>
                                  <path
                                    class="cls-2"
                                    d="M128.86,171.05c-11.2-12.19-19.01-27.1-22.67-43.25H36.17c-11.94.08-21.56,9.83-21.48,21.77.08,11.83,9.65,21.4,21.48,21.48h92.69ZM319.42,158.36c-.65,3.96-4.39,6.64-8.34,5.99-2.9-.48-5.23-2.65-5.9-5.52-1.84-7.82-2.76-15.84-2.73-23.87,0-2.38.09-4.77.26-7.16h-10.85c-3.66,16.14-11.48,31.05-22.67,43.25h85.47c1.08-.01,1.96-.89,1.97-1.97v-39.3c-.01-1.08-.89-1.96-1.97-1.97h-20.07c-7.28,8.92-12.46,19.36-15.16,30.56h0ZM304.76,113.26c.16-.77.34-1.53.52-2.3,5.23-22.02,16.41-42.17,32.32-58.26,12.84-12.77,28.44-22.02,45.62-25.72l-5.3-17.65c-1.15-3.84,1.04-7.89,4.89-9.03,1.74-.52,3.61-.37,5.24.43l87.46,36.01c3.7,1.53,5.47,5.77,3.95,9.47-.23.55-.52,1.07-.88,1.55-18.79,25.19-37.38,50.57-56.06,75.85-2.4,3.21-6.94,3.88-10.16,1.48-1.34-1-2.29-2.42-2.7-4.04l-6.05-24.08c-19.34.15-38,5.69-53.04,16.13l-.22.15h4.32c9.12.02,16.5,7.4,16.52,16.52v39.3c0,.43-.33,2.13.08,2.17,25.82,2.34,45.62,23.96,45.69,49.89v47.95c10.76,4.45,17.8,14.93,17.83,26.58v32.87c-.03,11.65-7.07,22.13-17.83,26.58v47.95c-.07,27.63-22.45,50.01-50.08,50.08H50.08c-27.63-.07-50.01-22.45-50.08-50.08v-253.64c.05-19.96,16.21-36.12,36.17-36.17h67.9c-.15-2.15-.22-4.31-.22-6.49.17-52.57,42.92-95.04,95.49-94.87,52.32.17,94.7,42.54,94.87,94.87,0,2.18-.07,4.34-.22,6.49h10.78ZM319.43,114.32c-.99,4.14-1.69,8.35-2.1,12.59,6.56-10.14,15.05-18.88,24.99-25.73,18.91-13.13,42.64-19.57,66.83-18.6,3.38-.07,6.37,2.22,7.19,5.5l3.65,14.56,41.4-56.02-65.17-26.84,3.3,10.99h0c1.14,3.84-1.04,7.88-4.88,9.02-.43.13-.88.22-1.33.26-17.08,1.75-32.78,10.31-45.47,22.93-13.99,14.18-23.82,31.94-28.4,51.32h0ZM336.52,289.39c-12.54,0-22.71,10.17-22.71,22.71s10.17,22.71,22.71,22.71,22.71-10.17,22.71-22.71c0-6.02-2.39-11.8-6.65-16.06-4.25-4.27-10.03-6.66-16.06-6.65ZM342.29,306.33c-3.19-3.19-8.36-3.19-11.55,0-3.19,3.19-3.19,8.36,0,11.55,3.19,3.19,8.36,3.19,11.55,0,1.53-1.53,2.39-3.61,2.39-5.78,0-2.17-.86-4.24-2.39-5.77ZM406.05,281.47h-87.27c-7.82.03-14.16,6.37-14.19,14.19v32.87c.03,7.82,6.37,14.16,14.19,14.19h87.27c7.82-.03,14.16-6.37,14.19-14.19v-32.88c-.03-7.82-6.37-14.16-14.19-14.19h0ZM318.78,266.93h83.62v-45.8c-.07-19.6-15.94-35.47-35.54-35.54H36.17c-7.8,0-15.39-2.53-21.62-7.21v224.69c.07,19.6,15.94,35.47,35.54,35.54h316.79c19.6-.07,35.46-15.94,35.53-35.54v-45.79h-83.62c-15.86-.04-28.7-12.88-28.74-28.74v-32.88c.04-15.86,12.88-28.7,28.74-28.74h0ZM247.74,171.05h-97.43c-35.52-26.91-42.5-77.51-15.59-113.03,26.91-35.52,77.51-42.5,113.03-15.59s42.5,77.51,15.59,113.03c-4.46,5.89-9.71,11.13-15.59,15.59Z"
                                  />
                                  <g>
                                    <path
                                      class="cls-1"
                                      d="M201.74,150.29c-1.62,0-2.7-.54-3.79-1.62l-32.45-32.45c-1.62-1.62-2.16-3.79-1.08-5.95.54-2.16,2.7-3.25,4.87-3.25h16.23c4.33,0,8.65-1.62,11.36-4.87,3.25-2.7,4.87-7.03,4.87-11.36s-1.62-8.65-4.87-11.36c-2.7-3.25-7.03-4.87-11.36-4.87h-16.23c-3.25,0-5.41-2.16-5.41-5.41s2.16-5.41,5.41-5.41h59.5c3.25,0,5.41,2.16,5.41,5.41s-2.16,5.41-5.41,5.41h-21.64c3.25,4.87,5.41,10.28,5.41,16.23,0,7.03-2.7,14.06-8.11,18.93-4.87,5.41-11.9,8.11-18.93,8.11h-3.25l23.26,23.26c2.16,2.16,2.16,5.41,0,7.57-1.08,1.08-2.16,1.62-3.79,1.62h0Z"
                                    />
                                    <path
                                      class="cls-1"
                                      d="M228.78,96.2h-59.5c-3.25,0-5.41-2.16-5.41-5.41s2.16-5.41,5.41-5.41h59.5c3.25,0,5.41,2.16,5.41,5.41s-2.16,5.41-5.41,5.41Z"
                                    />
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </span>
                          <p> Amount Spend </p>
                        </li>
                        <li className={activeTab === 'tab3' ? 'current' : ''}
          onClick={() => handleTabClick('tab3')}>
                          <span>
                            <svg
                              id="Layer_2"
                              data-name="Layer 2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512.01 512.07"
                            >
                              <g id="Layer_1-2" data-name="Layer 1">
                                <g>
                                  <g>
                                    <path
                                      class="cls-1"
                                      d="M494.94,324.33h-72.37c-13.15-54.03-44.65-101.81-89.11-135.19,10.17-9.71,10.55-25.83.84-36-2.26-2.37-4.96-4.29-7.95-5.63l22.19-78.34c5.19-18.1-5.27-36.98-23.36-42.17-3.04-.87-6.19-1.32-9.35-1.32h-15.44C286.28,1.16,254.98-7.27,230.47,6.84c-7.83,4.51-14.32,11-18.83,18.83h-15.45c-18.82.04-34.05,15.33-34.01,34.15,0,3.15.45,6.28,1.31,9.3l22.19,78.39c-12.82,5.78-18.52,20.86-12.74,33.68,1.35,3,3.27,5.7,5.65,7.97-44.36,33.48-75.84,81.22-89.15,135.18H25.61c-14.08-.06-25.54,11.3-25.6,25.38-.03,6.39,2.35,12.57,6.66,17.29-8.88,9.65-8.88,24.49,0,34.13-9.46,10.32-8.76,26.36,1.57,35.82,1.15,1.06,2.4,2,3.72,2.83-4.56,7.75-4.56,17.36,0,25.11C.01,472.39-3.59,488.16,3.92,500.11c4.69,7.46,12.88,11.98,21.69,11.95h136.53c9.61-.03,18.38-5.45,22.71-14.03,22.58,9.25,46.75,14.01,71.16,14.03h238.93c9.43,0,17.07-7.64,17.07-17.07v-153.6c0-9.43-7.64-17.07-17.07-17.07ZM494.94,365.79c-11.95-3.11-21.28-12.44-24.39-24.39h24.39v24.39ZM196.28,179.27c-4.71,0-8.53-3.82-8.53-8.53s3.82-8.53,8.53-8.53h119.47c4.71,0,8.53,3.82,8.53,8.53s-3.82,8.53-8.53,8.53h-119.47ZM182.68,49.51c3.18-4.27,8.19-6.78,13.51-6.78h9.39c-.49,2.82-.74,5.67-.76,8.53v34.13c0,4.71,3.82,8.53,8.53,8.53s8.53-3.82,8.53-8.53v-34.13c-.01-4.7.95-9.35,2.83-13.65,7.53-17.28,27.64-25.19,44.93-17.66,7.9,3.44,14.21,9.75,17.66,17.66,1.89,4.3,2.86,8.95,2.85,13.65v34.13c0,4.71,3.82,8.53,8.53,8.53s8.53-3.82,8.53-8.53v-34.13c-.02-2.86-.28-5.72-.77-8.53h9.39c9.43.07,17.01,7.77,16.93,17.2-.01,1.54-.23,3.07-.65,4.55l-22.82,80.66h-106.56l-22.83-80.7c-1.49-5.13-.46-10.67,2.77-14.92h0ZM25.61,341.4h136.53c4.71,0,8.53,3.82,8.53,8.53s-3.82,8.53-8.53,8.53H25.61c-4.71,0-8.53-3.82-8.53-8.53s3.82-8.53,8.53-8.53ZM25.61,452.33c0-4.71,3.82-8.53,8.53-8.53h136.53c4.71,0,8.53,3.82,8.53,8.53s-3.82,8.53-8.53,8.53H34.14c-4.71,0-8.53-3.82-8.53-8.53ZM25.61,426.73c-4.71,0-8.53-3.82-8.53-8.53s3.82-8.53,8.53-8.53h136.53c4.71,0,8.53,3.82,8.53,8.53s-3.82,8.53-8.53,8.53H25.61ZM17.08,384.07c0-4.71,3.82-8.53,8.53-8.53h136.53c4.71,0,8.53,3.82,8.53,8.53s-3.82,8.53-8.53,8.53H25.61c-4.71,0-8.53-3.82-8.53-8.53ZM162.14,495H25.61c-4.71,0-8.53-3.82-8.53-8.53s3.82-8.53,8.53-8.53h136.53c4.71,0,8.53,3.82,8.53,8.53s-3.82,8.53-8.53,8.53ZM186.89,480.29c-.56-2.23-1.42-4.37-2.56-6.37,11.92-7.46,15.54-23.16,8.08-35.08-2.05-3.27-4.81-6.04-8.08-8.08,5.56-9.51,4.24-21.54-3.24-29.62,8.88-9.65,8.88-24.49,0-34.13,9.49-10.4,8.75-26.52-1.65-36.01-4.72-4.31-10.9-6.69-17.29-6.66h-55.24c12.61-50.24,50.53-103.48,91.8-128h114.59c52.38,31.04,96.31,104.7,96.31,162.13,0,75.28-68.91,136.53-153.6,136.53-23.81-.02-47.36-5.04-69.12-14.71ZM426.68,358.47c-.05-5.71-.44-11.41-1.17-17.07h27.54c3.66,21.44,20.46,38.23,41.9,41.9v69.8c-21.44,3.66-38.23,20.46-41.9,41.9h-119.2c55.04-25.52,92.83-77.08,92.83-136.53ZM470.56,495c3.11-11.95,12.44-21.28,24.39-24.39v24.39h-24.39Z"
                                    />
                                    <path
                                      class="cls-1"
                                      d="M460.81,443.8c14.14,0,25.6-11.46,25.6-25.6s-11.46-25.6-25.6-25.6-25.6,11.46-25.6,25.6,11.46,25.6,25.6,25.6ZM460.81,409.67c4.71,0,8.53,3.82,8.53,8.53s-3.82,8.53-8.53,8.53-8.53-3.82-8.53-8.53,3.82-8.53,8.53-8.53Z"
                                    />
                                  </g>
                                  <g>
                                    <path
                                      class="cls-1"
                                      d="M270.34,425.5c-2.86,0-4.76-.95-6.67-2.86l-57.15-57.15c-2.86-2.86-3.81-6.67-1.9-10.48.95-3.81,4.76-5.71,8.57-5.71h28.57c7.62,0,15.24-2.86,20-8.57,5.71-4.76,8.57-12.38,8.57-20s-2.86-15.24-8.57-20c-4.76-5.71-12.38-8.57-20-8.57h-28.57c-5.71,0-9.52-3.81-9.52-9.52s3.81-9.52,9.52-9.52h104.77c5.71,0,9.52,3.81,9.52,9.52s-3.81,9.52-9.52,9.52h-38.1c5.71,8.57,9.52,18.1,9.52,28.57,0,12.38-4.76,24.76-14.29,33.34-8.57,9.52-20.95,14.29-33.34,14.29h-5.71l40.96,40.96c3.81,3.81,3.81,9.52,0,13.33-1.9,1.9-3.81,2.86-6.67,2.86h0Z"
                                    />
                                    <path
                                      class="cls-1"
                                      d="M317.97,330.26h-104.77c-5.71,0-9.52-3.81-9.52-9.52s3.81-9.52,9.52-9.52h104.77c5.71,0,9.52,3.81,9.52,9.52s-3.81,9.52-9.52,9.52Z"
                                    />
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </span>
                          <p> Revenue</p>
                        </li>
                        <li  className={activeTab === 'tab4' ? 'current' : ''}
          onClick={() => handleTabClick('tab4')}>
                          <span>
                            <svg
                              id="Layer_2"
                              data-name="Layer 2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 275.34 496"
                            >
                              <g id="Layer_1-2" data-name="Layer 1">
                                <g>
                                  <g>
                                    <path
                                      class="cls-1"
                                      d="M137.38,150.81c-53.79,0-97.55,43.78-97.55,97.58s43.76,97.54,97.55,97.54,97.55-43.76,97.55-97.54-43.76-97.58-97.55-97.58h0ZM137.38,329.94c-44.96,0-81.55-36.58-81.55-81.54s36.58-81.58,81.55-81.58,81.55,36.59,81.55,81.58-36.58,81.54-81.55,81.54Z"
                                    />
                                    <path
                                      class="cls-1"
                                      d="M259.15,410.32h-12.8v-78.14c18.1-23.31,28.98-52.48,28.98-84.21,0-75.9-61.76-137.66-137.68-137.66-13.18,0-25.9,1.98-37.98,5.45v-30.13h12.83c4.42,0,8-3.59,7.99-8.01,0-1.62-.5-3.2-1.42-4.54L70.92,3.44c-2.52-3.63-7.5-4.54-11.13-2.02-.79.55-1.47,1.23-2.02,2.02L9.58,73.09c-2.52,3.63-1.62,8.61,2.01,11.13,1.34.93,2.93,1.43,4.56,1.43h12.83v78.13C10.9,187.08,0,216.26,0,247.98c0,75.92,61.76,137.69,137.66,137.69,13.19,0,25.9-1.98,37.99-5.46v30.11h-12.8c-4.42,0-8,3.58-8,8,0,1.62.49,3.21,1.42,4.54l48.16,69.68c2.51,3.63,7.5,4.54,11.13,2.03.79-.55,1.48-1.24,2.03-2.03l48.15-69.68c2.51-3.64,1.6-8.62-2.04-11.13-1.34-.92-2.92-1.42-4.54-1.42h0ZM64.34,22.06l32.9,47.58h-5.58c-4.42,0-8,3.58-8,8v43.74c-14.21,6.14-27.28,14.62-38.66,25.1v-68.83c0-4.42-3.58-8-8-8h-5.58l32.92-47.58ZM137.66,369.67c-67.08,0-121.66-54.58-121.66-121.68s54.58-121.66,121.66-121.66,121.68,54.58,121.68,121.66-54.58,121.69-121.68,121.69h0ZM211,473.92l-32.9-47.6h5.55c4.42,0,8-3.58,8-8v-43.71c14.22-6.14,27.3-14.63,38.7-25.12v68.83c0,4.42,3.58,8,8,8h5.55l-32.9,47.6Z"
                                    />
                                  </g>
                                  <g>
                                    <path
                                      class="cls-1"
                                      d="M141.44,303.04c-1.89,0-3.16-.63-4.42-1.89l-37.86-37.86c-1.89-1.89-2.52-4.42-1.26-6.94.63-2.52,3.16-3.79,5.68-3.79h18.93c5.05,0,10.1-1.89,13.25-5.68,3.79-3.16,5.68-8.2,5.68-13.25s-1.89-10.1-5.68-13.25c-3.16-3.79-8.2-5.68-13.25-5.68h-18.93c-3.79,0-6.31-2.52-6.31-6.31s2.52-6.31,6.31-6.31h69.41c3.79,0,6.31,2.52,6.31,6.31s-2.52,6.31-6.31,6.31h-25.24c3.79,5.68,6.31,11.99,6.31,18.93,0,8.2-3.16,16.41-9.47,22.09-5.68,6.31-13.88,9.47-22.09,9.47h-3.79l27.13,27.13c2.52,2.52,2.52,6.31,0,8.83-1.26,1.26-2.52,1.89-4.42,1.89h0Z"
                                    />
                                    <path
                                      class="cls-1"
                                      d="M172.99,239.94h-69.41c-3.79,0-6.31-2.52-6.31-6.31s2.52-6.31,6.31-6.31h69.41c3.79,0,6.31,2.52,6.31,6.31s-2.52,6.31-6.31,6.31Z"
                                    />
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </span>
                          <p> P&L</p>
                        </li>
                        <li  className={activeTab === 'tab5' ? 'current' : ''}
          onClick={() => handleTabClick('tab5')}>
                          <span>
                            <svg
                              id="Layer_2"
                              data-name="Layer 2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 464.87 496.01"
                            >
                              <g id="Layer_1-2" data-name="Layer 1">
                                <g>
                                  <path
                                    class="cls-1"
                                    d="M463.1,416.77l-7.66-18.08c-2.3-5.44-6.67-9.73-12.15-11.93-1.76-.68-3.59-1.14-5.46-1.36l-11.16-26.32c-.64-1.52-.55-2.56-.16-5.63.72-5.76,1.81-14.44-5.04-30.59l-17.86-41.01c-6.78-15.6-20.09-24.74-40.68-27.92-25.95-4.04-63.26-.78-84.18,9.7l-21.31-50.3c5.07-5.17,9.68-10.78,13.78-16.75,7.1,1.82,14.38,2.78,21.75,2.78,47.92,0,86.91-39,86.91-86.94s-38.99-86.94-86.92-86.94c-13.58,0-26.86,3.34-38.9,9.38C231.48,13.32,200.99,0,167.4,0,98.06,0,41.64,56.42,41.64,125.78c0,9.3,1.08,18.34,3.01,27.07C17.14,168.25.08,197.28,0,228.8c0,47.94,39,86.94,86.94,86.94,39.58,0,73.86-26.72,83.94-64.38,13.96-.37,27.75-3.08,40.81-8.02l37.14,87.68c-13.42-10.42-29.36-11.78-40.61-9.06-11.78,2.83-19.98,10.3-21.42,19.5-.92,5.87.28,17.38,18.6,28.51,19.6,11.92,21.3,14.08,28.5,23.18,2.18,2.78,4.82,6.1,8.45,10.39,3.88,4.54,6.61,7.58,9.15,10.12,10.58,10.58,21.25,14.42,30.66,17.82,8.43,3.04,14.9,5.44,20.22,11.97-4.09,6.21-4.81,14.05-1.92,20.9l7.66,18.07c4.82,11.31,17.87,16.59,29.2,11.82l113.97-48.29c11.32-4.81,16.61-17.87,11.84-29.2h0ZM363.88,112.4c0,39.12-31.82,70.94-70.92,70.94-4.47-.02-8.93-.45-13.31-1.3,8.69-17.34,13.52-36.58,13.52-56.27,0-29.79-10.46-57.15-27.82-78.72,8.74-3.69,18.13-5.6,27.62-5.6,39.1,0,70.92,31.84,70.92,70.95ZM86.94,299.74c-39.12,0-70.94-31.83-70.94-70.94,0-24.54,12.87-47.2,33.35-60.08,16.18,44.3,56.45,77.09,104.96,82.13-9.53,29.15-36.7,48.87-67.37,48.9ZM167.4,235.54c-60.52,0-109.76-49.24-109.76-109.76,0-60.54,49.23-109.78,109.75-109.78s109.77,49.24,109.77,109.78c0,26.75-9.39,51.82-26.66,71.7-7.42-14.94-22.67-18.01-34.52-13-12.32,5.22-21.12,19.18-14.1,35.77l3.55,8.38c-12.14,4.5-24.88,6.91-38.05,6.91h0ZM287.58,416.43c-8.6-3.1-16.72-6.02-24.77-14.06-2.88-2.96-5.64-6.02-8.28-9.18-3.46-4.09-5.98-7.28-8.09-9.94-8.46-10.72-11.55-14.06-32.74-26.94-8.78-5.34-11.46-10-11.1-12.37.34-2.16,3.66-5.04,9.36-6.42,2.08-.5,4.4-.78,6.86-.78,8.9,0,19.65,3.73,27.51,14.58.72.98,1.64,1.79,2.71,2.36,5.34,2.86,12.8,1.9,17.32-2.24,3.77-3.44,4.9-8.43,2.96-13.02l-52.7-124.42c-3.3-7.78.96-12.84,5.6-14.8,4.62-1.98,11.2-1.5,14.5,6.26l3.77,8.9.02.02,27.19,64.18c1.72,4.07,6.41,5.98,10.48,4.26.78-.33,1.51-.78,2.15-1.34,10.6-9.26,49.66-16.5,80.14-11.76,19.41,3,25.41,11.46,28.46,18.5l17.84,40.95c5.14,12.1,4.46,17.52,3.86,22.28-.49,3.9-1.04,8.31,1.32,13.87l9.92,23.41-106.6,45.14c-8.16-10.42-18.07-13.98-27.7-17.46h0ZM445.02,431.23l-113.97,48.28c-3.19,1.34-6.86-.14-8.22-3.32l-7.65-18.08c-1.34-3.17.14-6.83,3.3-8.19l114.02-48.3c1.53-.66,3.26-.68,4.79-.03,1.56.64,2.78,1.82,3.42,3.34l7.66,18.08c1.33,3.19-.16,6.86-3.35,8.21h0Z"
                                  />
                                  <g>
                                    <path
                                      class="cls-1"
                                      d="M172,185.18c-2.21,0-3.69-.74-5.16-2.21l-44.23-44.23c-2.21-2.21-2.95-5.16-1.47-8.11.74-2.95,3.69-4.42,6.63-4.42h22.12c5.9,0,11.79-2.21,15.48-6.63,4.42-3.69,6.63-9.58,6.63-15.48s-2.21-11.79-6.63-15.48c-3.69-4.42-9.58-6.63-15.48-6.63h-22.12c-4.42,0-7.37-2.95-7.37-7.37s2.95-7.37,7.37-7.37h81.09c4.42,0,7.37,2.95,7.37,7.37s-2.95,7.37-7.37,7.37h-29.49c4.42,6.63,7.37,14.01,7.37,22.12,0,9.58-3.69,19.17-11.06,25.8-6.63,7.37-16.22,11.06-25.8,11.06h-4.42l31.7,31.7c2.95,2.95,2.95,7.37,0,10.32-1.47,1.47-2.95,2.21-5.16,2.21h0Z"
                                    />
                                    <path
                                      class="cls-1"
                                      d="M208.86,111.46h-81.09c-4.42,0-7.37-2.95-7.37-7.37s2.95-7.37,7.37-7.37h81.09c4.42,0,7.37,2.95,7.37,7.37s-2.95,7.37-7.37,7.37Z"
                                    />
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </span>
                          <p> CPC </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div id="tab1" className={`tab-content ${activeTab === 'tab1' ? 'current' : ''}`}>
                  <table id="ROI_data_table" class="table table-striped data-table-pl">
                    <thead>
                      <tr>
                        <th>Sr No</th>
                        <th>Ad Account </th>
                        <th>AD Name</th>
                        <th>Budget</th>
                        <th>9th Nov </th>
                        <th>10th Nov </th>
                        <th>11th Nov </th>
                        <th>12th Nov </th>
                        <th>13th Nov </th>
                        <th>14th Nov </th>
                        <th>15th Nov </th>
                        <th>16th Nov </th>
                        <th>17th Nov </th>
                        <th>18th Nov </th>
                        <th>19th Nov </th>
                        <th>20th Nov </th>
                        <th>Total/Average </th>
                        <th>Action</th>
                        <th>Date And Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Temmu1</td>
                        <td>
                          <span class="Inactive">Instagram</span>
                        </td>
                        <td>
                          <div class="d-flex justify-content-center">
                            <span class="badge text-bg-info">955</span>
                            <button
                              type="button"
                              class="btn btn-primary small_bt"
                              data-bs-toggle="modal"
                              data-bs-target="#Budget"
                            >
                              <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                          </div>
                        </td>
                        <td> 1.1 </td>
                        <td> 1.2 </td>
                        <td> 1.3 </td>
                        <td> 1.6 </td>
                        <td> 2.1 </td>
                        <td> 1.9 </td>
                        <td> 2.5 </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td>
                          {" "}
                          <b>1.5</b>{" "}
                        </td>
                        <td>
                          <div class="toggle">
                            <input type="checkbox" class="phase-class" />
                            <label></label>
                          </div>
                        </td>

                        <td>
                          <p class="mb-0">
                            <span class="d-flex justify-content-center align-items-center">
                              <i class="fa fa-calendar-alt me-2"></i>27/03/2021
                              <br />
                            </span>
                            <span class="d-flex justify-content-center align-items-center time_span">
                              <i class="fa fa-clock me-2"></i>07:00AM
                            </span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Temmu2</td>
                        <td>
                          <span class="Active">Google</span>
                        </td>
                        <td>
                          <div class="d-flex justify-content-center">
                            <span class="badge text-bg-info">955</span>
                            <button
                              type="button"
                              class="btn btn-primary small_bt"
                              data-bs-toggle="modal"
                              data-bs-target="#Budget"
                            >
                              <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                          </div>
                        </td>
                        <td> 1.1 </td>
                        <td> 1.2 </td>
                        <td> 1.3 </td>
                        <td> 1.6 </td>
                        <td> 2.1 </td>
                        <td> 1.9 </td>
                        <td> 2.5 </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td>
                          {" "}
                          <b>1.5</b>{" "}
                        </td>
                        <td>
                          <div class="toggle">
                            <input type="checkbox" class="phase-class" />
                            <label></label>
                          </div>
                        </td>

                        <td>
                          <p class="mb-0">
                            <span class="d-flex justify-content-center align-items-center">
                              <i class="fa fa-calendar-alt me-2"></i>27/03/2021
                              <br />
                            </span>
                            <span class="d-flex justify-content-center align-items-center time_span">
                              <i class="fa fa-clock me-2"></i>07:00AM
                            </span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Temmu3</td>
                        <td>
                          <span class="Review_Pending">Facebook</span>
                        </td>
                        <td>
                          <div class="d-flex justify-content-center">
                            <span class="badge text-bg-info">955</span>
                            <button
                              type="button"
                              class="btn btn-primary small_bt"
                              data-bs-toggle="modal"
                              data-bs-target="#Budget"
                            >
                              <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                          </div>
                        </td>
                        <td> 1.1 </td>
                        <td> 1.2 </td>
                        <td> 1.3 </td>
                        <td> 1.6 </td>
                        <td> 2.1 </td>
                        <td> 1.9 </td>
                        <td> 2.5 </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td>
                          {" "}
                          <b>1.5</b>{" "}
                        </td>
                        <td>
                          <div class="toggle">
                            <input type="checkbox" class="phase-class" />
                            <label></label>
                          </div>
                        </td>
                        <td>
                          <p class="mb-0">
                            <span class="d-flex justify-content-center align-items-center">
                              <i class="fa fa-calendar-alt me-2"></i>27/03/2021
                              <br />
                            </span>
                            <span class="d-flex justify-content-center align-items-center time_span">
                              <i class="fa fa-clock me-2"></i>07:00AM
                            </span>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div id="tab2" className={`tab-content ${activeTab === 'tab2' ? 'current' : ''}`}>
                  <table id="Amount_data_table" class="table table-striped data-table-pl">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Ad heli </th>
                        <th>AD naman</th>
                        <th>parth</th>
                        <th>9th oct </th>
                        <th>10th oct </th>
                        <th>11th oct </th>
                        <th>12th oct </th>
                        <th>13th oct </th>
                        <th>14th oct </th>
                        <th>15th oct </th>
                        <th>16th oct </th>
                        <th>17th oct </th>
                        <th>18th oct </th>
                        <th>19th oct </th>
                        <th>20th oct </th>
                        <th>Total/Average </th>
                        <th>Action</th>
                        <th>Date And Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Temmu1</td>
                        <td>
                          <span class="Inactive">Instagram</span>
                        </td>
                        <td>
                          <div class="d-flex justify-content-center">
                            <span class="badge text-bg-info">955</span>
                            <button
                              type="button"
                              class="btn btn-primary small_bt"
                              data-bs-toggle="modal"
                              data-bs-target="#Budget"
                            >
                              <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                          </div>
                        </td>
                        <td> 1.1 </td>
                        <td> 1.2 </td>
                        <td> 1.3 </td>
                        <td> 1.6 </td>
                        <td> 2.1 </td>
                        <td> 1.9 </td>
                        <td> 2.5 </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td>
                          {" "}
                          <b>1.5</b>{" "}
                        </td>
                        <td>
                          <div class="toggle">
                            <input type="checkbox" class="phase-class" />
                            <label></label>
                          </div>
                        </td>
                        <td>
                          <p class="mb-0">
                            <span class="d-flex justify-content-center align-items-center">
                              <i class="fa fa-calendar-alt me-2"></i>27/03/2021
                              <br />
                            </span>
                            <span class="d-flex justify-content-center align-items-center time_span">
                              <i class="fa fa-clock me-2"></i>07:00AM
                            </span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Temmu2</td>
                        <td>
                          <span class="Active">Google</span>
                        </td>
                        <td>
                          <div class="d-flex justify-content-center">
                            <span class="badge text-bg-info">955</span>
                            <button
                              type="button"
                              class="btn btn-primary small_bt"
                              data-bs-toggle="modal"
                              data-bs-target="#Budget"
                            >
                              <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                          </div>
                        </td>
                        <td> 1.1 </td>
                        <td> 1.2 </td>
                        <td> 1.3 </td>
                        <td> 1.6 </td>
                        <td> 2.1 </td>
                        <td> 1.9 </td>
                        <td> 2.5 </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td>
                          {" "}
                          <b>1.5</b>{" "}
                        </td>
                        <td>
                          <div class="toggle">
                            <input type="checkbox" class="phase-class" />
                            <label></label>
                          </div>
                        </td>
                        <td>
                          <p class="mb-0">
                            <span class="d-flex justify-content-center align-items-center">
                              <i class="fa fa-calendar-alt me-2"></i>27/03/2021
                              <br />
                            </span>
                            <span class="d-flex justify-content-center align-items-center time_span">
                              <i class="fa fa-clock me-2"></i>07:00AM
                            </span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Temmu3</td>
                        <td>
                          <span class="Review_Pending">Facebook</span>
                        </td>
                        <td>
                          <div class="d-flex justify-content-center">
                            <span class="badge text-bg-info">955</span>
                            <button
                              type="button"
                              class="btn btn-primary small_bt"
                              data-bs-toggle="modal"
                              data-bs-target="#Budget"
                            >
                              <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                          </div>
                        </td>
                        <td> 1.1 </td>
                        <td> 1.2 </td>
                        <td> 1.3 </td>
                        <td> 1.6 </td>
                        <td> 2.1 </td>
                        <td> 1.9 </td>
                        <td> 2.5 </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td>
                          {" "}
                          <b>1.5</b>{" "}
                        </td>
                        <td>
                          <div class="toggle">
                            <input type="checkbox" class="phase-class" />
                            <label></label>
                          </div>
                        </td>

                        <td>
                          <p class="mb-0">
                            <span class="d-flex justify-content-center align-items-center">
                              <i class="fa fa-calendar-alt me-2"></i>27/03/2021
                              <br />
                            </span>
                            <span class="d-flex justify-content-center align-items-center time_span">
                              <i class="fa fa-clock me-2"></i>07:00AM
                            </span>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div id="tab-3" className={`tab-content ${activeTab === 'tab3' ? 'current' : ''}`}>
                  <table id="Revenue_data_table" class="table table-striped data-table-pl">
                    <thead>
                      <tr>
                        <th>Sr No</th>
                        <th>Ad Account </th>
                        <th>AD Name</th>
                        <th>Budget</th>
                        <th>9th Nov </th>
                        <th>10th jan </th>
                        <th>11th jan </th>
                        <th>12th jan </th>
                        <th>13th jan </th>
                        <th>14th jan </th>
                        <th>15th jan </th>
                        <th>16th jan </th>
                        <th>17th jan </th>
                        <th>18th jan </th>
                        <th>19th jan </th>
                        <th>20th jan </th>
                        <th>Total/Average </th>
                        <th>Action</th>
                        <th>Date And Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Temmu1</td>
                        <td>
                          <span class="Inactive">Instagram</span>
                        </td>
                        <td>
                          <div class="d-flex justify-content-center">
                            <span class="badge text-bg-info">955</span>
                            <button
                              type="button"
                              class="btn btn-primary small_bt"
                              data-bs-toggle="modal"
                              data-bs-target="#Budget"
                            >
                              <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                          </div>
                        </td>
                        <td> 1.1 </td>
                        <td> 1.2 </td>
                        <td> 1.3 </td>
                        <td> 1.6 </td>
                        <td> 2.1 </td>
                        <td> 1.9 </td>
                        <td> 2.5 </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td>
                          {" "}
                          <b>1.5</b>{" "}
                        </td>
                        <td>
                          <div class="toggle">
                            <input type="checkbox" class="phase-class" />
                            <label></label>
                          </div>
                        </td>
                        <td>
                          <p class="mb-0">
                            <span class="d-flex justify-content-center align-items-center">
                              <i class="fa fa-calendar-alt me-2"></i>27/03/2021
                              <br />
                            </span>
                            <span class="d-flex justify-content-center align-items-center time_span">
                              <i class="fa fa-clock me-2"></i>07:00AM
                            </span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Temmu2</td>
                        <td>
                          <span class="Active">Google</span>
                        </td>
                        <td>
                          <div class="d-flex justify-content-center">
                            <span class="badge text-bg-info">955</span>
                            <button
                              type="button"
                              class="btn btn-primary small_bt"
                              data-bs-toggle="modal"
                              data-bs-target="#Budget"
                            >
                              <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                          </div>
                        </td>
                        <td> 1.1 </td>
                        <td> 1.2 </td>
                        <td> 1.3 </td>
                        <td> 1.6 </td>
                        <td> 2.1 </td>
                        <td> 1.9 </td>
                        <td> 2.5 </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td>
                          {" "}
                          <b>1.5</b>{" "}
                        </td>
                        <td>
                          <div class="toggle">
                            <input type="checkbox" class="phase-class" />
                            <label></label>
                          </div>
                        </td>

                        <td>
                          <p class="mb-0">
                            <span class="d-flex justify-content-center align-items-center">
                              <i class="fa fa-calendar-alt me-2"></i>27/03/2021
                              <br />
                            </span>
                            <span class="d-flex justify-content-center align-items-center time_span">
                              <i class="fa fa-clock me-2"></i>07:00AM
                            </span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Temmu3</td>
                        <td>
                          <span class="Review_Pending">Facebook</span>
                        </td>
                        <td>
                          <div class="d-flex justify-content-center">
                            <span class="badge text-bg-info">955</span>
                            <button
                              type="button"
                              class="btn btn-primary small_bt"
                              data-bs-toggle="modal"
                              data-bs-target="#Budget"
                            >
                              <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                          </div>
                        </td>
                        <td> 1.1 </td>
                        <td> 1.2 </td>
                        <td> 1.3 </td>
                        <td> 1.6 </td>
                        <td> 2.1 </td>
                        <td> 1.9 </td>
                        <td> 2.5 </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td>
                          {" "}
                          <b>1.5</b>{" "}
                        </td>
                        <td>
                          <div class="toggle">
                            <input type="checkbox" class="phase-class" />
                            <label></label>
                          </div>
                        </td>

                        <td>
                          <p class="mb-0">
                            <span class="d-flex justify-content-center align-items-center">
                              <i class="fa fa-calendar-alt me-2"></i>27/03/2021
                              <br />
                            </span>
                            <span class="d-flex justify-content-center align-items-center time_span">
                              <i class="fa fa-clock me-2"></i>07:00AM
                            </span>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div id="tab-4"  className={`tab-content ${activeTab === 'tab4' ? 'current' : ''}`}>
                  <table id="PL_data_table" class="table table-striped data-table-pl">
                    <thead>
                      <tr>
                        <th>Sr No</th>
                        <th>Ad Account </th>
                        <th>AD Name</th>
                        <th>Budget</th>
                        <th>9th Nov </th>
                        <th>10th feb </th>
                        <th>11th feb </th>
                        <th>12th feb </th>
                        <th>13th feb </th>
                        <th>14th feb </th>
                        <th>15th feb </th>
                        <th>16th feb </th>
                        <th>17th feb </th>
                        <th>18th feb </th>
                        <th>19th feb </th>
                        <th>20th feb </th>
                        <th>Total/Average </th>
                        <th>Action</th>
                        <th>Date And Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Temmu1</td>
                        <td>
                          <span class="Inactive">Instagram</span>
                        </td>
                        <td>
                          <div class="d-flex justify-content-center">
                            <span class="badge text-bg-info">955</span>
                            <button
                              type="button"
                              class="btn btn-primary small_bt"
                              data-bs-toggle="modal"
                              data-bs-target="#Budget"
                            >
                              <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                          </div>
                        </td>
                        <td> 1.1 </td>
                        <td> 1.2 </td>
                        <td> 1.3 </td>
                        <td> 1.6 </td>
                        <td> 2.1 </td>
                        <td> 1.9 </td>
                        <td> 2.5 </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td>
                          {" "}
                          <b>1.5</b>{" "}
                        </td>
                        <td>
                          <div class="toggle">
                            <input type="checkbox" class="phase-class" />
                            <label></label>
                          </div>
                        </td>
                        <td>
                          <p class="mb-0">
                            <span class="d-flex justify-content-center align-items-center">
                              <i class="fa fa-calendar-alt me-2"></i>27/03/2021
                              <br />
                            </span>
                            <span class="d-flex justify-content-center align-items-center time_span">
                              <i class="fa fa-clock me-2"></i>07:00AM
                            </span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Temmu2</td>
                        <td>
                          <span class="Active">Google</span>
                        </td>
                        <td>
                          <div class="d-flex justify-content-center">
                            <span class="badge text-bg-info">955</span>
                            <button
                              type="button"
                              class="btn btn-primary small_bt"
                              data-bs-toggle="modal"
                              data-bs-target="#Budget"
                            >
                              <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                          </div>
                        </td>
                        <td> 1.1 </td>
                        <td> 1.2 </td>
                        <td> 1.3 </td>
                        <td> 1.6 </td>
                        <td> 2.1 </td>
                        <td> 1.9 </td>
                        <td> 2.5 </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td>
                          {" "}
                          <b>1.5</b>{" "}
                        </td>
                        <td>
                          <div class="toggle">
                            <input type="checkbox" class="phase-class" />
                            <label></label>
                          </div>
                        </td>
                        <td>
                          <p class="mb-0">
                            <span class="d-flex justify-content-center align-items-center">
                              <i class="fa fa-calendar-alt me-2"></i>27/03/2021
                              <br />
                            </span>
                            <span class="d-flex justify-content-center align-items-center time_span">
                              <i class="fa fa-clock me-2"></i>07:00AM
                            </span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Temmu3</td>
                        <td>
                          <span class="Review_Pending">Facebook</span>
                        </td>
                        <td>
                          <div class="d-flex justify-content-center">
                            <span class="badge text-bg-info">955</span>
                            <button
                              type="button"
                              class="btn btn-primary small_bt"
                              data-bs-toggle="modal"
                              data-bs-target="#Budget"
                            >
                              <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                          </div>
                        </td>
                        <td> 1.1 </td>
                        <td> 1.2 </td>
                        <td> 1.3 </td>
                        <td> 1.6 </td>
                        <td> 2.1 </td>
                        <td> 1.9 </td>
                        <td> 2.5 </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td>
                          {" "}
                          <b>1.5</b>{" "}
                        </td>
                        <td>
                          <div class="toggle">
                            <input type="checkbox" class="phase-class" />
                            <label></label>
                          </div>
                        </td>
                        <td>
                          <p class="mb-0">
                            <span class="d-flex justify-content-center align-items-center">
                              <i class="fa fa-calendar-alt me-2"></i>27/03/2021
                              <br />
                            </span>
                            <span class="d-flex justify-content-center align-items-center time_span">
                              <i class="fa fa-clock me-2"></i>07:00AM
                            </span>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div id="tab-5"  className={`tab-content ${activeTab === 'tab5' ? 'current' : ''}`}>
                  <table id="CPC_data_table" class="table table-striped data-table-pl">
                    <thead>
                      <tr>
                        <th>Sr No</th>
                        <th>Ad Account </th>
                        <th>AD Name</th>
                        <th>Budget</th>
                        <th>9th Nov </th>
                        <th>10th Nov </th>
                        <th>11th Nov </th>
                        <th>12th Nov </th>
                        <th>13th Nov </th>
                        <th>14th Nov </th>
                        <th>15th Nov </th>
                        <th>16th Nov </th>
                        <th>17th Nov </th>
                        <th>18th Nov </th>
                        <th>19th Nov </th>
                        <th>20th Nov </th>
                        <th>Total/Average </th>
                        <th>Action</th>
                        <th>Date And Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Temmu1</td>
                        <td>
                          <span class="Inactive">Instagram</span>
                        </td>
                        <td>
                          <div class="d-flex justify-content-center">
                            <span class="badge text-bg-info">955</span>
                            <button
                              type="button"
                              class="btn btn-primary small_bt"
                              data-bs-toggle="modal"
                              data-bs-target="#Budget"
                            >
                              <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                          </div>
                        </td>
                        <td> 1.1 </td>
                        <td> 1.2 </td>
                        <td> 1.3 </td>
                        <td> 1.6 </td>
                        <td> 2.1 </td>
                        <td> 1.9 </td>
                        <td> 2.5 </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td>
                          {" "}
                          <b>1.5</b>{" "}
                        </td>
                        <td>
                          <div class="toggle">
                            <input type="checkbox" class="phase-class" />
                            <label></label>
                          </div>
                        </td>

                        <td>
                          <p class="mb-0">
                            <span class="d-flex justify-content-center align-items-center">
                              <i class="fa fa-calendar-alt me-2"></i>27/03/2021
                              <br />
                            </span>
                            <span class="d-flex justify-content-center align-items-center time_span">
                              <i class="fa fa-clock me-2"></i>07:00AM
                            </span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Temmu2</td>
                        <td>
                          <span class="Active">Google</span>
                        </td>
                        <td>
                          <div class="d-flex justify-content-center">
                            <span class="badge text-bg-info">955</span>
                            <button
                              type="button"
                              class="btn btn-primary small_bt"
                              data-bs-toggle="modal"
                              data-bs-target="#Budget"
                            >
                              <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                          </div>
                        </td>
                        <td> 1.1 </td>
                        <td> 1.2 </td>
                        <td> 1.3 </td>
                        <td> 1.6 </td>
                        <td> 2.1 </td>
                        <td> 1.9 </td>
                        <td> 2.5 </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td>
                          {" "}
                          <b>1.5</b>{" "}
                        </td>
                        <td>
                          <div class="toggle">
                            <input type="checkbox" class="phase-class" />
                            <label></label>
                          </div>
                        </td>
                        <td>
                          <p class="mb-0">
                            <span class="d-flex justify-content-center align-items-center">
                              <i class="fa fa-calendar-alt me-2"></i>27/03/2021
                              <br />
                            </span>
                            <span class="d-flex justify-content-center align-items-center time_span">
                              <i class="fa fa-clock me-2"></i>07:00AM
                            </span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Temmu3</td>
                        <td>
                          <span class="Review_Pending">Facebook</span>
                        </td>
                        <td>
                          <div class="d-flex justify-content-center">
                            <span class="badge text-bg-info">955</span>
                            <button
                              type="button"
                              class="btn btn-primary small_bt"
                              data-bs-toggle="modal"
                              data-bs-target="#Budget"
                            >
                              <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                          </div>
                        </td>
                        <td> 1.1 </td>
                        <td> 1.2 </td>
                        <td> 1.3 </td>
                        <td> 1.6 </td>
                        <td> 2.1 </td>
                        <td> 1.9 </td>
                        <td> 2.5 </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td>
                          {" "}
                          <b>1.5</b>{" "}
                        </td>
                        <td>
                          <div class="toggle">
                            <input type="checkbox" class="phase-class" />
                            <label></label>
                          </div>
                        </td>
                        <td>
                          <p class="mb-0">
                            <span class="d-flex justify-content-center align-items-center">
                              <i class="fa fa-calendar-alt me-2"></i>27/03/2021
                              <br />
                            </span>
                            <span class="d-flex justify-content-center align-items-center time_span">
                              <i class="fa fa-clock me-2"></i>07:00AM
                            </span>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Trends
