import logo from "../../../assets/icons/NOMADHAVEN teal.svg";
import menuIcon from "../../../assets/icons/Menu.svg";
import homeIcon from "../../../assets/icons/Home.svg";
import eventsIcon from "../../../assets/icons/calender.svg";
import chatBuddyIcon from "../../../assets/icons/message chat.svg";
import hotspotIcon from "../../../assets/icons/Location.svg";
import settingIcon from "../../../assets/icons/settings.svg";
import supportIcon from "../../../assets/icons/customer-service.svg";
import communityIcon from "../../../assets/icons/community-group.svg";
import niphemy from "../../../assets/images/landingpage/niphemi.svg";
import dropdownIcon from "../../../assets/icons/Dropdown.svg";
import { useState } from "react";
const SideNav = () => {
  const [cards, setCards] = useState([
    {
      img: homeIcon,
      alt: "home icon",
      title: "Home",
      id: 1,
    },
    {
      img: hotspotIcon,
      alt: "hotspot icon",
      title: "Hotspots",
      id: 2,
    },
    {
      img: eventsIcon,
      alt: "events icon",
      title: "Events",
      id: 3,
    },
    {
      img: chatBuddyIcon,
      alt: "chatbuddy icon",
      title: "Chat buddy",
      id: 4,
    },
  ]);
  return (
    <nav className="flex flex-col gap-10 items-center border-4 px-4 py-9 ">
      <div className="mt-auto h-10" >
        <img src={logo} alt="nomadHaven logo" width={190}  />
        </div>
      <div className="flex flex-col justify-between">
        <section className="flex flex-col mb-20 ">
          <h5 className="mb-4">MANAGE</h5>
          {cards.map((card) => (
            <div
              className="flex items-center  hover:border-mintGreen hover:bg-mintGreen gap-4 mb-6 px-4 py-2 rounded-lg"
              key={card.id}
            >
              <img src={card.img} alt="home icon" />
              <p>{card.title}</p>
            </div>
          ))}
        </section>

        <div className=" flex flex-col gap-10  mb-auto">
          <section className="">
            <h5 className="mb-4">PREFERENCE</h5>
            <div>
              <div className="flex items-center  hover:border-mintGreen hover:bg-mintGreen gap-4 mb-6 px-4 py-2 rounded-lg">
                <img src={settingIcon} alt="settings icon" />
                <p>Settings</p>
              </div>
              <div className="flex items-center  hover:border-mintGreen hover:bg-mintGreen gap-4 mb-6 px-4 py-2 rounded-lg">
                <img src={supportIcon} alt="help & support icon" />
                <p>Help & Support</p>
              </div>
              <div className="flex items-center  hover:border-mintGreen hover:bg-mintGreen gap-4 mb-6 px-4 py-2  rounded-lg">
                <img src={communityIcon} alt="community icon" />
                <p>Community</p>
              </div>
            </div>
          </section>
          <section className="flex items-center gap-4 ">
            <img src={niphemy} alt="user profile" />
            <div className="flex items-center gap-1">
              <p>niphemy@gmail.com</p>
              <img src={dropdownIcon} alt="dropdown icon" width={18}/>
            </div>
          </section>
        </div>
      </div>
      <section className=" sm:hidden">
        <img src={menuIcon} alt="menu icon" />
      </section>
    </nav>
  );
};

export default SideNav;
