import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export const PriveteRoute = () => {
  const { isAuth } = useSelector((state) => state.auth);
  return <>{isAuth ? <Outlet /> : <Navigate to="/login" />}</>;
};
export const RestrictedRoute = () => {
  const { isAuth } = useSelector((state) => state.auth);
  return <>{!isAuth ? <Outlet /> : <Navigate to="/" />}</>;
};
