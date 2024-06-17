import fiveStar from "../../../assets/icons/fivestar.svg";
import image1 from "../../../assets/images/landingpage/sugar-conference.svg";
import image2 from "../../../assets/images/landingpage/nike-gallery-2.svg";
import image3 from "../../../assets/images/landingpage/land-mark-beach.svg";
import image4 from "../../../assets/images/landingpage/lekki-reserve.svg";
import herobg from "../../../assets/images/landingpage/hero-bg.svg";
const Hero = () => {
  return (
    <header
      className=" border-4 border-orange-400 mb-40  bg-cover bg-center"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <div className="relative z-10 border-2 border-purple-500 text-center flex flex-col gap-14 p-10">
        <section className="flex justify-between items-center">
          <div className="flex flex-col items-center">
            <img src={fiveStar} alt="five star rating" width={152} />
            <p>“My fun and hangout organizer”</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={fiveStar} alt="five star rating" width={152} />
            <p>“The perfect map to Naija’s trending spots.”</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={fiveStar} alt="five star rating" width={152} />
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
      <section className="flex ">
        <img src={image4} alt="sugar conference hall" width={180} className="border-4 border-white rounded-2xl skew-x-3"/>
        <img src={image2} alt="interior view of nike art gallery" width={180} className="border-4 border-white rounded-2xl"/>
        <img src={image3} alt="landmark beach" width={180} className="border-4 border-white rounded-2xl"/>
        <img src={image1} alt="sugar conference hall" width={180} className="border-4 border-white rounded-2xl"/>
      </section>
    </header>
  );
};

export default Hero;
