import React from "react";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../services/operations/employeeAPI";
import toast from "react-hot-toast";

const UpdateEmployeedata = () => {
    const { signupData } = useSelector((state) => state.auth);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({
        defaultValues: {
            email: signupData.edata.email,
            name: signupData.edata.name,
            phone_no: signupData.edata.phone_no,
            designation: signupData.edata.designation,
            gender: signupData.edata.gender,
            course: signupData.edata.course,
        },
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitHandler = (data) => {
        // console.log("Update data is---", data);
        if(data.phone_no.length >10 || data.phone_no.length < 10){
            toast.error("Enter Correct Phone Number")
            return;
        }
        try {
            dispatch(updateProfile(data, navigate));
        } catch (error) {
            console.log("ERROR MESSAGE............", error.message);
        }
    };

    return (
        <div>
            <div className="text-start">
                <h1 className="bg-yellow-300 text-black p-1 font-semibold">Update Employee Data</h1>
            </div>
            <form
                onSubmit={handleSubmit(submitHandler)}
                className="flex flex-col gap-5 justify-center items-center mt-5 w-full p-5"
            >
                <table className="p-5 table-auto w-[50%]">
                    <tbody>
                        <tr>
                            <th className="text-start">Name</th>
                            <th>
                                <input
                                    type="text"
                                    {...register("name", { required: true })}
                                    className="p-1 bg-slate-900 w-full rounded-md"
                                    placeholder="Enter Name"
                                />
                                {errors.name && (
                                    <span className="-mt-1 text-[12px] text-yellow-100">
                                        Please enter Name.
                                    </span>
                                )}
                            </th>
                        </tr>
                        <tr>
                            <th className="text-start">Email</th>
                            <th>
                                <input
                                    type="email"
                                    {...register("email")}
                                    className="p-1 bg-slate-900 w-full rounded-md"
                                    disabled
                                />
                            </th>
                        </tr>
                        <tr>
                            <th className="text-start">Mobile No</th>
                            <th>
                                <input
                                    type="text"
                                    {...register("phone_no", { required: true })}
                                    className="p-1 bg-slate-900 w-full rounded-md"
                                    placeholder="Enter phone number"
                                />
                                {errors.phone_no && (
                                    <span className="-mt-1 text-[12px] text-yellow-100">
                                        Please enter phone number.
                                    </span>
                                )}
                            </th>
                        </tr>
                        <tr>
                            <th className="text-start">Designation</th>
                            <th>
                                <select
                                    {...register("designation", { required: true })}
                                    className="p-1 bg-slate-900 w-full rounded-md"
                                >
                                    <option value={signupData.edata.designation}>
                                        {signupData.edata.designation}
                                    </option>
                                    <option value="HR">HR</option>
                                    <option value="Manager">Manager</option>
                                    <option value="Salse">Salse</option>
                                </select>
                                {errors.designation && (
                                    <span className="-mt-1 text-[12px] text-yellow-100">
                                        Please enter designation.
                                    </span>
                                )}
                            </th>
                        </tr>
                        <tr>
                            <th className="text-start">Gender</th>
                            <th>
                                <select
                                    {...register("gender", { required: true })}
                                    className="p-1 bg-slate-900 w-full rounded-md"
                                >
                                    <option value={signupData.edata.gender}>
                                        {signupData.edata.gender}
                                    </option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                                {errors.gender && (
                                    <span className="-mt-1 text-[12px] text-yellow-100">
                                        Please enter gender.
                                    </span>
                                )}
                            </th>
                        </tr>
                        <tr>
                            <th className="text-start">Course</th>
                            <th>
                                <select
                                    {...register("course", { required: true })}
                                    className="p-1 bg-slate-900 w-full rounded-md"
                                >
                                    <option value={signupData.edata.course}>
                                        {signupData.edata.course}
                                    </option>
                                    <option value="MCA">MCA</option>
                                    <option value="BCA">BCA</option>
                                    <option value="B.Tech">B.Tech</option>
                                </select>
                                {errors.course && (
                                    <span className="-mt-1 text-[12px] text-yellow-100">
                                        Please enter course.
                                    </span>
                                )}
                            </th>
                        </tr>
                    </tbody>
                </table>
                <button type="submit" className="bg-yellow-400 p-2 rounded-md text-black font-semibold">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default UpdateEmployeedata;
