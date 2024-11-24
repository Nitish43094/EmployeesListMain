import axios from "axios";

export const axiosInstance = axios.create({});

export const apiConnector = async (method, url, bodyData, header, params) => {
    try {
        const response = await axiosInstance({
            method: method,
            url: url,
            data: bodyData || null,
            headers: header || null,
            params: params || null,
        });
        return response.data;
    } catch (error) {
        console.error("API Call Error : ", error.message);
        throw error;
    }
} 