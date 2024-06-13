import React, { useState } from "react";
import { Link } from "react-router-dom";
import GenderDropdown from "./GenderDropdown";
import useSignup from "../../hooks/useSignup";

const Signup = () => {

  const [inputs,setInputs] = useState({
    fullName:'',
    username:'',
    password:'',
    confirmPassword:'',
    gender:''
  });

  const {loading, signup} = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs)
    await signup(inputs)

  }

  const handleGenderChoice = (gender) => {
    setInputs({...inputs,gender})
  }

  return (
    <div className="flex flex-col item-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 round shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3x1 font-semibold text-center text-gray-400">
          {" "}
          <span className="text-red-400"> MyChat</span>
          <span> Signup</span>
        </h1>
        <form onSubmit={handleSubmit}>

        <div className="flex flex-col items-center">
            <label className="label p-2">
              <span className="text-base label-text flex justify-center"></span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name "
              className="w-150 input input-bordered h-10 item-center"
              value={inputs.fullName}
              onChange={(e)=> setInputs({...inputs,fullName:e.target.value})}
            />
          </div>


          <div className="flex flex-col items-center">
            <label className="label p-2">
              <span className="text-base label-text"></span>
            </label>
            <input
              type="text"
              placeholder="Enter your Username"
              className="w-150 input input-bordered h-10"
              value={inputs.username}
              onChange={(e)=> setInputs({...inputs,username:e.target.value})}
            />
          </div>


          <div className="flex flex-col items-center">
            <label className="label p-2">
              <span className="text-base label-text"></span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-150 input input-bordered h-10"
              value={inputs.password}
              onChange={(e)=> setInputs({...inputs,password:e.target.value})}
            />
          </div>

          <div className="flex flex-col items-center">
            <label className="label p-2">
              <span className="text-base label-text"></span>
            </label>
            <input
              type="password"
              placeholder="Enter password again"
              className="w-150 input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e)=> setInputs({...inputs,confirmPassword:e.target.value})}
            />
          </div>

          <GenderDropdown handleSelect={handleGenderChoice}/>


          <div>
            <button className="btn btn-block btn-active btn-ghost"
            disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span> : "Signup"}
            </button>
          </div>
          
          <Link to={"/login"} className="link link-hover ">Already have an account?</Link>

        </form>
      </div>
    </div>
  );
};

export default Signup;
