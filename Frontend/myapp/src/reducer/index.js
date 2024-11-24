import { combineReducers } from "@reduxjs/toolkit";
import adminReducer from '../slices/adminSlice'
import employeeReducer  from '../slices/authSlice'

const rootReducer = combineReducers({
    admin:adminReducer,
    auth:employeeReducer
})

export default rootReducer;
