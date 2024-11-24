import React from "react";
import { Routes, Route, Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../services/operations/adminAPI'
const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.admin)
    const onclickhandler = () => {
        dispatch(logout(navigate))
    }
    return (
        <div className="text-white text-start">
            <div className=" p-2 bg-slate-700">
                {
                    user !== null && (
                        <div className="flex gap-10 justify-evenly">
                            <div className="flex gap-10">
                                <button 
                                onClick={() => navigate("/dashboard")}
                                className="hover:text-black hover:font-semibold">
                                    Home
                                </button>

                                <button 
                                onClick={() => navigate("/dashboard/employeeList")}
                                className="hover:text-black hover:font-semibold">
                                    Employess List
                                </button>
                            </div>
                            <div className="flex gap-10">
                                <h1 className="hover:text-black hover:font-semibold">{user.name}</h1>
                                <button 
                                className="hover:text-black hover:font-semibold" 
                                onClick={onclickhandler}>
                                    Logout
                                </button>
                            </div>
                        </div>
                    )
                }
                {

                    user === null && (
                        <Link to="/login">
                            <button className="text-center hover:text-black hover:font-semibold"
                                onClick={() => navigate("/login")} >
                                Login
                            </button>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar;