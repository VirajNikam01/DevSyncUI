import React from 'react'
import { useNavigate } from 'react-router-dom';

const SignUpIntro = () => {
    const navigate = useNavigate();
    const goToSigninPage = () => {
      navigate("/signin");
    };
  return (
    <div className="text-center border max-w-screen-xl mx-auto py-10">
    <h1 className="text-2xl sm:text-5xl sm:font-medium sm:my-2">
      You’ve made it this far.
    </h1>
    <h1 className="text-2xl sm:text-5xl sm:font-medium sm:my-2">
      {" "}
      Let’s build your first Team
    </h1>
    <p className=" my-2 text-sm font-extralight sm:font-normal">
      DevSync is free to get started with.
    </p>
    <button
      onClick={goToSigninPage}
      className="bg-teal-600 px-6 py-2 rounded-sm"
    >
      Sign up for free
    </button>
  </div>
  )
}

export default SignUpIntro
