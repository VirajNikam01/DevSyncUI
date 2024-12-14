import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addUser,
  removeUserLoader,
  setServerError,
} from "../store/slices/userSlice";

export const useUserData = (url) => {
  const [isFormSubmitting, setIsFormSubmitting] = useState(true);
  const dispatch = useDispatch();
  const getLoggedInUser = async () => {
    try {
      const response = await fetch(url, {
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });

      const user = await response.json();
      setIsFormSubmitting(false)
      if (user?.message) {
        dispatch(removeUserLoader());
        dispatch(setServerError(user?.message));

        return;
      }
      dispatch(addUser(user));
    } catch (error) {
      dispatch(removeUserLoader());
      dispatch(setServerError(error?.message));
      setIsFormSubmitting(false)
    } 
  };

  useEffect(() => {
    getLoggedInUser();
  }, []);

  return {
    isFormSubmitting
  }
};
