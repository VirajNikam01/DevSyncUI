import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const goBack = () => {
    navigate("/");
  };

  const handelUserLogin = (evt) => {
    console.log(evt, "EVT");

    try {
    } catch (error) {}
  };

  scrollTo(0, 0);
  return (
    <div className="w-full mb-20">
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

          <button className="bg-teal-600 rounded-sm py-2 font-medium">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
