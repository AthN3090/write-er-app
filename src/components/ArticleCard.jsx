import { useEffect, useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai'
import moment from 'moment';
import { Link } from 'react-router-dom';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import axios from 'axios';
import { baseAPI } from '../App';
function ArticleCard({_id, title, body, author, cover, createdAt, topic}) {
    const [avatar, setAvatar] = useState()
    useEffect(() => {
        axios
        .get(baseAPI + `/author/${author}`)
        .then(author => { 
            setAvatar(author.data.avatar)
        })
    },[])
    return (
      <div>
        <hr></hr>
        <div className="p-5 bg-white">
          <div className="flex items-center gap-2">
            {avatar === 'default' || avatar === undefined ? (
                <AiOutlineUser className="w-[24px] h-[24px] bg-gray-700 rounded-full text-gray-300" />
            ) : (
                <img
                src={baseAPI + "/images/" +  avatar}
                className="w-[24px] h-[24px] rounded-full object-cover"
                alt="avatar"
              ></img>
              
            )}

            <div>
              <span className=""> {author}</span> &bull;{" "}
              <span className="text-xs text-gray-500">
                {moment(createdAt).format("D-MM-YYYY") +
                  " " +
                  moment(createdAt).format("HH:MM")}
              </span>
            </div>
          </div>
          <div className="flex my-1 gap-5">
            <div className="w-3/4">
              <Link to={`/post/${_id}`}>
                <p className="text-3xl my-1 font-extrabold font-sans">
                  {title}
                </p>
              </Link>
              <div>
                <ReactMarkdown className="inline max-w-none prose-pre:whitespace-pre-wrap text-base font-serif my-5 text-gray-800 overflow-hidden  sm:break-normal break-all text-ellipsis md:line-clamp-3 line-clamp-1">
                  {body}
                </ReactMarkdown>
              </div>
            </div>

            <div className="flex grow items-center justify-center ">
              <Link to={`/post/${_id}`}>
                <img
                  className="w-[250px] h-[200px] object-cover"
                  src={baseAPI + "/images/" + cover}
                ></img>
              </Link>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="px-2 py-1 bg-gray-700 text-white rounded-md text-xs ">
              {topic}
            </span>
          </div>
        </div>
      </div>
    );

}

export default ArticleCard;