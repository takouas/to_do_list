import React, { useEffect } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAuth = ({ allowedRoles,allowed }) => {
  const location = useLocation();
  useEffect(() => {
    console.log(allowed[0]);
  }, []);
  return  allowed[0] ===JSON.parse(localStorage.getItem('user')).data ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default RequireAuth;
