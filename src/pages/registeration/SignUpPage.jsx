import SignUp from "./partials/SignUp"
import SignUpBento from "./partials/SignUpBento"
const SignUpPage = () => {
    return ( 
        <div className="flex items-center flex-col-reverse md:flex-row md:justify-center m-6 gap-6 h-fit">
        <div className="w-1/2">
          <SignUpBento />
        </div>
        <div className="flex place-content-center md:w-1/2">
          <SignUp />
        </div>
      </div>
     );
}
 
export default SignUpPage;