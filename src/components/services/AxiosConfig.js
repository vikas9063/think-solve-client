import axios from "axios";
import { getToken } from "./UserService";
import { USER_INFO, getUserFromLocalStorage, setUserToLocalStorage } from "../user/Utils";

export const BASE_URL = "http://localhost:9190/api/v1";

export const axiosConfig = axios.create({
    baseURL: BASE_URL
});

axiosConfig.interceptors.request.use(
    function (config) {
        const token = getToken();
        console.log("token", token);
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
            config.headers['Content-Type'] = 'application/json';
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axiosConfig.interceptors.response.use(
    function (response) {
        return response;
    },
    async function (error) {
        const originalRequest = error.config;
        console.log(originalRequest)
        let errorMsg = error?.response?.data?.message;
        console.log(errorMsg);
        if (error.response.status === 401 && errorMsg === "Token Expired") {
            originalRequest._retry = true;
            try {
                const refreshToken = getRefreshToken();
                console.log(refreshToken);
                const refreshResponse = await axios.post(`${BASE_URL}/auth/token`, {
                    refreshToken: refreshToken
                });
                const newToken = refreshResponse.data;
                console.log(newToken);
                setToken(newToken);
                originalRequest.headers['Authorization'] = 'Bearer ' + newToken.accessToken;
                return axios(originalRequest);
            } catch (refreshError) {

                let errMsg = refreshError.response.data.message;
                console.log(errMsg);
                if (refreshError.response && refreshError.response.status === 400 && (errMsg === "Refresh Token Expired" || "Invalid Refresh Token")) {
                    clearToken();
                    window.location.href = "/login";
                } else {
                    return Promise.reject(refreshError);
                }
            }
        }
        return Promise.reject(error);
    }
);

function getRefreshToken() {
    let userInfo = getUserFromLocalStorage();
    return userInfo ? JSON.parse(userInfo)?.refreshToken : null;
}

function setToken(newToken) {
    setUserToLocalStorage(JSON.stringify(newToken));
}

function clearToken() {
    localStorage.removeItem(USER_INFO)
}
