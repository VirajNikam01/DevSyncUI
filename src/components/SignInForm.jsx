import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const userAges = Array.from({ length: 30 }, (_, i) => i + 15);

const SignInForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const handelUserRegister = async (evt) => {
    console.log("User Registered", evt);

    try {
      const response = await fetch("http://localhost:7777/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(evt),
        credentials: "include",
      });

      const data = await response.json();
      if (data.message === "user registered") {
        navigate("/login");
      }
    } catch (error) {
      console.log(error, "SIGN IN ERROE");
      navigate("/downtime");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(handelUserRegister)}
      className="border sm:w-1/2 w-full p-10 flex flex-col gap-1 "
    >
      <h1 className="text-3xl mb-3">
        Register<span className="text-red-700 font-bold">.</span>
      </h1>
      <p className="text-xs text-white/60">Fields marked * are compulsary</p>

      <h1 className="text-xl mt-10">Profile</h1>
      <div className=" flex flex-col gap-5">
        <div>
          <label className="block mb-1" htmlFor="firstname">
            First Name <span>*</span>
          </label>
          <input
            {...register("firstName", {
              required: true,
              minLength: 2,
            })}
            type="text"
            id="firstname"
            placeholder="Jhon"
            className="border px-4 py-2 w-full rounded-sm"
          />
          {errors?.name && (
            <p className="text-xs text-red-800 mt-1">Enter valid Name</p>
          )}
        </div>
        <div>
          <label className="block mb-1" htmlFor="lastname">
            Last Name <span>*</span>
          </label>
          <input
            {...register("lastName", {
              required: true,
              minLength: 2,
            })}
            type="text"
            id="lastname"
            placeholder="Doe"
            className="border px-4 py-2 w-full rounded-sm"
          />
          {errors?.name && (
            <p className="text-xs text-red-800 mt-1">Enter valid Name</p>
          )}
        </div>
        <div>
          <label className="block mb-1" htmlFor="photoUrl">
            Photo URL
          </label>
          <input
            {...register("photoUrl", {
              minLength: 2,
            })}
            type="url"
            id="photoUrl"
            placeholder="https://images.unsplash.com/photo-1729205940313-ec6f3ccbbc63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
            className="border px-4 py-2 w-full rounded-sm"
          />
          {errors?.name && (
            <p className="text-xs text-red-800 mt-1">Enter valid Name</p>
          )}
        </div>
        <div>
          <label className="block mb-1" htmlFor="email">
            Email <span>*</span>
          </label>
          <input
            {...register("emailId", {
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            })}
            type="email"
            id="email"
            placeholder="abc@gmail.com"
            className="border px-4 py-2 w-full rounded-sm"
          />
          {errors?.email && (
            <p className="text-xs text-red-800 mt-1">Enter valid Email</p>
          )}
        </div>
        <div>
          <label className="block mb-1" htmlFor="password">
            Password <span>*</span>
          </label>
          <input
            {...register("password", {
              required: true,
              minLength: 6,
            })}
            type="password"
            id="password"
            placeholder="password@123"
            className="border px-4 py-2 w-full rounded-sm"
          />
          {errors?.password && (
            <p className="text-xs text-red-800 mt-1">Enter valid Password</p>
          )}
        </div>
      </div>

      <h1 className="text-xl mt-10">Personal</h1>
      <div className=" flex flex-col gap-5">
        <div>
          <label className="block mb-1" htmlFor="gender">
            Gender
          </label>
          <select
            {...register("gender")}
            name="gender"
            id="gender"
            className="border px-4 py-2 w-full rounded-sm"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Say Not to Specify</option>
          </select>
        </div>
        <div>
          <label className="block mb-1" htmlFor="age">
            Age
          </label>
          <select
            {...register("age")}
            name="age"
            id="age"
            className="border px-4 py-2 w-full rounded-sm"
          >
            {userAges.map((age) => {
              return (
                <option key={age} value={age}>
                  {age}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <h1 className="text-xl mt-10">Technology</h1>
      <div className=" flex flex-col gap-5">
        <div>
          <label className="block mb-1" htmlFor="">
            Languages
          </label>
          <div className="flex gap-x-10 flex-wrap">
            <div>
              <label htmlFor="js" className="mr-2">
                Javascript
              </label>
              <input
                {...register("skills")}
                value="javascript"
                type="checkbox"
              />
            </div>
            <div>
              <label htmlFor="react" className="mr-2">
                React
              </label>
              <input {...register("skills")} value="react" type="checkbox" />
            </div>
            <div>
              <label htmlFor="angular" className="mr-2">
                Angular
              </label>
              <input {...register("skills")} value="angular" type="checkbox" />
            </div>
            <div>
              <label htmlFor="node" className="mr-2">
                Node
              </label>
              <input {...register("skills")} value="node" type="checkbox" />
            </div>
            <div>
              <label htmlFor="java" className="mr-2">
                Java
              </label>
              <input {...register("skills")} value="java" type="checkbox" />
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="designation" className="block mb-1">
            Designation
          </label>
          <select
            {...register("designation")}
            name="designation"
            id="designation"
            className="border px-4 py-2 w-full rounded-sm"
          >
            <option value="SDE">Software Development Engineer</option>
            <option value="React Developer">React Developer</option>
            <option value="AI Engineer">AI Engineer</option>
            <option value="Node Developer">NodeJs Developer</option>
          </select>
        </div>
        <div>
          <label className="block mb-1" htmlFor="about">
            Description [About]
          </label>
          <textarea
            {...register("about")}
            id="about"
            placeholder="Hello I'm John Doe, SDE@Google"
            className="border px-4 py-2 w-full rounded-sm"
          />
        </div>
      </div>

      <button className="bg-teal-600 rounded-sm py-2 font-medium my-10">
        Register
      </button>
    </form>
  );
};

export default SignInForm;
