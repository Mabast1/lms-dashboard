import React from "react";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import axios from "axios";

import logo from "../data/logo.jpg";
import { client } from "../utils/client";
import useAuthStore from "../store/authStore";

const Login = () => {
  const { addUser } = useAuthStore();

  const createOrGetUser = async (res, addUser) => {
    const decoded = jwt_decode(res.credential);

    const { name, picture, sub, email } = decoded;

    const user = {
      _id: sub,
      _type: "user",
      userName: name,
      image: picture,
      email: email,
    };

    addUser(user);

    client.createIfNotExists(user).then((res) => {
      res.status(200).json("Login successful");
    });
  };

  return (
    <div className="flex h-[100vh] justify-center items-center bg-main-bg">
      <div className="w-full bg-white max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex justify-center">
          <a href="/">
            <img src={logo} alt="logo" className="w-32 mb-4" />
          </a>
        </div>
        <h2 className="mb-3 text-xl font-semibold text-center">
          Login to your account
        </h2>
        <p className="text-sm text-center dark:text-gray-400">
          Dont have account?
          <a
            href="/"
            rel="noopener noreferrer"
            className="focus:underline hover:underline"
          >
            {" "}
            Sign up here
          </a>
        </p>
        <div className="my-6 space-y-4 flex justify-center">
          <GoogleLogin
            useOneTap
            onSuccess={(res) => createOrGetUser(res, addUser)}
            onFailure={(err) => console.log(err)}
          />
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-400" />
          <p className="px-3 dark:text-gray-400">OR</p>
          <hr className="w-full dark:text-gray-400" />
        </div>
        <form
          novalidate=""
          action=""
          className="space-y-8 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <label for="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="user@example.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label for="password" className="text-sm">
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="/"
                  className="text-xs hover:underline dark:text-gray-400"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
          </div>
          <button className="bg-[#614dbb] text-white hover:bg-[#7460ea] block w-full p-3 text-center rounded-lg dark:text-gray-900 dark:bg-violet-400">
            Sign in
          </button>
        </form>
      </div>

      {/* <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white dark:bg-gray-900 dark:text-gray-100">
        <div className="flex justify-center">
          <a href="/">
            <img src={logo} alt="logo" className="w-32 mb-4" />
          </a>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold text-center">Sign In</p>
          <a
            href="/"
            className="text-sm text-center cursor-pointer hover:underline"
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
            <GoogleLogin
              onSuccess={(res) => createOrGetUser(res, addUser)}
              onFailure={(err) => console.log(err)}
            />
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
      </div> */}
    </div>
  );
};

export default Login;
