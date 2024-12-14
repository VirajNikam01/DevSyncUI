import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DownTime from "../Pages/DownTime";

const RouteProtector = ({ roles = [], children }) => {
  const user = useSelector((store) => store.user.user);

  const navigate = useNavigate();
  useEffect(() => {
    if (!roles.includes(user?.role)) {
      navigate("/", { replace: true });
    }
  }, []);

  return user ? children : <DownTime />;
};

export default RouteProtector;
