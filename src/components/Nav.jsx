import { useState } from "react";
import { NavLink } from "react-router-dom";
import menu from "../assets/icons/Menu.svg";
import nomadHavenLogo from "../assets/icons/NOMADHAVEN teal.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white opacity-[0.8] flex justify-between items-center pt-9 px-4 md:px-20 pb-5 nav">
      <div>
        <NavLink to="/">
          <img src={nomadHavenLogo} alt="NomadHaven logo" />
        </NavLink>
      </div>
      <div className="justify-between w-[72%] hidden lg:flex">
        <div className="flex justify-around w-1/2">
          <ul className="flex gap-2 items-center justify-around w-full footer-ul">
            <li>
              <NavLink to="/how-to-use">How to use</NavLink>
            </li>
            <li>
              <NavLink to="/hotspots">Hotspots</NavLink>
            </li>
            <li>
              <NavLink to="/features">Features</NavLink>
            </li>
            <li>
              <NavLink to="/events">Events</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex ml-auto gap-2 w-fit items-center justify-center">
          <NavLink to="/login" className="secondaryBtn text-black">
            Login
          </NavLink>
          <NavLink to="/signup" className="primaryBtn">
            Sign up for free
          </NavLink>
        </div>
      </div>
      <div className="lg:hidden" onClick={toggleMenu}>
        <img src={menu} alt="menu icon" />
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white opacity-95 border-t border-gray-300 lg:hidden">
          <div className="flex flex-col items-center py-4">
            <ul className="flex flex-col gap-4 items-center">
              <li>
                <NavLink to="/how-to-use">How to use</NavLink>
              </li>
              <li>
                <NavLink to="/hotspots">Hotspots</NavLink>
              </li>
              <li>
                <NavLink to="/features">Features</NavLink>
              </li>
              <li>
                <NavLink to="/events">Events</NavLink>
              </li>
            </ul>
            <div className="flex flex-col mt-4 gap-2">
              <NavLink to="/login" className="secondaryBtn text-black">
                Login
              </NavLink>
              <NavLink to="/signup" className="primaryBtn">
                Sign up for free
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
