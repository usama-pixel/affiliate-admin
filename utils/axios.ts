import axios from "axios";
import { BASE_URL } from "./env";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
})

axiosInstance.interceptors.request.use(
    (config) => {
        // Example: config.headers.Authorization = `Bearer ${yourToken}`;
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle errors, like logging out if the token is expired
        return Promise.reject(error)
    }
)

export default axiosInstance;