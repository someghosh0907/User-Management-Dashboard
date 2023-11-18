import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../store";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputs.email || !inputs.password) {
      setError("All Fields Are Necessary");
    }
    try {
      const { data } = await axios.post(
        "http://localhost:3400/api/v1/user/login",
        {
          email: inputs.email,
          password: inputs.password,
        }
      );
      if (data.success) {
        localStorage.setItem("userId", data?.user._id);
        dispatch(authActions.login());
        console.log("User login Successfully");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      alert("Please Register Before Logging In!!!!");
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Login</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            className=" text-black"
            onChange={handleChange}
            placeholder="Email"
          ></input>
          <input
            type="password"
            className=" text-black"
            onChange={handleChange}
            placeholder="Password"
          ></input>
          <button className=" border-green-400 text-white">Login</button>
          {error && (
            <div className="bg-red-500 text-white font-bold cursor-pointer px-6 py-2">
              {error}
            </div>
          )}
          <div className="redirect">
            <Link to="/register">
              Don't Have An Account<span className="underline">Register</span>{" "}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

//<Link className="text-sm mt-3 text-right" href={"/register"}>Don't Have An Account<span className='underline'>Register</span> </Link>
