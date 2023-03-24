import LoginBox from "../components/LoginBox";
import Navbar from "../components/Navbar";

function Login() {
  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <div className="flex justify-center bg-gray-100 items-center grow">
          <LoginBox/>

      </div>
    </div>
  );
}

export default Login;
