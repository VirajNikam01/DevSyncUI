import React from "react";

const SignInForm = () => {
  return (
    <form
      action=""
      className="border sm:w-1/2 w-full p-10 flex flex-col gap-1 "
    >
      <h1 className="text-3xl mb-3">
        Register<span className="text-red-700 font-bold">.</span>
      </h1>

      <h1 className="text-xl mt-10">Personal</h1>
      <div className=" flex flex-col gap-5">
        <div>
          <label className="block mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Jhon Doe"
            className="border px-4 py-2 w-full rounded-sm"
          />
        </div>
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
          <label className="block mb-1" htmlFor="gender">
            Gender
          </label>
          <select
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
              <input type="checkbox" name="lang" />
            </div>
            <div>
              <label htmlFor="react" className="mr-2">
                React
              </label>
              <input type="checkbox" name="lang" />
            </div>
            <div>
              <label htmlFor="angular" className="mr-2">
                Angular
              </label>
              <input type="checkbox" name="lang" />
            </div>
            <div>
              <label htmlFor="node" className="mr-2">
                Node
              </label>
              <input type="checkbox" name="lang" />
            </div>
            <div>
              <label htmlFor="java" className="mr-2">
                Java
              </label>
              <input type="checkbox" name="lang" />
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="designation" className="block mb-1">
            Designation
          </label>
          <select
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
