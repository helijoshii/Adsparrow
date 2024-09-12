import './App.css'
import Login from './components/Login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import MainLayout from './pages/Admin/MainLayout';
import Analytics from './pages/Admin/Analytics';
import ManageAdAccount from './pages/Admin/Setting/ManageAdAccount';
import ManageGoogleAccount from './pages/Admin/Setting/ManageGoogleAccount';
import MasterAdmin from './pages/MasterAdmin/MasterAdmin';
import ManageUser from './pages/MasterAdmin/ManageUser';
import Demo from './pages/Demo';
import MasterDashboard1 from './pages/MasterAdmin/MasterDashboard1';


function App() {
  

  return (
    <>
    <Router>
    <div className='wrapper'>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="demo" element={<Demo />} />
          <Route path="ManageAdAccount" element={<ManageAdAccount />} />
          <Route path="managegoogleaccount" element={<ManageGoogleAccount />} />
        </Route>
        <Route path="/MasterAdmin" element={<MasterAdmin />}>
          <Route index element={<MasterDashboard1 />} />
          <Route path="ManageUser" element={<ManageUser />} />
        </Route>
      </Routes>
    </div>  
    </Router>
    </>
  )
}

export default App
