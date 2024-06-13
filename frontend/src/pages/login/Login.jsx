import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const {loading,login} = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({username,password});
  }

  return (
    <div className="flex flex-col item-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 round shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3x1 font-semibold text-center text-gray-500">
          {" "}

          <span className="text-gray-700"> MyChat</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10 bg-gray-300"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10 bg-gray-300"
              onChange={(e) => setPassword(e.target.value)}

            />
          </div>

          <Link to={"/signup"} className="link link-hover ">
            Don't have an account?
          </Link>

          <div>
          <button className="btn btn-block btn-active btn-ghost"
          disabled={loading}>
            {loading ? <span className="loading loading-spinner"></span> : "Login"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Login;
