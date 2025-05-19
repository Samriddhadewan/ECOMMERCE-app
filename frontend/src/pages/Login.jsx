import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const { navigate, backendUrl, token, setToken } = useContext(ShopContext);
  const [currentState, setCurrentState] = useState("login");

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      // REGISTRATION API 
      if(currentState === "Sign up"){
        const response = await axios.post(backendUrl + "/api/user/register", {name,email,password})
        if(response.data.success){
          localStorage.setItem("token",response.data.token)
          setToken(response.data.token)
          toast.success("User created Successfully")
        }else{
          toast.error(response.data.message)
        }
      }
      else{
        // LOGIN API 
        const response = await axios.post(backendUrl+"/api/user/login", {email,password})
        if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem("token",response.data.token)
          toast.success("Successfully Logged In!")
        }else{
          toast.error(response.data.message)
        }
      }
    } catch (error) {
      toast.error(error.message)
    }

  };

  useEffect(()=>{
    if(token){
      navigate("/")
    }
  },[token])




  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {currentState === "login" ? (
        ""
      ) : (
        <input
        onChange={(e)=> setName(e.target.value)}
        value={name}
        type="text"
          className="w-full px-3 border border-gray-800"
          placeholder="Name"
          required
        />
      )}
      <input
      onChange={(e)=>setEmail(e.target.value)}
      value={email}
        type="email"
        className="w-full px-3 border border-gray-800"
        placeholder="Email"
        required
      />
      <input
      onChange={(e)=>setPassword(e.target.value)}
      value={password}
        type="password"
        className="w-full px-3 border border-gray-800"
        placeholder="Password"
        required
      />

      <div className="w-full flex justify-between text-sm mt-[-8]">
        <p className="cursor-pointer">forget Password</p>
        {currentState === "login" ? (
          <p
            onClick={() => setCurrentState("Sign up")}
            className="cursor-pointer"
          >
            Create Account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("login")}
            className="cursor-pointer"
          >
            Login here
          </p>
        )}
      </div>
      <button className="bg-black text-white font-white px-8 py-2 mt-4">
        {currentState === "login" ? "Login" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
