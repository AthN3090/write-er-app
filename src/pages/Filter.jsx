import ArticleCard from "../components/ArticleCard";
import Navbar from "../components/Navbar";
import { FaReact } from "react-icons/fa";
import RecTopics from "../components/RecTopics";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseAPI } from "../App";
import PostSkeleton from "../components/PostSkeleton";
import DevFooter from "../components/DevFooter";
import { useParams } from "react-router-dom";
function Filter() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const {topic} = useParams()
  const [test, setTest] = useState('')
  useEffect(() => {
    axios.get(baseAPI + `/filter/${topic}`).then((response) => {
      setTest(response.data)
      setPosts(response.data)
      setLoading(false);
    });
  }, [topic]);
    return ( <>
        <Navbar />
        <div className="flex justify-center ">
          <div className="flex justify-center gap-2 bg-gray-100 grow">
            <div className="xl:w-[45%] lg:w-[80%]  w-[100%]">
              <p className="text-3xl font-bold font-mono py-5 px-1"> {topic} </p>
              {posts.length === 0 && 
                    <div className="p-1 text-lg font-bold text-gray-500">
                        No articles found
                    </div>}
              <div className="lg:border-r ">
                {loading ? (
                  <>
                    <PostSkeleton />
                    <PostSkeleton />
                    <PostSkeleton />
                    <PostSkeleton />
                  </>
                ) : (
                  <>
                    
                    {posts.length > 0 &&
                      posts.map((item, index) => (
                        <ArticleCard {...item} key={index} />
                      ))}
                  </>
                )}
              </div>
            </div>
            <div className="hidden xl:w-[25%] lg:w-[40%] lg:block ">
              <p className="text-3xl border-b font-bold font-mono p-5">Discover</p>
              <div className="sticky top-0">
                <RecTopics />
                {/*Dev side footer*/}
                <div className="">
                  <div className="p-2 bg-gray-100">
                    <hr></hr>
                    <div>
                      <p className="p-3 text-gray-700 text-center text-xs">
                        Made with ☕ + 👨‍💻 <br />
                        by{" "}
                        <a
                          className="hover:text-gray-400 hover: cursor-pointer"
                          href="https://github.com/AthN3090"
                        >
                          {" "}
                          Aman Dev Chowdhary{" "}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </> );
}

export default Filter;