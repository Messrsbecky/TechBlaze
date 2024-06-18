import { useState } from "react";
import arrow from "src/assets/icons/yellow-right-arrow.svg";
import festival from "src/assets/images/landingpage/prime-friday.svg";
import seminar from "src/assets/images/landingpage/knowledge-seminar.svg";
import party from "src/assets/images/landingpage/tiki-bar.svg";
import influence from "src/assets/images/landingpage/influence.svg";
import vibes from "src/assets/images/landingpage/vibes-on-vibes.svg";
import change from "src/assets/images/landingpage/embracing-change.svg";
const Events = () => {
  const [cards, setCards] = useState([
    {
      image: festival,
      alt: " prime friday festival flier",
      title: "Prime Friday Festival",
      date: "28th August, 2024",
      location: "Ikeja, Lagos",
      id: 1,
    },
    {
      image: seminar,
      alt: "knowledge & excellence seminar flier",
      title: "Knowledge & Excellence Seminar",
      date: "29th August, 2024",
      location: "Ota, Ogun",
      id: 2,
    },
    {
      image: party,
      alt: "tiki bar party flier",
      title: "Tiki Bar Party",
      date: "21st August, 2024",
      location: "Yaba, Lagos",
      id: 3,
    },
    {
        image: influence,
        alt: "Influence conference flier",
        title: "Influence",
        date: "16th September, 2024",
        location: "Yaba, Lagos",
        id: 4,
      },
      {
        image: vibes,
        alt: "vibes on vibes",
        title: "Vibes on Vibes",
        date: "4th December, 2024",
        location: "Ikeja, Lagos",
        id: 5,
      },
      {
        image: change,
        alt: "embracing change & adaptability flier",
        title: "Embracing Change & Adaptability",
        date: "21st August, 2024",
        location: "Wuse, Abuja",
        id: 6,
      },
  ]);
  return (
    <div className="border-2 border-green-600 mx-4 mb-40">
      <div className="mb-[60px]">
        <h2>Latest Upcoming Events</h2>
      </div>
      <div className="border-4 border-purple-400 flex flex-col gap-12 w-fit ">
        {cards.map((card) => (
          <section className="" key={card.id}>
            <div>
              <img src={card.image} alt={card.alt} width={358}/>
            </div>
            <div className="flex flex-col border-4 gap-2">
              <h4>{card.title}</h4>
              <div className="flex justify-between items-center">
                <div>
                  <p>
                    <small>{card.date}</small>
                  </p>
                </div>
                <div className="border border-[#FCEBCE] bg-[#FCEBCE] px-3 py-0.5">
                    <p>
                        <small>{card.location}</small>
                    </p>
                </div>
              </div>
              <div>
                <button className="tertiaryBtn gap-2 ">
                  View location <img src={arrow} alt="arrow icon" />
                </button>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Events;
