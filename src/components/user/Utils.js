import { useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";

// Constants
export const USER_INFO='userInfo';
export const IS_MOBILE = () => {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.down("sm"));
};






export const getUserFromLocalStorage=()=>{
    let userInfo = localStorage.getItem(USER_INFO);
    return userInfo ? JSON.parse(atob(userInfo)) : null;
}

export const setUserToLocalStorage=(userData)=>{
    localStorage.setItem(USER_INFO, btoa(JSON.stringify(userData)));
    return true;
}