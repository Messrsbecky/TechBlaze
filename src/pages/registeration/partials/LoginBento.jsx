import loginBentoImg from "../../../assets/images/login.svg";

const LoginBento = () => {
  return (
    <div className=" relative w-full max-h-full overflow-hidden">
        <img src={loginBentoImg} alt="bento grid" className="h-full w-full object-contain"/>
    </div>
  ); 
};

export default LoginBento;
