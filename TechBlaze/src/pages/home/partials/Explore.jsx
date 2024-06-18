import { useState } from "react";
import arrow from "../../../assets/icons/Right arrow.svg";
import bulletin from "../../../assets/icons/yellow-bulletin.svg";
import mobile from "../../../assets/images/landingpage/phone-component.svg";
const Explore = () => {
  const [cards, setCards] = useState([
    {
      description:
        "Stay updated with an extensive directory of concerts, festivals,workshops, and more.",
      id: 1,
    },
    {
      description:
        "Explore handpicked recommendations of must-visit places and hidden gems.",
      id: 2,
    },
    {
      description:
        "Get the latest information on events and places, right when you need it.",
      id: 3,
    },
  ]);
  return (
    <section className="bg-[#004D4D] rounded-2xl mx-4 sm:mx-8 md:mx-16 lg:mx-20 sm:pt-8 md:pt-24 lg:pt-14 mb-40 flex place-content-center ">
      <div className="border-2 border-purple-600 pt-6 rounded-2xl px-12   flex flex-col   lg:flex-row lg:px-20 justify-between items-center gap-20">
        <div className="border border-yellow-500 flex flex-col gap-4 sm:mr-24 md:mr-40 lg:mr-0">
          <div>
            <h1 className="text-White">Explore Naija with NomadHaven</h1>
          </div>
          <div className=" flex flex-col gap-4 border-4 ">
            {cards.map((card) => (
              <div className="flex items-center gap-6 border" key={card.id}>
                <img src={bulletin} alt="bullet points image" />
                <p className="text-White">{card.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <button className="primaryBtn">
              Start exploring now <img src={arrow} alt="arrow icon" />
            </button>
          </div>
        </div>
        <div>
          <img src={mobile} alt="mobile view of a part in lagos" width={700} />
        </div>
      </div>
    </section>
  );
};

export default Explore;
