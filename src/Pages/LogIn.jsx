import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import DownTimePopUp from "../components/DownTimePopUp";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/userSlice";
import Loader from "../components/Loader";
import { LIVE_URL } from "../utils/helper";
import { UserLogin } from "../api/auth";

const LogIn = () => {
  const [serverError, setServerError] = useState(null);
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "virajnikam@gmail.com",
      password: "Viraj@123",
    },
  });

  const goBack = () => {
    navigate("/");
  };

  const handelUserLogin = async (evt) => {
    setIsFormSubmitting(true);
    try {
      const data = await UserLogin(evt);
      setIsFormSubmitting(false);
      if (data?.message) {
        return setServerError(data.message);
      }

      dispatch(addUser(data));

      navigate("/feed");
    } catch (error) {
      setIsFormSubmitting(false);
      navigate("/downtime");
      console.log(error, "ERRROR");
    }
  };

  const goToRegisterPage = () => {
    navigate("/signin");
  };

  scrollTo(0, 0);
  return (
    <div className={`w-full mb-20 `}>
      <div className="m-5 flex items-center gap-3">
        <div
          onClick={goBack}
          className="back h-10 w-10 cursor-pointer flex items-center justify-center select-none border rounded-full"
        >
          {"<"}
        </div>
        <span>Home</span>
      </div>

      <div className="form w-full flex justify-center items-center flex-col ">
        <form
          onSubmit={handleSubmit(handelUserLogin)}
          className="border sm:w-1/2 w-full p-10 flex flex-col gap-5 "
        >
          <h1 className="text-3xl mb-3">
            LogIn<span className="text-red-700 font-bold">.</span>
          </h1>

          <p
            className={`text-sm text-red-600 duration-500 ${
              serverError ? "h-5" : "h-0"
            } overflow-hidden`}
          >
            {serverError}
          </p>

          <div>
            <label className="block mb-1" htmlFor="email">
              Email
            </label>
            <input
              {...register("email", {
                required: true,
                pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
              })}
              type="email"
              id="email"
              placeholder="abc@gmail.com"
              className="border px-4 py-2 w-full rounded-sm"
            />
            {errors?.email && (
              <p className="text-red-700 text-sm my-1">enter valid email</p>
            )}
          </div>
          <div>
            <label className="block mb-1" htmlFor="password">
              Password
            </label>
            <input
              {...register("password", {
                minLength: 6,
                required: true,
              })}
              type="password"
              id="password"
              placeholder="password@123"
              className="border px-4 py-2 w-full rounded-sm"
            />
            {errors?.password && (
              <p className="text-red-700 text-sm my-1">enter valid password</p>
            )}
          </div>

          <button
            disabled={isFormSubmitting}
            className="bg-teal-600 rounded-sm  font-medium disabled:bg-gray-600"
          >
            {isFormSubmitting ? (
              <Loader className="w-10 mx-auto" />
            ) : (
              <p className="py-2">Login</p>
            )}
          </button>

          <div className="more-info">
            <p
              onClick={goToRegisterPage}
              className="text-sm cursor-pointer text-white/70 hover:text-sky-800"
            >
              New User, click to Register
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
