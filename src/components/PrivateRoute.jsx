import React, { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { isAdmin } = useContext(AdminContext);
  return isAdmin ? children : <Navigate to="/not-admin" />;
};

export default PrivateRoute;

// Income req ---> private route --> check it ---> thenn only allow to pass : redirect to another page
