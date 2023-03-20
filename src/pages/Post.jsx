import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { baseAPI } from "../App";
import moment from "moment";
import Navbar from "../components/Navbar";
import AuthorCard from "../components/AuthorCard";
import DevFooter from "../components/DevFooter";
import { useSelector } from "react-redux";
import spinner from "../assets/spinner.png"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import edit from '../assets/edit.png'
import trash from '../assets/delete.png'
function Post() {
  const user = useSelector(state => state.user.value.name)
    const [post, setPost] = useState('')
    const [author, setAuthor] = useState('')
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    const [redirect, setRedirect] = useState(false)
    useEffect(()=> {
        axios
        .get((baseAPI + `/post/${id}`))
        .then((post) =>  {
            axios
            .get(baseAPI +  `/author/${post.data.author}`)
            .then(author => {
              setAuthor(author.data)
              setPost(post.data)
              setLoading(false)
            })
            
        })

    },[])
    function DeletePost(id){
      axios
      .delete(baseAPI + `/delete/${id}`, {withCredentials: true})
      .then(response => {
        if(response.status === 200)
        setRedirect(true)
      })
    }
    if(redirect) return <Navigate to="/" />
    return (
      <div className="">
        <Navbar />
        <div className="flex justify-center">
          <div className="flex justify-center  gap-2 items-start grow lg:grow-0 m-2 lg:flex-row flex-col">
            {user === author.username ? (
              loading ? null : (
                <div className="flex lg:flex-col gap-2">
                  <div className="p-3 bg-neutral-700 rounded-full flex items-center ">
                    <Link to={`/edit/${id}`} className="inline-block">
                      <img src={edit} className="w-[24px]" />
                    </Link>
                  </div>
                  <button
                    onClick={() => {
                      DeletePost(id);
                    }}
                    className="p-3 bg-red-900 rounded-full flex items-center justify-center"
                  >
                    <img src={trash} className="w-[24px] object-fill" />
                  </button>
                </div>
              )
            ) : null}
            {loading ? (
              <div className=" lg:w-[700px] grow rounded-md overflow-hidden text-center">
                <img
                  className="animate-spin w-[50px] m-auto"
                  src={spinner}
                  alt="spinner"
                />
              </div>
            ) : (
              <div className=" lg:border bg-white lg:w-[700px] grow rounded-md overflow-hidden">
                <div>
                  <img
                    className="w-full h-[300px] object-cover"
                    src={baseAPI + "/" + post.cover}
                  />
                </div>

                <div className="lg:p-5 p-1">
                  <div className="mt-3">
                    <p className="text-lg font-semibold"> {"@"+post.author} </p>
                    <p className="text-sm text-neutral-600">
                      {"Posted on "}
                      &bull; {moment(post.createdAt).format(
                        "D-MM-YYYY"
                      )} &bull; {moment(post.createdAt).format("HH:MM")}{" "}
                    </p>
                    <p className="text-5xl font-extrabold mt-5">{post.title}</p>
                    <div className="my-8">
                      <span className="bg-gray-700 px-2 py-1 rounded-md text-white">
                        {post.topic}
                      </span>
                    </div>
                    <hr></hr>
                  </div>
                  <div className="my-7">
                    <ReactMarkdown
                      className="prose  max-w-none
                  text-gray-800"
                      children={post.body}
                      remarkPlugins={[remarkGfm]}
                    ></ReactMarkdown>
                  </div>
                  {/* <div
                    className="text-lg"
                    dangerouslySetInnerHTML={{ __html: post.body }}
                  ></div> */}
                  <hr className="mt-6 w-[100px] m-auto border border-black"></hr>
                </div>
              </div>
            )}
            {loading ? (
              ""
            ) : (
              <div className="lg:w-[25%]  lg:min-w-[250px] border sticky w-full rounded-md overflow-hidden">
                <p className="bg-gray-700 border-b p-5 "></p>
                <div>
                  <AuthorCard {...author} />
                  {/*Dev side footer*/}
                  <DevFooter />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
}

export default Post;"Post"