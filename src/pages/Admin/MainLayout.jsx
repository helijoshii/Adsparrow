import React, { useEffect, useState } from "react";
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar/Sidebar';
// import Temp from "../../components/temp";



const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
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
        {/* <Temp /> */}
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        
        <div className="body-wrapper">
          <Navbar isOpen={isOpen}/>

          
          <div className="container-fluid">
              <Outlet isOpen={isOpen}/> {/* This will render the matched child route components */}
            </div>
          <Footer isOpen={isOpen}/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default MainLayout
