import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { login } from "../services/operations/adminAPI";

const Login = () =>{
    const [showPassword,setShowPassword] = useState(false)
    const [data,setdata] = useState({email:"",password:""})
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const email = data.email;
    const password = data.password;
    const changeHandler = (e) =>{
        setdata((prev) =>({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        // console.log("Data is ------",email ," ",password)
        dispatch(login(email,password,navigate))
    }
    return (
        <div className="text-white w-11/12 p-5 flex justify-center">
            <form onSubmit={submitHandler} className="flex flex-col gap-5 p-5 bg-slate-900 w-[500px] h-[300px] rounded-md mt-10">
                <div className="flex flex-col items-start gap-2 w-[50%]">
                    <label className="text-xl font-semibold">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter email"
                        className="rounded-md text-black p-2 w-[400px]"
                        value={email}
                        onChange={changeHandler}
                    />
                </div>
                <div className="flex flex-col items-start gap-2 w-[50%]">
                    <label className="text-xl font-semibold">Password</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        placeholder="Enter password"
                        className="rounded-md text-black p-2 w-[400px]"
                        value={password}
                        onChange={changeHandler}
                    />
                    <span onClick={()=> setShowPassword((prev) => !prev)}
                        className="absolute ml-[370px] mt-[49px] text-black">
                        {
                            showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)
                        }
                    </span>
                </div>
                <button type="submit" className="bg-yellow-400 rounded-md text-black font-semibold w-[400px] mt-5 p-2">
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login;