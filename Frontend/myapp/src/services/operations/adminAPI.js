import { apiConnector } from '../apiConnection';
import { adminEndpoints } from '../apis'
import { setadmin } from '../../slices/adminSlice'
import {toast} from 'react-hot-toast'
import {setToken} from '../../slices/authSlice';

const {
    ADMIN_SIGNUP_API,
    ADMIN_LOGIN_API,
} = adminEndpoints;

export function Signup(email, name, password, confirmPassword, navigate) {
    return async (dispatch) => {
        try {
            const response = await apiConnector("POST", ADMIN_SIGNUP_API, { email, name, password, confirmPassword });
            console.log("SIGNUP API RESPONSE............", response)
            if (!response.success) {
                console.log("Response is ..........", response.success);
                throw new Error(response.success);
            }
            toast.success("Signup Successful")
            navigate("/login")
        }catch (error) {
            console.log("SIGNUP API ERROR............", error)
            toast.error("Signup Failed")
            navigate("/signup")
          }
    }
}

export function login(email,password,navigate){
    return async(dispatch) =>{
        try{
            const response = await apiConnector("POST",ADMIN_LOGIN_API,{email,password})
            console.log("LOGIN API RESPONSE............", response)
            if (!response.user) {
                throw new Error(response.user)
            }
            toast.success("Login Successful")
            dispatch(setToken(response.token))
            dispatch(setadmin({...response.user}))
            localStorage.setItem("token", JSON.stringify(response.token))
            localStorage.setItem("user", JSON.stringify(response.user))
            navigate("/dashboard")
        }catch (error) {
            console.log("LOGIN API ERROR............", error)
            toast.error("Login Failed")
          }
    }
}
export function logout(navigate) {
    return (dispatch) => {
      dispatch(setToken(null))
      dispatch(setadmin(null))
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      toast.success("Logged Out")
      navigate("/")
    }
  }