import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import menu from "../assets/icons/Menu.svg";
import nomadHavenLogo from "../assets/icons/NOMADHAVEN teal.svg";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white opacity-[0.8] flex justify-between items-center pt-9 px-4 md:px-20 pb-5 nav">
      <div className="">
        <NavLink to="/">
          <img src={nomadHavenLogo} alt="NomadHaven logo " />
        </NavLink>
      </div>
      <div className=" justify-between w-[72%] hidden lg:flex">
        <div className=" flex justify-around w-1/2">
          <ul className="flex gap-2 items-center justify-around w-full footer-ul">
            <NavLink to="how to use">
              <li>How to use</li>
            </NavLink>
            <NavLink to="hotspots">
              <li>Hotspots</li>
            </NavLink>
            <NavLink to="features">
              <li>Features</li>
            </NavLink>
            <NavLink to="events">
              <li>Events</li>
            </NavLink>
          </ul>
        </div>
        <div className="flex ml-auto gap-2 w-fit items-center justify-center">
          <div>
            <button className="secondaryBtn text-Black">Login</button>
          </div>
          <div>
            <button className="primaryBtn">Sign up for free</button>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <img src={menu} alt="menu icon" />
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white opacity-95 border-t border-gray-300 z-50 lg:hidden">
          <div className="flex flex-col items-center py-4">
            <ul className="flex flex-col gap-4 items-center">
              <NavLink to="how to use">
                <li>How to use</li>
              </NavLink>
              <NavLink to="hotspots">
                <li>Hotspots</li>
              </NavLink>
              <NavLink to="features">
                <li>Features</li>
              </NavLink>
              <NavLink to="events">
                <li>Events</li>
              </NavLink>
            </ul>
            <div className="flex flex-col mt-4 gap-2">
              <button className="secondaryBtn text-black">Login</button>
              <button className="primaryBtn">Sign up for free</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
