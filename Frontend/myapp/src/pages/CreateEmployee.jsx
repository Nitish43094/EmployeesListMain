import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Signup } from "../services/operations/employeeAPI";
import toast from "react-hot-toast";
const CreateEmployee = () => {
    const [data, setdata] = useState({
        email: "", name: "", phone_no: "", designation: "", gender: "", course: "",
    })
    const {email,name,phone_no,designation,gender,course} = data;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    function changeHandler(e) {
        setdata((prev) =>({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }
    function submitHandler(e){
        if(phone_no.length > 10 || phone_no.length < 10) {
            toast.error("Enter Correct Phone number")
            return;
        }
        e.preventDefault();
        console.log("Tha Employee Data is.....",data)
        dispatch(Signup(email,name,phone_no,designation,gender,course,navigate))
    }

    return (
        <div>
            <div className="text-start">
                <h1 className="bg-yellow-300 text-black p-1 font-semibold">Create Employee</h1>
            </div>
            <form onSubmit={submitHandler}
            className="flex flex-col gap-5 justify-center items-center mt-5 w-full p-5">
                <table className="p-5 table-auto w-[50%]">
                    <tr className="">
                        <th className="text-start">Name</th>
                        <th>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                value={data.name}
                                className="p-1 bg-slate-900 w-full rounded-md"
                                placeholder="Enter Name"
                                onChange={changeHandler} />
                        </th>
                    </tr>
                    <tr className="">
                        <th className="text-start">Email</th>
                        <th>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                value={data.email}
                                className="p-1 bg-slate-900 w-full rounded-md"
                                placeholder="Enter email"
                                onChange={changeHandler} />
                        </th>
                    </tr>
                    <tr className="">
                        <th className="text-start">Mobile No</th>
                        <th>
                            <input
                                type="text"
                                name="phone_no"
                                id="phone_no"
                                required
                                value={data.phone_no}
                               className="p-1 bg-slate-900 w-full rounded-md"
                                placeholder="Enter phone_no"
                                onChange={changeHandler} />
                        </th>
                    </tr>
                    <tr className="">
                        <th className="text-start">Designation</th>
                        <th>
                            <select
                                name="designation"
                                id="designation"
                                required
                                value={data.designation}
                                onChange={changeHandler}
                                className="p-1 bg-slate-900 w-full rounded-md">
                                <option>Select One</option>
                                <option value="HR">HR</option>
                                <option value="Manager">Manager</option>
                                <option value="Salse">Salse</option>
                            </select>
                        </th>
                    </tr>
                    <tr className="">
                        <th className="text-start">Gender</th>
                        <th>
                        <select
                                name="gender"
                                id="gender"
                                required
                                value={data.gender}
                                onChange={changeHandler}
                                className="p-1 bg-slate-900 w-full rounded-md">
                                <option>Select One</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </th>
                    </tr>
                    <tr className="">
                        <th className="text-start">Course</th>
                        <th>
                            <select
                                name="course"
                                id="course"
                                value={data.course}
                                onChange={changeHandler}
                                className="p-1 bg-slate-900 w-full rounded-md">
                                <option>Select One</option>
                                <option value="MCA">MCA</option>
                                <option value="BCA">BCA</option>
                                <option value="B.Tech">B.Tech</option>
                            </select>
                        </th>
                    </tr>
                </table>
                <button type="submit" className="bg-yellow-400 p-2 rounded-md text-black font-semibold">
                    Submit
                </button>
            </form>

        </div>
    )
}

export default CreateEmployee;