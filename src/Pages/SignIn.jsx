import React from "react";
import { useNavigate } from "react-router-dom";
import SignInForm from "../components/SignInForm";

const SignIn = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };
  scrollTo(0, 0);

  return (
    <div className="w-full">
      <div className="m-5  flex items-center gap-5">
        <div
          onClick={goBack}
          className="back h-10 w-10 cursor-pointer flex items-center justify-center select-none border rounded-full"
        >
          {"<"}
        </div>{" "}
        <h1>Home</h1>
      </div>

      <div className="form w-full flex justify-center items-center flex-col mb-16 sm:mb-10 ">
        <SignInForm />
      </div>
    </div>
  );
};

export default SignIn;
