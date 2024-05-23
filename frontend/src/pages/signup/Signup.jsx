import React from "react";

const Signup = () => {
  return (
    <div className="flex flex-col item-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 round shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3x1 font-semibold text-center text-gray-400">
          {" "}
          <span className="text-red-400"> MyChat</span>
          <span> Signup</span>
        </h1>
        <form>
          <div class="flex flex-col items-center">
            <label className="label p-2">
              <span className="text-base label-text"></span>
            </label>
            <input
              type="text"
              placeholder="Enter your Username"
              className="w-150 input input-bordered h-10"
            />
          </div>

          <div class="flex flex-col items-center">
            <label className="label p-2">
              <span className="text-base label-text flex justify-center"></span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name "
              className="w-150 input input-bordered h-10 item-center"
            />
          </div>

          <div class="flex flex-col items-center">
            <label className="label p-2">
              <span className="text-base label-text"></span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-150 input input-bordered h-10"
            />
          </div>

          <div class="flex flex-col items-center">
            <label className="label p-2">
              <span className="text-base label-text"></span>
            </label>
            <input
              type="password"
              placeholder="Enter password again"
              className="w-150 input input-bordered h-10"
            />
          </div>

          <div className="dropdown w-100 py-2 flex flex-col items-center">
            <div tabIndex={0} role="button" className="btn m-1">
              Choose gender
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 h-100"
            >
              <li>
                <a>Male</a>
              </li>
              <li>
                <a>Female</a>
              </li>
            </ul>
          </div>


          <div>
            <button className="btn btn-block btn-active btn-ghost">
              Sign up
            </button>
          </div>
          
          <a className="link link-hover ">Already have an account?</a>

        </form>
      </div>
    </div>
  );
};

export default Signup;
