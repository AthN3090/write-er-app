import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { baseAPI } from "../App";
import TextEditor from "../components/TextEditor";
import spinner from "../assets/spinner.png"

function EditPost() {
  const { id } = useParams()
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [files, setFiles] = useState("")
  const [redirect, setRedirect] = useState(false)
  const user = useSelector((state) => state.user.value.name)
  const [waiting, setWaiting] = useState(false)
  function autogrow(e) {
    e.target.style.height = "48px";
    e.target.style.height = e.target.scrollHeight + "px";
  }
  useEffect(()=>{
    axios
    .get(baseAPI + `/post/${id}`)
    .then((response) => {
      setTitle(response.data.title)
      setBody(response.data.body)
    })
  },[])
 

  function updatePost(e){
    e.preventDefault()
    setWaiting(true)
    const data = new FormData()
    data.set("title", title)
    data.set("body", body)
    if(files !== '') data.set("cover", files[0])
    data.set("author", user)
    data.set("id", id)
    console.log(data)
    axios
      .put(baseAPI +"/post", data, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true
      })
      .then((response) => {
        if(response.status === 200) {
          setRedirect(true)
        }
      })
      .catch(e => {
        console.log(e.response.data)
        setWaiting(false)
      })
  }
  if (redirect) return <Navigate to={`/post/${id}`} />;

  if (!user) return <Navigate to={"/"} />;
  return (
    <div className="flex justify-center p-5">
      <form onSubmit={updatePost} className="xl:w-[50%]">
        <input
          type={"file"}
          className="px-5 py-3 mb-5 border w-full"
          onChange={(e) => setFiles(e.target.files)}
        ></input>

        <textarea
          rows={"1"}
          className="p-2 w-full outline-none resize-none border border-neutral-800 overflow-hidden"
          placeholder="Title..."
          onInput={autogrow}
          onResize={autogrow}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        ></textarea>
        <TextEditor body={body} setBody={setBody} />

        <button
          type="submit"
          className="px-5 py-2 mt-5 bg-gray-700 w-full text-white"
        >
           {waiting? (
            <img
                  className="animate-spin w-[30px] m-auto invert"
                  src={spinner}
                  alt="spinner"
                />
          ) : "Submit post"}
        </button>
      </form>
    </div>
  );
}

export default EditPost;
