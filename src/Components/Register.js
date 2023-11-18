import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputs.email || !inputs.password || !inputs.name) {
      setError("All Fields Are Necessary");
    }
    try {
      const { data } = await axios.post(
        "http://localhost:3400/api/v1/user/register",
        {
          username: inputs.name,
          email: inputs.email,
          password: inputs.password,
        }
      );
      if (data.success) {
        console.log("User Register Successfully");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Registration</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            className=" text-black"
            onChange={handleChange}
            placeholder="Name"
          />
          <input
            type="text"
            className=" text-black"
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            type="password"
            className=" text-black"
            onChange={handleChange}
            placeholder="Password"
          />
          <button type="submit" className=" bg-green-400 text-white">
            Register
          </button>
          {error && (
            <div className="bg-red-500 text-white font-bold cursor-pointer px-6 py-2">
              {error}
            </div>
          )}
          <div className="redirect">
            <Link to="/login">
              Already Registered<span className="underline"> Login..</span>{" "}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

//<Link className="text-sm mt-3 text-right" href={"/"}>Already Registered?<span className='underline'>Go to login</span> </Link>
