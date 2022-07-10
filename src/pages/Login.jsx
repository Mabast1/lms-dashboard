import React from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";

import logo from "../data/logo.jpg";

const Login = () => {
  return (
    <div className="flex h-[100vh] justify-center items-center bg-main-bg">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white dark:bg-gray-900 dark:text-gray-100">
        <div className="flex justify-center">
          <img src={logo} alt="logo" className="w-32 mb-4" />
        </div>
        <div className="flex justify-between">
          <p className="text-xl font-semibold text-center">Sign In</p>
          <a
            href="/"
            className="text-md text-center cursor-pointer hover:underline"
          >
            Create an account
          </a>
        </div>
        <form
          novalidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label for="username" className="block dark:text-gray-400">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-md bg-gray-100  dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="password" className="block dark:text-gray-400">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md bg-gray-100  dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
            <div className="flex justify-end text-xs dark:text-gray-400 pt-2 hover:underline">
              <a rel="noopener noreferrer" href="/">
                Forgot Password?
              </a>
            </div>
          </div>
          <button className="bg-[#614dbb] text-white hover:bg-[#7460ea] block w-full p-3 text-center rounded-lg dark:text-gray-900 dark:bg-violet-400">
            Sign in
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button aria-label="Log in with Google" className="p-3 rounded-sm">
            <GoogleLogin />
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 dark:text-gray-400">
          Don't have an account?
          <a
            rel="noopener noreferrer"
            href="/"
            className="underline dark:text-gray-100"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
