import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, redirect } from "react-router-dom";
import {login} from '../features/user'
import axios from 'axios'
import { baseAPI } from "../App";
import Login from "../pages/Login";
function LoginBox() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)
  
  //redux state
  const user = useSelector((state) => state.user.value)
  const setUser = useDispatch()


  function userLogin(e){
    e.preventDefault()
    axios
    .post(baseAPI + "/login",{username, password},{withCredentials: true})
    .then(response => {
        setRedirect(true)
        setUser(login(username))
    })
    .catch(err => {
      alert("Invalid credentials")
    })
  }
  
  if(redirect)
    return <Navigate to={'/'} />
  
  return (
    <div className="border border-gray-700  px-20 py-20 rounded-md">
      <div className="">
        <p className="text-center mb-16 text-gray-700 text-2xl font-bold">
          {" "}
          Welcome to{" "}
          <span className="underline underline-offset-4 font-mono">Write-er</span>{" "}
          community.
        </p>
        <form
          className="flex flex-col gap-3"
          onSubmit={userLogin}
        >
          <input
            className="border border-gray-700 rounded-md p-3"
            required
            type={"text"}
            placeholder="Username"
            value={username}
            onChange = {(e)=> setUsername(e.target.value)}
            />
          <input
            className="border border-gray-700 rounded-md p-3"
            required
            type={"password"}
            placeholder="Password"
            value={password}
            onChange = {(e)=> setPassword(e.target.value)}
          />
          <button
            className="mt-4 p-3 bg-gray-700 rounded-md text-white"
            type="submit"
          >
            Log in
          </button>
        </form>
        <p className="text-center mt-5">
            No account?{" "}
          <Link to="/signup" className="font-medium">
            {" "}
            Create one

          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginBox;
