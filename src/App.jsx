import { Suspense, lazy } from 'react';
import './App.css';
// import Login from './components/Login';
const Login = lazy(() => import('./components/Login'));
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
import HcpConsent from './pages/HcpConsent';


function App() {
  

  return (
    <Router>
      <div className="wrapper">
        <Suspense
          fallback={
            <div
              style={{
                color: "red",
                fontWeight: 700,
                fontSize: "1.5rem",
                textAlign: "center",
                margin: "20px",
                padding: "10px",
                backgroundColor: "#f9f9f9",
                borderRadius: "5px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Loading...
            </div>
          }
        >
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="hcp-consent" element={<HcpConsent />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="manage-ad-account" element={<ManageAdAccount />} />
              <Route
                path="manage-google-account"
                element={<ManageGoogleAccount />}
              />
            </Route>
            <Route path="/master-admin" element={<MasterAdmin />}>
              <Route index element={<MasterDashboard1 />} />
              <Route path="manage-user" element={<ManageUser />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}


export default App
