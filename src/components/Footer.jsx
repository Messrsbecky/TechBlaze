/* eslint-disable no-undef */
import { useState } from "react";
import logo from "../assets/icons/NOMADHAVEN teal.svg";
import { toast } from "react-toastify";
import Spinner from "../assets/icons/Spinner.svg";

const Footer = () => {
  const [email, setEmail] = useState("");
 const [isLoading, setIsLoading] = useState(false); 


 const handleSubmit = async (e) => {
   e.preventDefault();



   try {
          setIsLoading(true);
     const response = await fetch("http://localhost:3000/subscribe", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({ email }),
     });

     const result = await response.json();

     if (response.ok) {
       setIsLoading(false);
       toast.success("Subscription successful!");
     //  alert(result.message);
     } else {
     setIsLoading(false);
       toast.error(`Subscription failed: ${result.error}`);
     }
   } catch (error) {
     setIsLoading(false);
    // console.error("Error:", error);
     toast.error("Failed to subscribe. Please try again later.");
   }
 };


  return (
    <div className="bg-[#000A0A] footer px-6 py-20 border-2 border-purple-600">
      <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:items-center lg:gap-40 border-2 border-blue-500">
        <div className="flex flex-col gap-6  lg:w-3/5 border-2 border-green-400">
          <section className="mb-6 border">
            <img
              src={logo}
              alt="Nomadhaven logo"
              width={230}
              className="sm:mx-auto lg:mx-0 "
            />
          </section>
          <section>
            <ul className="flex flex-col gap-2 sm:flex-row sm:justify-around sm:gap-0 border-2 border-red-400">
              <li>How to use</li>
              <li>Hotspots</li>
              <li>Features</li>
              <li>Events</li>
            </ul>
          </section>
        </div>
        <section className="lg:w-2/5 border-2 border-orange-300">
          <form
            onSubmit={handleSubmit}
            className="mx-auto sm:flex justify-between gap-4 border-2"
          >
            <div className=" mb-4 sm:w-4/5 sm:mb-0 border-2 border-teal-400">
              <label
                htmlFor="email"
                className="block mb-4 text-base font-semibold text-White"
              >
                Join our news letter
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email here"
                required
                className="inputFill sm:w-full"
              />
            </div>
            <div className=" sm:col-span-2 sm:w-fit place-content-end border-2 border-lime-300">
              <button type="submit" className="primaryBtn ml-auto sm:mx-0">
                {isLoading ? (
                  <img
                    src={Spinner}
                    alt="Loading..."
                    className="w-5 h-5 mx-auto"
                  />
                ) : (
                  <>Subscribe</>
                )}
              </button>
            </div>
          </form>
        </section>
      </div>
      <section className="border-t border-white pt-6 mt-[60px] text-center">
        <p>
          <small>C 2024 NomadHaven. All Rights Reserved</small>
        </p>
      </section>
    </div>
  );
};

export default Footer;