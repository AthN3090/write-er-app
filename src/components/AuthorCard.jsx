import avatar from '../assets/avatar.png'
import { AiOutlineUser } from 'react-icons/ai'
function AuthorCard({username, avatar, headline, fullname}) {
    return (
      <div className="p-5 bg-white">
        {avatar === "default" || avatar === undefined ? (
          <AiOutlineUser className="w-[60px] h-[60px] bg-gray-700 rounded-full text-gray-300" />
        ) : (
          <img
            src={"http://localhost:8000/" + avatar}
            className="w-[60px] h-[60px] rounded-full object-cover"
            alt="avatar"
          ></img>
        )}

        <p className="font-semibold mt-2 text-xl">{fullname}</p>
        <p className=" text-md text-gray-700 ">{'@' + username}</p>
        <p className="text-sm mt-5">
          {headline}
        </p>
        <div className="text-sm flex gap-3 underline  mt-5">
          {["Linkedin", "Twitter", "Github"].map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>
    );
}

export default AuthorCard;