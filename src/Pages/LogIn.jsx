import React from "react";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };

  const handelUserLogin = (evt) => {
    evt.preventDefault();
    console.log("LOGGED !");
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
          onSubmit={handelUserLogin}
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
              type="email"
              id="email"
              placeholder="abc@gmail.com"
              className="border px-4 py-2 w-full rounded-sm"
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="password@123"
              className="border px-4 py-2 w-full rounded-sm"
            />
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
