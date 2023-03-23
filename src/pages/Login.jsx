import LoginBox from "../components/LoginBox";
import Navbar from "../components/Navbar";

function Login() {
  return (
    <div className="flex flex-col items-stretch justify-center">
      <Navbar />
      <div className="flex justify-center bg-gray-100 items-center grow">
        <div className="">
          <LoginBox/>
        </div>
      </div>
    </div>
  );
}

export default Login;
