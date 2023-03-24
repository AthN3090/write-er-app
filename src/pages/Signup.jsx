import Navbar from "../components/Navbar";
import SignpBox from "../components/SignupBox";

function Signup() {
    return (
        <div className="flex flex-col h-full">
            <Navbar/>
            <div className="flex justify-center bg-gray-100 items-center grow">
                    <SignpBox />
            </div>
        </div>
    );
}

export default Signup;