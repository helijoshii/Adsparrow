import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faRectangleAd } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";

const MasterDashboard1 = () => {
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null); 

  // Simulate data loading (you can replace this with real data fetching logic)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Set loading to false after data is fetched
    }, 1000);
  }, []);

  const getDashboardData = async () => {
    try {
      // Retrieve token from local storage
      const token = localStorage.getItem("token");
  
      // Make API request with token in headers
      const response = await axios.get(
        "https://devadsparrowapi.bdccoder.in/api/dashboard/",
        {
          headers: {
            Authorization: `Token ${token}`, // Include 'Token' header
          },
        }
      );

      // Update the dashboard data state
      setDashboardData(response.data.data);
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getDashboardData(); // Fetch data on component mount
  }, []);
  useEffect(() => getDashboardData, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row pt-3">
          <div className="col-auto">
            <h2 className="main_title">Dashboard</h2>
          </div>
        </div>
        <div className="row pt-2">
          <div className="col-lg-auto col-md-auto col-sm-auto col-12">
            <div
              className={`white_shadow dasboard-3 ${
                loading ? "shimmerCard" : ""
              }`}
            >
              <div className="left">
                <span>{loading ? "" : "Total User Counts"}</span>
                <h3>{loading ? "" : dashboardData?.total_users}</h3>
              </div>
              <div className="right">
                <span>
                  <FontAwesomeIcon icon={faUsers} />
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-auto col-md-auto col-sm-auto col-12">
            <div
              className={`white_shadow dasboard-3 ${
                loading ? "shimmerCard" : ""
              }`}
            >
              <div className="left">
                <span>{loading ? "" : "Total META ADS Counts"}</span>
                <h3>{loading ? "" : dashboardData?.total_fb_ad_accounts}</h3>
              </div>
              <div className="right">
                <span>
                  <FontAwesomeIcon icon={faRectangleAd} />
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-auto col-md-auto col-sm-auto col-12">
            <div
              className={`white_shadow dasboard-3 ${
                loading ? "shimmerCard" : ""
              }`}
            >
              <div className="left">
                <span>{loading ? "" : "Total Google Counts"}</span>
                <h3>{loading ? "" : "1"}</h3>
              </div>
              <div className="right">
                <span>
                  <FontAwesomeIcon icon={faGoogle} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MasterDashboard1;
