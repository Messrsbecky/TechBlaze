import React, { useState } from "react";
import google from "../../../assets/icons/google.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // Handle form submission here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-12 items-center justify-center mx-4 my-12"
    >
      <div className="text-center">
        <h2>Welcome to Nomadhaven</h2>
        <p>Create your account to explore the hidden gems</p>
      </div>
      <div className="w-full flex flex-col gap-11 justify-center items-center">
        <section className=" flex flex-col gap-5 w-full">
          <div className="">
            <label
              htmlFor="email"
              className="block mb-2 text-base font-semibold"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email here"
              required
              className="w-full inputFill"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-2 text-base font-semibold"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
              className="w-full inputFill"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="Confirm password"
              className="block mb-2 
text-base font-semibold"
            >
             Confirm Password
            </label>
            <input
              type="confirmPassword"
              id="comfirmPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
              className="w-full inputFill"
            />
          </div>
        </section>
        <section className="w-full flex flex-col items-center gap-6">
          <input type="submit" value="Sign up" className="w-full primaryBtn" />
          <button type="button" className=" secondaryBtn gap-2 w-full">
            <img src={google} alt="google icon" className="w-5 h-5" />
            Sign up with google
          </button>
        </section>
      </div>
      <section className="text-center">
        <p>
        Have an account already?
          <span className="text-yellow-500 cursor-pointer font-bold "> Log in</span>
        </p>
      </section>
    </form>
  );
};

export default Login;
