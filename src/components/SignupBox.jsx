import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { baseAPI } from "../App";
import { Navigate } from "react-router-dom";
import { AiOutlineUser } from 'react-icons/ai'
import spinner from "../assets/spinner.png"
function SignpBox() {
    const [username, setUsername] = useState('')
    const [fullname, setFullname] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [headline, setHeadline] = useState('')
    const [avatar, setAvatar] = useState(null)
    const [redirect, setRedirect] = useState(false)
    const [inavlidPasswordMatch, setInvalidPasswordMatch] = useState(false)
    const [usernameAlreadyExist, setUsernameAlreadyExist] = useState(false)
    const [waiting, setWaiting] = useState(false)
    function Register(e) {
      setWaiting(true)
      e.preventDefault();
      if(password !== passwordConfirm){
        setInvalidPasswordMatch(true)
        return
      }

      
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
          setWaiting(false)
        })
        .catch(e => {
          console.log(e.response.data)
          setUsernameAlreadyExist(true)
          setWaiting(false)
        })
      
      
    }
    if(redirect)
    return <Navigate to={'/login'} />

    return (
      <div className=" sm:border border-gray-700 sm:px-20 py-20  px-5 rounded-md">
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
          {inavlidPasswordMatch ? <p className="text-center mb-3 text-red-700 font-semibold invalid">
            Password and Confirm Password do not match
          </p> : ""}
          {usernameAlreadyExist ? <p className="text-center mb-3 text-red-700 font-semibold invalid">
            Username already occupied, Please try a different username
          </p> : ""}
          <div className="flex gap-5 items-center justify-between">
          {avatar === null ? (
            <AiOutlineUser className="min-w-[48px] h-[48px] bg-gray-700 rounded-full text-gray-300" />
          ):
          <img className="w-[48px] h-[48px] bg-gray-700 rounded-full object-cover" src={URL.createObjectURL(avatar[0])} />
          }
          
          <input
          className="w-full"
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
              onChange={(e)=> {
                if(inavlidPasswordMatch) setInvalidPasswordMatch(false)
                if(usernameAlreadyExist) setUsernameAlreadyExist(false)
                setFullname(e.target.value)
                }}
            />
            <input
            required
              className="border border-gray-700 rounded-md p-3"
              type={"text"}
              placeholder="Username"
              value={username}
              onChange={(e)=> {
                if(inavlidPasswordMatch) setInvalidPasswordMatch(false)
                if(usernameAlreadyExist) setUsernameAlreadyExist(false)
                setUsername(e.target.value)}
                }
            />
            <input
            required
              className="border border-gray-700 rounded-md p-3"
              type={"text"}
              placeholder="Profile headline"
              value={headline}
              onChange={(e)=> {
                if(inavlidPasswordMatch) setInvalidPasswordMatch(false)
                if(usernameAlreadyExist) setUsernameAlreadyExist(false)
                setHeadline(e.target.value)
              }}
            />
            <input
            required
              className="border border-gray-700 rounded-md p-3"
              type={"password"}
              placeholder="Password"
              value={password}
              onChange={(e)=> {
                if(inavlidPasswordMatch) setInvalidPasswordMatch(false)
                if(usernameAlreadyExist) setUsernameAlreadyExist(false)
                setPassword(e.target.value)
              }}
            />
            <input
            required  
              className="border border-gray-700 rounded-md p-3"
              type={"password"}
              placeholder="Confirm Password"
              value={passwordConfirm}
              onChange={(e)=> {
                if(inavlidPasswordMatch) setInvalidPasswordMatch(false)
                if(usernameAlreadyExist) setUsernameAlreadyExist(false)
                setPasswordConfirm(e.target.value)
              }}
            />
            <button
              className="mt-4 p-3 bg-gray-700 rounded-md text-white"
              type="submit"
            >
              {waiting? (
            <img
                  className="animate-spin w-[30px] m-auto invert"
                  src={spinner}
                  alt="spinner"
                />
          ) : "Sign up"}
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