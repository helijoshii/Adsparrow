import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Sidebar from './Sidebar';



const MasterAdmin = () => {
  return (
    <div>
      <div>
      <div
        className="page-wrapper"
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin6"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
      >
        <Sidebar />
        <div className="body-wrapper">
          <Navbar />
          <div className="container-fluid">
              <Outlet /> {/* This will render the matched child route components */}
            </div>
          <Footer />
        </div>
      </div>
    </div>
    </div>
  )
}

export default MasterAdmin
