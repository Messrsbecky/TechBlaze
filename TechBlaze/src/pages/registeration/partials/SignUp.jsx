import { useState } from "react";
import google from "../../../assets/icons/google.svg";
import { signUp, signInWithGoogle } from "../functions/authService"; //addition
import { writeUserData } from "../functions/database"; //addition
import Spinner from "../../../assets/icons/Spinner.svg"; //addition
import Swal from "sweetalert2"; //addition
//import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
//import {auth} from '../functions/firebaseConfig'

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //addition
  const [confirmPassword, setConfirmPassword] = useState(""); // addition
  const [setError] = useState(null);
  const [setUserId] = useState("");
  const [isLoading, setIsLoading] = useState(false); //addition

  const handleSubmit = async (event) => {
    event.preventDefault();
    //console.log("Email:", email);
    //  console.log("Password:", password);
    // Handle form submission here

    //addition

    // TOAST CONFIG
    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });

    if (!email || !password || confirmPassword === " ") {
      Toast.fire({
        icon: "error",
        title: "Fields can't be empty",
      });
      setError("Please enter both email and password");

      return;
    }
    if (password !== confirmPassword) {
      Toast.fire({
        icon: "error",
        title: "Passwords do not match",
      });
      setError("Password must be equal");
      return;
    }
    try {
      setIsLoading(true);

      const user = await signUp(email, password);
      setUserId(user.uid); // Set user ID
      writeUserData(user.uid, email);
      setIsLoading(false);
      //alert("User created successfully!");
      setError(null);
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  };

  // const handleGoogle = async (e) =>{
  //     e.preventDefault();
  //   const provider = await new GoogleAuthProvider();
  //   return signInWithPopup(auth, provider)
  // }

  const handleGoogleSignUp = async () => {
    try {
      setIsLoading(true);
      const user = await signInWithGoogle();
      setUserId(user.uid);
      await writeUserData(user.uid, user.email);

      setIsLoading(false);
      setError(null);
    } catch (err) {
      setIsLoading(false);

      setError(err.message);
    }
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
              value={confirmPassword} //addition (from password)
              onChange={(e) => setConfirmPassword(e.target.value)} //addition (from setPassword)
              placeholder="Enter password"
              required
              className="w-full inputFill"
            />
          </div>
        </section>
        <section className="w-full flex flex-col items-center gap-6">
          {/* <input
            id="submit"
            type="submit"
            value="Sign up"
            className="w-full primaryBtn"
          /> */}

          <button id="submit" type="submit" className="w-full primaryBtn">
            {isLoading ? (
              <img src={Spinner} alt="Loading..." className="w-5 h-5 mx-auto" />
            ) : (
              "Sign up"
            )}
          </button>

          {/* <button type="button" onClick={handleGoogleSignIn}
          className=" secondaryBtn gap-2 w-full">
            <img src={google} alt="google icon" className="w-5 h-5" />
            Sign up with google
          </button> */}

          <button
            type="button"
            className="secondaryBtn gap-2 w-full"
            onClick={handleGoogleSignUp}
            disabled={isLoading}
          >
            {isLoading ? (
              <img src={Spinner} alt="Loading..." className="w-5 h-5 mx-auto" />
            ) : (
              <>
                <img src={google} alt="google icon" className="w-5 h-5" />
                Sign up with Google
              </>
            )}
          </button>
        </section>
      </div>
      <section className="text-center">
        <p>
          Have an account already?
          <span className="text-yellow-500 cursor-pointer font-bold ">
            {" "}
            Log in
          </span>
        </p>
      </section>
    </form>
  );
};

export default Signup;
