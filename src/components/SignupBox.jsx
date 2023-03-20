import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { baseAPI } from "../App";
import { Navigate } from "react-router-dom";
import { AiOutlineUser } from 'react-icons/ai'
function SignpBox() {
    const [username, setUsername] = useState('')
    const [fullname, setFullname] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [headline, setHeadline] = useState('')
    const [avatar, setAvatar] = useState(null)
    const [redirect, setRedirect] = useState(false)
    
    function Register(e) {
      e.preventDefault();
      const data = new FormData()
      data.set('username', username)
      data.set('headline', headline)
      data.set('password', password)
      data.set('fullname', fullname)
      if(avatar)
        data.set('avatar', avatar[0])
      else
        data.set('avatar', 'default')

        axios
        .post(baseAPI + "/register", data, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          console.log(response);
          setRedirect(true)
        })
        .catch(e => {
          alert(e.response.data)
        })
      
      
    }
    if(redirect)
    return <Navigate to={'/login'} />

    return (
      <div className="shadow-md border border-gray-700 px-20 py-20 rounded-md">
        <div className="">
          <p className="text-center mb-16 text-gray-700 text-2xl font-bold">
            {" "}
            Welcome to{" "}
            <span className="underline underline-offset-4 font-mono">Write-er</span>{" "}
            community.
          </p>
          <form
            className="flex flex-col gap-3"
            onSubmit={Register}
          >
          <div className="flex gap-5 items-center justify-between">
          {avatar === null ? (
            <AiOutlineUser className="w-[48px] h-[48px] bg-gray-700 rounded-full text-gray-300" />
          ):
          <img className="w-[60px] h-[60px] bg-gray-700 rounded-full object-cover" src={URL.createObjectURL(avatar[0])} />
          }
          
          <input
          type={'file'}
          onChange={(e) => setAvatar(e.target.files)}
          />
          </div>
          {/*  */}
          <input
            required
              className="border border-gray-700 rounded-md p-3"
              type={"text"}
              placeholder="Full name"
              value={fullname}
              onChange={(e)=> setFullname(e.target.value)}
            />
            <input
            required
              className="border border-gray-700 rounded-md p-3"
              type={"text"}
              placeholder="Username"
              value={username}
              onChange={(e)=> setUsername(e.target.value)}
            />
            <input
            required
              className="border border-gray-700 rounded-md p-3"
              type={"text"}
              placeholder="Profile headline"
              value={headline}
              onChange={(e)=> setHeadline(e.target.value)}
            />
            <input
            required
              className="border border-gray-700 rounded-md p-3"
              type={"password"}
              placeholder="Password"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />
            <input
            required  
              className="border border-gray-700 rounded-md p-3"
              type={"password"}
              placeholder="Confirm Password"
              value={passwordConfirm}
              onChange={(e)=> setPasswordConfirm(e.target.value)}
            />
            <button
              className="mt-4 p-3 bg-gray-700 rounded-md text-white"
              type="submit"
            >
              Sign up
            </button>
          </form>
          <p className="text-center mt-5">
            Already have an account?{" "}
            <Link to="/login" className="font-medium">
              {" "}
              Login
            </Link>
          </p>
        </div>
      </div>
    );
}

export default SignpBox;