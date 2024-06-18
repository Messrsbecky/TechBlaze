import { useState } from "react";
import list from "../../../assets/icons/blue-event-note.svg";
import location from "../../../assets/icons/blue-location.svg";
import ai from "../../../assets/icons/blue-AI-Chat.svg";
import ui from "../../../assets/icons/blue-interface.svg";
import calender from "../../../assets/icons/blue-calender.svg";
import rating from "../../../assets/icons/blue-star.svg";
const Choose = () => {
  const [cards, setCards] = useState([
    {
      image: list,
      alt: "calender icon",
      title: "Tailored Event Listings",
      description:
        "Our platform features an extensive and up-to-date directory of events, ensuring you never miss out on what's happening around you. From concerts and festivals, find it all in one place.",
      id: 1,
    },
    {
      image: location,
      alt: "location icon",
      title: "Curated Trending Spots",
      description:
        "Explore the city's top trending places handpicked by local experts. Discover hidden gems, popular hangouts, and must-visit spots that you won’t find in regular guides.",
      id: 2,
    },
    {
      image: ai,
      alt: "ai chatbot icon",
      title: "AI Chat Buddy",
      description:
        "Looking to kill time with some light-hearted banter, need help with a search, or want a fresh perspective on a location, our AI is here to make your day brighter and more interesting.",
      id: 3,
    },
    {
      image: ui,
      alt: "user interface icon",
      title: "Easy-to-Use Interface",
      description:
        "Enjoy a seamless browsing experience with our user-friendly design. Quickly find events and places, and effortlessly navigate through our platform with ease.",
      id: 4,
    },
    {
      image: calender,
      alt: "calender icon",
      title: " Real-Time Updates",
      description:
        "Stay informed with real-time updates on events and places. Our platform ensures you always have the latest information at your fingertips.",
      id: 5,
    },
    {
      image: rating,
      alt: "star icon",
      title: "User Reviews and Ratings",
      description:
        "Read genuine reviews and ratings from other users to make informed decisions. Discover the best events and places through the experiences of your peers.",
      id: 6,
    },
  ]);
  return (
    <div className="px-4 flex flex-col gap-[60px] py-20 bg-White">
      <div>
        <h2 className="text-center">Why choose the NomadHaven?</h2>
      </div>
      <div className="border-8  flex flex-col flex-wrap  justify-center gap-12 ">
        {cards.map((card) => (
          <section className=" border-green-200 border-2 flex flex-col grow-0 shrink-0 basis-full sm:basis-8/12 md:basis-[45%] lg:basis-[30%]" key={card.id}>
            <div className="flex gap-1 items-center mb-2  ">
              <div>
                <img src={card.image} alt={card.alt} width={36} />
              </div>
              <div>
                <h6>{card.title}</h6>
              </div>
            </div>
            <div>
              <p>{card.description}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Choose;
