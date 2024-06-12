import menu from "../assets/icons/Menu.svg"
import nomadHavenLogo from "../assets/icons/NOMADHAVEN teal.svg"
const Navbar = () => {
  return (
    <div>
      <div>
        <img src={nomadHavenLogo} alt="NomadHaven logo " />
      </div>
      <div>
        <div>
          <ul>
            <li>How to use</li>
            <li>Hotspots</li>
            <li>Features</li>
            <li>Events</li>
          </ul>
        </div>
        <div>
          <div>
            <button>Login</button>
          </div>
          <div>
            <button>Sign up for free</button>
          </div>
        </div>
      </div>
      <div>
        <img src={menu} alt="menu icon" />
      </div>
    </div>
  );
};

export default Navbar;
