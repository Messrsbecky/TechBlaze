import fiveStar from "../../../assets/icons/fivestar.svg";
import image1 from "../../../assets/images/landingpage/sugar-conference.svg";
import image2 from "../../../assets/images/landingpage/nike-gallery-2.svg";
import image3 from "../../../assets/images/landingpage/land-mark-beach.svg";
import image4 from "../../../assets/images/landingpage/lekki-reserve.svg";
import herobg from "../../../assets/images/landingpage/hero-bg.svg";
const Hero = () => {
  return (
    <header
      className=" mb-40  bg-cover bg-center"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <div className="relative z-10 text-center flex flex-col gap-14 p-10 mb-40 pt-32 ">
        <section className="flex justify-between mx-auto items-center gap-8">
          <div className="flex flex-col items-center ">
            <img src={fiveStar} alt="five star rating" width={100} />
            <p>“My fun and hangout organizer”</p>
          </div>
          <div className=" flex-col items-center hidden md:flex">
            <img src={fiveStar} alt="five star rating" width={100} />
            <p>“The perfect map to Naija’s trending spots.”</p>
          </div>
          <div className="flex-col items-center hidden lg:flex  ">
            <img src={fiveStar} alt="five star rating" width={100} />
            <p>“Cruise, hangout, fun, they have it all.”</p>
          </div>
        </section>
        <section className="">
          <div className="mb-6">
            <h1 className="font-normal ">
              Transform Every Trip into a
              <span className="font-bold text-5xl "> Storybook</span> Adventure
            </h1>
          </div>
          <div>
            <p>
              Connect with the vibrant cultures and breathtaking landmarks
              through NomadHaven, your portal to the Nigeria’s hidden gems.
            </p>
          </div>
        </section>
        <section className="">
          <button className="primaryBtn mx-auto">
            Let&#39;s begin your trip
          </button>
        </section>
      </div>
      <section className="flex  items-center justify-center ">
        <img src={image4} alt="sugar conference hall" width={300} className="border-4 border-white rounded-2xl origin-top- rotate-[-4deg] w-4/5 sm:w-full"/>
        <img src={image2} alt="interior view of nike art gallery" width={300} className="border-4 border-white rounded-2xl origin-top- -rotate-[-4deg] w-4/5 sm:w-full"/>
        <img src={image3} alt="landmark beach" width={300} className="border-4 border-white rounded-2xl origin-top- rotate-[-4deg] hidden sm:block w-full"/>
        <img src={image1} alt="sugar conference hall" width={300} className="border-4 border-white rounded-2xl origin-top- -rotate-[-4deg] hidden md:block w-full"/>
      </section>
    </header>
  );
};

export default Hero;
