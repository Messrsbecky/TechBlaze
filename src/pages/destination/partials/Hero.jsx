import star from "../../../assets/images/landingpage/5star.svg";
const Hero = () => {
  return (
    <div>
      <div>
        <div>
          <img src={star} alt="five stars" />
        </div>
        <div>“My fun and hangout organizer”</div>
        <div>
          <img
            src={star}
            alt="five stars"
          />
        </div>
        <div>“The perfect map to Naija’s trending spots.”</div>
        <div>
          <img
            src={star}
            alt="five stars"
          />
        </div>
        <div>“Cruise, hangout, fun, they have it all.”</div>
      </div>
      <div>
        <div>
            <h1>Transform Every Trip into a Storybook Adventure</h1>
            <h4>Connect with the vibrant cultures and breathtaking landmarks through NomadHaven, your portal to the Nigeria’s hidden gems.</h4>
        </div>
      </div>
      <div>
        <button className="primaryBtn">Let’s begin your trip</button>
      </div>
    </div>
  );
};

export default Hero;
