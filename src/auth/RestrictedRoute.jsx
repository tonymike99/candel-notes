import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/context/auth-context";

function RestrictedRoute() {
  const { userDetails, encodedToken } = useAuth();
  const location = useLocation();

  return userDetails && encodedToken ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
}

export { RestrictedRoute };
