import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { baseAPI} from "../App";
import {login} from '../features/user'
import edit from '../assets/edit.png'
import { AiOutlineUser } from 'react-icons/ai'

function Navbar() {
    const user = useSelector(state => state.user.value.name)
    const [id, setId] = useState(null);
    const [avatar, setAvatar] = useState(null)
    const setUser = useDispatch()
    // console.log(user)
    function logout(e){
        axios
        .post(baseAPI + '/logout',{}, {withCredentials: true})
        .then((response) => {
            setUser(login(null))
        })

    }
    useEffect(()=>{
        axios
        .get(baseAPI + '/profile',{withCredentials: true})
        .then((response)=>{
            if(response.data === "No"){
                setUser(login(null))
            } else{
              setAvatar(response.data.avatar)
              setUser(login(response.data.username))
              setId(response.data.id)
                
            }
            
        })
    }, [])

    return (
      <>
        <div className="bg-gray-800 py-3 px-5 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between gap-4">
              <Link className="hidden sm:block" to="/">
                <p className="font-mono text-xl font-extrabold bg-gray-700 rounde px-3  py-1  text-gray-200 rounded-lg">
                  Write-er
                </p>
              </Link>

              {user ? (
                avatar === "default" || avatar === null ? (
                  <div className="sm:hidden">
                    <AiOutlineUser className=" w-[32px] h-[32px] bg-gray-700 rounded-full text-gray-300" />
                  </div>
                ) : (
                  <div className="sm:hidden">
                    <img
                      className="w-[32px] h-[32px] rounded-full object-cover"
                      src={baseAPI + "/" + avatar}
                    ></img>
                  </div>
                )
              ) : (
                " "
              )}
              {/* <img > My profile</img> */}
              {/* <div className="flex items-center px-1 bg-gray-200 rounded-full text-3xl font-sans border ">
                <AiOutlineSearch className="p-1 bg-gray-200 text-gray-700 rounded-full" />
                <input
                  type={"text"}
                  label="post search"
                  placeholder="Search..."
                  className="autofill:bg-none bg-gray-200 rounded-full mx-1 outline-none p-1 text-lg placeholder:text-gray-700"
                ></input>
              </div> */}
            </div>

            {user ? (
              <div className="flex items-center gap-6 outline-none">
                <span className="mx-1">
                  <Link to={"/new-post"}>
                    <img width="24px" src={edit} />
                  </Link>
                </span>
                {avatar === "default" || avatar === null ? (
                  <div className="hidden sm:block">
                    <AiOutlineUser className="w-[32px] h-[32px] bg-gray-700 rounded-full text-gray-300" />
                  </div>
                ) : (
                  <div className="hidden sm:block">
                    <img
                      className="w-[32px] h-[32px] rounded-full object-cover"
                      src={baseAPI + "/images/" + avatar}
                    ></img>
                  </div>
                )}
                <button className="bg-gray-700 px-4 py-2  text-gray-200 font-medium rounded-full" type="button" onClick={logout}>
                  {" "}
                  logout
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <Link
                  to="/signup"
                  className=" px-4 py-2 bg-gray-700 text-gray-200 font-medium rounded-full outline-none"
                >
                  Sign up
                </Link>
                <Link
                  to="/login"
                  className="px-4 py-2  text-gray-200 rounded-full font-medium"
                >
                  Log in
                </Link>
              </div>
            )}
          </div>
        </div>
      </>
    );
}

export default Navbar;