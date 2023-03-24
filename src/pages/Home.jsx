import ArticleCard from "../components/ArticleCard";
import Navbar from "../components/Navbar";
import { FaReact } from "react-icons/fa";
import RecTopics from "../components/RecTopics";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseAPI } from "../App";
import PostSkeleton from "../components/PostSkeleton";
import DevFooter from "../components/DevFooter";
function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(baseAPI + "/post").then((response) => {
      setPosts(response.data);
      setLoading(false);
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex justify-center ">
        <div className="flex justify-center gap-2 bg-gray-100 grow">
          <div className="xl:w-[45%] lg:w-[80%]  w-[100%]">
            <p className="text-3xl font-bold font-mono py-5 px-1"> Recent </p>
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
                      <ArticleCard {...item} setLoading={setLoading} key={index} />
                    ))}
                </>
              )}
            </div>
          </div>
          <div className="hidden xl:w-[25%] lg:w-[40%] lg:block ">
            <p className="text-3xl border-b font-bold font-mono p-5">Discover</p>
            <div className="sticky top-2">
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
    </>
  );
}

export default Home;
