import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faRectangleAd } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";

const MasterDashboard1 = () => {
  const [loading, setLoading] = useState(true);

  // Simulate data loading (you can replace this with real data fetching logic)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Set loading to false after data is fetched
    }, 1000);
  }, []);
  const getDashboardData = async () => {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // Access the env variable
    try {
      const response = await axios.get(
        `${API_BASE_URL}/dashboard/`
      );
      // console.log("Dashboard data:", response);
      return response.data;
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      return null;
    }
  };

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
                <h3>{loading ? "" : "11"}</h3>
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
                <h3>{loading ? "" : "30"}</h3>
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
