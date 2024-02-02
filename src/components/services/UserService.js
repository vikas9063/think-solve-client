import { getUserFromLocalStorage } from "../user/Utils";
import { axiosConfig } from "./AxiosConfig";



export const getToken=()=>{
   let userInfo = getUserFromLocalStorage();
   return userInfo?  JSON.parse(userInfo)?.accessToken : null; 
}

export const createUser = async (payload) => {
    try {
      const response = await axiosConfig.post(`/auth/register`, payload);
      console.log('Response from createUser:', response);
      return response.data;
    } catch (error) {
      console.error('Error in createUser:', error);
      throw error; 
    }
  };

export const doLoginUser = async (payload)=>{
  try {
    const response = await axiosConfig.post(`/auth/login`, payload);
    console.log('Response from createUser:', response);
    return response.data;
  } catch (error) {
    console.error('Error in createUser:', error);
    throw error; 
  }
};


export const userProfileInfo= async (username)=>{
  try {
    const response = await axiosConfig.get(`/user/profile-info/${username}`);
    console.log('Response from Profile Info :', response);
    return response.data;
  } catch (error) {
    console.error('Error in Profile Info :', error);
    throw error; 
  }
}