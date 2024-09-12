import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faRectangleAd  
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const MasterDashboard = () => {
  return (
    <div>
      <div className="container-fluid">
        <div class="row pt-3">
          <div class="col-auto">
            <h2 class="main_title">Dashboard</h2>
          </div>
        </div>
        <div class="row pt-2">
          <div class="col-lg-auto col-md-auto col-sm-auto col-12">
            <div class="white_shadow dasboard-3">
              <div class="left">
                <span>Total User Counts</span>
                <h3>11 </h3>
              </div>
              <div class="right">
                <span>
                <FontAwesomeIcon icon={faUsers} />
                </span>
              </div>
            </div>
          </div>
          <div class="col-lg-auto col-md-auto col-sm-auto col-12">
            <div class="white_shadow dasboard-3">
              <div class="left">
                <span>Total META ADS Counts</span>
                <h3>30 </h3>
              </div>
              <div class="right">
                <span>
                <FontAwesomeIcon icon={faRectangleAd} />
                </span>
              </div>
            </div>
          </div>
          <div class="col-lg-auto col-md-auto col-sm-auto col-12">
            <div class="white_shadow dasboard-3">
              <div class="left">
                <span>Total Google Counts</span>
                <h3>1 </h3>
              </div>
              <div class="right">
                <span>
                <FontAwesomeIcon icon={faGoogle} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MasterDashboard
