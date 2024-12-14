import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const RestrictedRoutes = ({ children }) => {
  const { user, isUserLoading } = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user && !isUserLoading) {
      navigate("/feed", { replace: true });
    }
  }, [user]);
  return user ? <div className="loader w-full hifull flex items-center justify-center"><Loader className="w-20" /></div> : children;
};

export default RestrictedRoutes;
