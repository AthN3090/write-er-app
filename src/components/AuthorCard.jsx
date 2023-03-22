import avatar from '../assets/avatar.png'
import { AiOutlineUser } from 'react-icons/ai'
import { baseAPI } from '../App';
function AuthorCard({username, avatar, headline, fullname}) {
    return (
      <div className="p-5 bg-white">
        {avatar === "default" || avatar === undefined ? (
          <AiOutlineUser className="w-[60px] h-[60px] bg-gray-700 rounded-full text-gray-300" />
        ) : (
          <img
            src={baseAPI + "/images/" + avatar}
            className="w-[60px] h-[60px] rounded-full object-cover"
            alt="avatar"
          ></img>
        )}

        <p className="font-bold mt-2 text-xl text-gray-800">{fullname}</p>
        <p className=" text-sm text-gray-500 font-semibold">{'@' + username}</p>
        <p className="text-sm mt-3 font-mono">
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