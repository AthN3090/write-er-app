import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseAPI } from "../App";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import TextEditor from "../components/TextEditor";
import { topics } from "../data/topics";
import TopicLabel from "../components/TopicLabel";
function NewPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [files, setFiles] = useState("");
  const [topic, setTopic] = useState("");
  const [redirect, setRedirect] = useState(false);
  const user = useSelector((state) => state.user.value.name);

  function autogrow(e) {
    e.target.style.height = "48px";
    e.target.style.height = e.target.scrollHeight + "px";
  }
  function createNewPost(e) {
    e.preventDefault();

    const data = new FormData();
    data.set("title", title);
    data.set("body", body);
    data.set("cover", files[0]);
    data.set("topic",topic)
    data.set("author", user);

    axios
      .post(baseAPI + "/newpost", data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        if (response.status === 200) setRedirect(true);
      })
      .catch(e => {
        console.log(e.response.data)
      })
  }

  if (redirect) return <Navigate to={"/"} />;

  if (!user) return <Navigate to={"/"} />;
  return (
    <div className="flex justify-center p-5">
      <form onSubmit={createNewPost} className="lg:w-[60%] w-full">
        <div>
          <div className="p-3 text-gray-700 font-semibold">Add cover photo :</div>
          <input
          required
            type={"file"}
            className="px-5 py-3 mb-5 border  w-full"
            onChange={(e) => setFiles(e.target.files)}
          ></input>
          {/* <img srcc={""}> </img> */}
        </div>

        <textarea
          rows={"1"}
          className="p-2 w-full mb-5 outline-none resize-none border overflow-hidden"
          placeholder="Title..."
          onInput={autogrow}
          onResize={autogrow}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        ></textarea>
        <div className="mb-5 ">
          <select className="p-2 w-full" 
          defaultValue={'default'}
          required
          onChange={(e) => {
            console.log(e.target.value)
            setTopic(e.target.value);
          }}
          >
            <option value="default" disabled>
              Select your topic
            </option>
            {topics.map((item, index) => (
              <option value={item} key={index}>{item}</option>
            ))}
          </select>
          {/* <div className="absolute border bg-gray-200 z-10 w-full">
            {topics.map((item) => (
              <div className="p-4">
                {'#' + item}
              </div>
            ))}
          </div> */}
        </div>
        <TextEditor body={body} setBody={setBody} />

        <button
          type="submit"
          className="px-5 py-2 mt-5 bg-gray-700 w-full text-white"
        >
          Create post
        </button>
      </form>
    </div>
  );
}

export default NewPost;
