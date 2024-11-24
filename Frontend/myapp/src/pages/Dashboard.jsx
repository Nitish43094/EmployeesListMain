import React from "react";  
import { useNavigate } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'
import {logout} from '../services/operations/adminAPI'
import Navbar from "./Navbar";
const Dashboard = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.admin)
    return(
        <div className="text-white flex flex-col text-start">
            <div>
                <h1 className="bg-yellow-300 text-black p-1 font-semibold">DashBord</h1>
            </div>
            <div className="m-auto mt-10">
                Welcome Admin Panal
            </div>
        </div>
    )
}

export default Dashboard;