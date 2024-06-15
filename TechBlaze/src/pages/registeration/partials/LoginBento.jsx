import bentoImg from "../../../assets/images/login.svg";
import bentoTab from "../../../assets/images/login-tab.svg";

const LoginBento = () => {
  return (
    <section>
      <div className=" relative w-full max-h-full overflow-hidden">
        <img
          src={bentoImg}
          alt="bento grid"
          className="h-full w-full object-contain"
        />
      </div>
      <div>
        <img src={bentoTab} alt="mountain view" />
      </div>
    </section>
  );
};

export default LoginBento;
