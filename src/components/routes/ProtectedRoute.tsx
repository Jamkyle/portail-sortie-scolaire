import { UserContext } from "@/context/user/User";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { user } = useContext(UserContext);
  return user?.token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace={true} state={{ from: "/admin" }} />
  );
};

export default ProtectedRoute;
