import { Navigate, Outlet } from "react-router-dom";
import { checkAccessToken } from "../utils/helper";

const PrivateRoute = () => {
  if (!checkAccessToken()) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
