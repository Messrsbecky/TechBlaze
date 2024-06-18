import { useState } from "react";
import plusIcon from "src/assets/icons/add.svg"
import  close from "src/assets/icons/Close.svg"

const Ask = () => {
  const [cards, setcards] = useState([
    {
      question: "What is NomadHaven?",
      answers:
        "NomadHaven is a platform that helps you discover the latest events and trending places in your city. Whether you're looking for concerts, festivals, workshops, or hidden gems, NomadHaven provides personalized recommendations and up-to-date information to enhance your urban adventures.",
      id: 1,
    },
    {
      question: "Is NomadHaven free to use?",
      answers:
        "NomadHaven is a platform that helps you discover the latest events and trending places in your city. Whether you're looking for concerts, festivals, workshops, or hidden gems, NomadHaven provides personalized recommendations and up-to-date information to enhance your urban adventures.",
      id: 2,
    },
    {
      question: "Can I leave reviews and ratings on NomadHaven?",
      answers:
        "NomadHaven is a platform that helps you discover the latest events and trending places in your city. Whether you're looking for concerts, festivals, workshops, or hidden gems, NomadHaven provides personalized recommendations and up-to-date information to enhance your urban adventures.",
      id: 3,
    },
    {
      question: "How often is the information on NomadHaven updated?",
      answers:
        "NomadHaven is a platform that helps you discover the latest events and trending places in your city. Whether you're looking for concerts, festivals, workshops, or hidden gems, NomadHaven provides personalized recommendations and up-to-date information to enhance your urban adventures.",
      id: 4,
    },
    {
      question: "How do I contact NomadHaven's support team?",
      answers:
        "NomadHaven is a platform that helps you discover the latest events and trending places in your city. Whether you're looking for concerts, festivals, workshops, or hidden gems, NomadHaven provides personalized recommendations and up-to-date information to enhance your urban adventures.",
      id: 5,
    },
    {
      question:
        "Can I share events and places with friends through NomadHaven?",
      answers:
        "NomadHaven is a platform that helps you discover the latest events and trending places in your city. Whether you're looking for concerts, festivals, workshops, or hidden gems, NomadHaven provides personalized recommendations and up-to-date information to enhance your urban adventures.",
      id: 6,
    },
  ]);
  return (
    <section className="mx-4 sm:mx-8 md:mx-[60px] lg:mx-20 mb-40" >
      <h2 className="text-center">What People Ask</h2>
      <div className="flex flex-col gap-10 mt-16 ">
        {cards.map((card) => (
          <div className="border border-[#B0B6B6] p-6 sm:p-8 md:p-10 lg:px-10 lg:py-[42]  rounded-2xl" key= {card.id}>
            <div className="flex  justify-between items-center">
            <h4> {card.question}</h4>
            <div className="inline-flex">
            <img src={plusIcon} alt="view icon" width={40} />
            <img src={close} alt="close icon" width={40} />
            </div>
            </div>
            <p className="mt-6">{card.answers}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ask;
