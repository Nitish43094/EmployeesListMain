import { apiConnector } from '../apiConnection';
import { employeesEndpoints } from '../apis'
import {toast} from 'react-hot-toast'
import {setSignupData} from '../../slices/authSlice'

const {
    EMPLOYEE_SIGNUP_API,
    UPDATE_EMPLOYEE_API,
    DELETE_EMPLOYEE_API,
    GETALLEMPLOYESS_API
} = employeesEndpoints;
export function Signup(email, name, phone_no,designation,gender,course, navigate) {
    return async (dispatch) => {
        try {
            console.log("Name is ",name)
            const response = await apiConnector("POST", EMPLOYEE_SIGNUP_API, { email, name, phone_no,designation,gender,course });
            console.log("SIGNUP API RESPONSE............", response)
            if (!response.success) {
                console.log("Response is ..........", response.success);
                throw new Error(response.success);
            }
            toast.success("Signup Successful")
            // dispatch(setSignupData({...response.user}))
            navigate("/dashboard/employeeList")
        }catch (error) {
            console.log("SIGNUP API ERROR............", error)
            toast.error("Signup Failed")
            navigate("/dashboard/employeeList")
          }
    }
}
export function updateProfile(data,navigate) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        try {
            const response = await apiConnector("PUT",
                UPDATE_EMPLOYEE_API, data,
                { Authorization: `Bearer ${data.email}`, }
            )
            console.log("Update Profile is Successfull....", response)
            if (!response.success) {
                throw new Error(response.success)
            }
            toast.success("Profile Update Successfully")
            navigate("/dashboard/employeeList")
        } catch (error) {
            console.log("UPDATE_PROFILE_API API ERROR............", error)
            toast.error("Could Not Update Profile")
            toast.error("Could Not Update Profile")
        }
        toast.dismiss(toastId)
    }
}

export function deleteAccount(email, navigate,) {
    return async (dispatch) => {
        try {
            console.log("email is ... ",email)
            const response = await apiConnector("DELETE",DELETE_EMPLOYEE_API,{email})
            console.log("DELETE ACCOUNT API RESPONSE.........",response)

            if(!response.success){
                throw new Error(response.message);
            }
            toast.success("Account Deleted Successfully")
            navigate("/dashboard/employeeList")
        } catch (error) {
            console.log("DELETE_PROFILE_API API ERROR............", error)
            toast.error("Could Not Delete Profile")
        }
    }
}

export function getAllEmployees (setdata,navigate){
    return async() =>{
        try{
            const response = await apiConnector("GET",GETALLEMPLOYESS_API);
            console.log("GET ALL EMPLOYEES RESPONSE API.....",response)
            if(!response.success){
                throw new Error(response.message);
            }
            setdata(response.data);
            navigate("/dashboard/employeeList")
        }catch (error) {
            console.log("GET ALL EMPLOYEES API ERROR............", error)
            toast.error("Could Not Find Profile")
        }

    }
}