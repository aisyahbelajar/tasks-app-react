import { Login } from "../../components";
import React from "react";

const SignInPage = () => {
  return (
    <div className="px-24 py-10 bg-[#1c1826] rounded-md">
      <div className="w-[20rem] text-white">
        <h1 className="font-bold text-[#9c7fc2] text-center">VOCA</h1>
        <h2 className="font-lg text-center">Task</h2>
        <Login />
      </div>
    </div>
  );
};

export default SignInPage;
