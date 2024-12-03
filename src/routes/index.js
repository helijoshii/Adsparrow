import Analytics from "../pages/Admin/Analytics";
import MainLayout from "../pages/Admin/MainLayout";
import ManageAdAccount from "../pages/Admin/Setting/ManageAdAccount";
import ManageGoogleAccount from "../pages/Admin/Setting/ManageGoogleAccount";
import Trends from "../pages/Admin/Trends";
import Login from "../pages/Login";
import ManageUser from "../pages/MasterAdmin/ManageUser";
import MasterAdmin from "../pages/MasterAdmin/MasterAdmin";
import Dashboard from "../pages/Admin/Dashboard";
import MasterDashboard1 from "../pages/MasterAdmin/MasterDashboard1";

const CUSTOM_ROUTES = [
  {
    name: "login",
    path: "/login",
    component: Login,
    isPrivate: false,
  },
  {
    name: "main-layout",
    path: "/",
    component: MainLayout,
    isPrivate: true,
    children: [
      {
        name: "dashboard",
        path: "/",
        component: Dashboard,
        isPrivate: true,
      },
      {
        name: "analytics",
        path: "/analytics",
        component: Analytics,
        isPrivate: true,
      },
      {
        name: "manage-ad-account",
        path: "manage-ad-account",
        component: ManageAdAccount,
        isPrivate: true,
      },
      {
        name: "manage-google-account",
        path: "manage-google-account",
        component: ManageGoogleAccount,
        isPrivate: true,
      },
      {
        name: "trends",
        path: "trends",
        component: Trends,
        isPrivate: true,
      },
    ],
  },
  {
    name: "master-admin",
    path: "/master-admin",
    component: MasterAdmin,
    isPrivate: true,
    children: [
      {
        name: "master-dashboard",
        path: "/master-admin",
        component: MasterDashboard1,
        isPrivate: true,
      },
      {
        name: "manage-user",
        path: "manage-user",
        component: ManageUser,
        isPrivate: true,
      },
    ],
  },
];

export default CUSTOM_ROUTES;
