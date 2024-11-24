const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:4000/api/v1";

export const adminEndpoints = {
    ADMIN_SIGNUP_API : BASE_URL + "/admin/create-admin-account",
    ADMIN_LOGIN_API : BASE_URL + "/admin/login"
}

export const employeesEndpoints = {
    EMPLOYEE_SIGNUP_API : BASE_URL + "/employees/createAccount",
    UPDATE_EMPLOYEE_API : BASE_URL + "/employees/update-account",
    DELETE_EMPLOYEE_API : BASE_URL + "/employees/deleteAccount",
    GETALLEMPLOYESS_API : BASE_URL + "/employees/getAllEmployeeData"
}