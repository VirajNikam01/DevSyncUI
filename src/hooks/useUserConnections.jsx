import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../store/slices/userSlice";
import { LIVE_URL } from "../utils/helper";

const useUserConnections = () => {
  const user = useSelector((store) => store.user.user);
  const dispatch = useDispatch();
  const getUserConnections = async () => {
    try {
      const response = await fetch(`${LIVE_URL}user/connections`, {
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();

      if (data?.message) return;
      dispatch(addConnections(data?.data));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (user) {
      getUserConnections();
    }
  }, [user]);
  return <div></div>;
};

export default useUserConnections;
