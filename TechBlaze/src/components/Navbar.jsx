import menu from "../assets/icons/Menu.svg"
import nomadHavenLogo from "../assets/icons/NOMADHAVEN teal.svg"
const Navbar = () => {
  return (
    <header className="bg-white opacity-[0.8] flex justify-between items-center border-2 border-pink-500 pt-9 px-4 md:px-20 pb-5 nav">
      <div className="border-purple-400 border-2 ">
        <img src={nomadHavenLogo} alt="NomadHaven logo " />
      </div>
      <div className=" justify-between border-2 border-red-600 w-[72%] hidden lg:flex">
        <div className="border-2 border-yellow-400 flex justify-around w-1/2">
          <ul className="flex gap-2 items-center justify-around border-2 border-green-500 w-full footer-ul">
            <li>How to use</li>
            <li>Hotspots</li>
            <li>Features</li>
            <li>Events</li>
          </ul>
        </div>
        <div className="border-2 border-blue-500 flex ml-auto gap-2 w-fit items-center justify-center">
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
    </header>
  );
};

export default Navbar;
