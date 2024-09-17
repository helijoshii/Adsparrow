import './App.css'
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import MainLayout from './pages/Admin/MainLayout';
import Analytics from './pages/Admin/Analytics';
import ManageAdAccount from './pages/Admin/Setting/ManageAdAccount';
import ManageGoogleAccount from './pages/Admin/Setting/ManageGoogleAccount';
import MasterAdmin from './pages/MasterAdmin/MasterAdmin';
import ManageUser from './pages/MasterAdmin/ManageUser';
import MasterDashboard1 from './pages/MasterAdmin/MasterDashboard1';
import NotFound from './components/NotFound';


function App() {
  

  return (
    <Router>
    <div className='wrapper'>
      <Routes>
      <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="manage-ad-account" element={<ManageAdAccount />} />
          <Route path="manage-google-account" element={<ManageGoogleAccount />} />
        </Route>
        <Route path="/master-admin" element={<MasterAdmin />}>
          <Route index element={<MasterDashboard1 />} />
          <Route path="manage-user" element={<ManageUser />} />
        </Route>
      </Routes>
    </div>  
    </Router>
  )
}

export default App
