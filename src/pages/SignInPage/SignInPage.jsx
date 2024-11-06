import { Login } from "../../components";
import React from "react";

const SignInPage = () => {
  return (
    <div className="px-24 py-10 border border-solid border-stone-200 bg-stone-900 rounded-md">
      <div className="w-[20rem] text-white">
        <h1 className="font-medium text-center">VOCA</h1>
        <h2 className="font-semibold text-center">Task</h2>
        <Login />
      </div>
    </div>
  );
};

export default SignInPage;
