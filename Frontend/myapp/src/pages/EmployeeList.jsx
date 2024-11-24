import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteAccount, getAllEmployees } from "../services/operations/employeeAPI";
import {setSignupData} from '../slices/authSlice'
const EmployeeList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [data, setdata] = useState([]);

    useEffect(() => {
        dispatch(getAllEmployees(setdata, navigate))
    }, [])
    return (
        <div>
            <div className="text-start">
                <h1 className="bg-yellow-300 text-black p-1 font-semibold">Employee List</h1>
            </div>
            <div className=" text-start text-black flex justify-end">
                <button
                    className="bg-green-900 w-[300px] text-start p-1"
                    onClick={() => navigate('/dashbord/employeeList/createEmployee')}>
                    Create Employee
                </button>
            </div>
            {/* <img className="rounded-full" src={edata.image} alt={edata.name}/> */}
            <div className="flex gap-5 justify-center">
                <table className="w-full">
                    <tr className="bg-blue-200">
                        <th>Unique Id</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile No</th>
                        <th>Designation</th>
                        <th>Gender</th>
                        <th>Course</th>
                        <th>Create Date</th>
                        <th>Action</th>
                    </tr>
                    {
                        data.map((edata, index) => (
                            <tr className="border-[1px]">
                                <th>{index}</th>
                                <th><img className="rounded-full w-[50px]" src={edata.image} alt={edata.name}/></th>
                                <th>{edata.name}</th>
                                <th>{edata.email}</th>
                                <th>{edata.phone_no}</th>
                                <th>{edata.designation}</th>
                                <th>{edata.gender}</th>
                                <th>{edata.course}</th>
                                <th>{edata.createAt}</th>
                                <th>
                                    <button
                                    onClick={()=>
                                       {
                                        dispatch(setSignupData({edata}))
                                        navigate("/dashbord/employeeList/updateEmployee")
                                       }
                                    }>Edit</button>
                                    <span> - </span>
                                    <button
                                    onClick={() => dispatch(deleteAccount(edata.email,navigate))}
                                    >Delete</button>
                                </th>
                            </tr>
                        ))
                    }
                </table>

            </div>
        </div>
    )
}

export default EmployeeList;