import React from "react";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/context/auth-context";

function PrivateRoute() {
  const { userDetails, encodedToken } = useAuth();
  const location = useLocation();

  return userDetails && encodedToken ? (
    <Outlet />
  ) : (
    <Navigate to="/auth" state={{ from: location }} replace />
  );
}

export { PrivateRoute };
