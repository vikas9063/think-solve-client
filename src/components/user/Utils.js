// Constants
export const USER_INFO='userInfo';






export const getUserFromLocalStorage=()=>{
    let userInfo = localStorage.getItem(USER_INFO);
    return userInfo ? JSON.parse(atob(userInfo)) : JSON.parse("{}");
}

export const setUserToLocalStorage=(userData)=>{
    localStorage.setItem(USER_INFO, btoa(JSON.stringify(userData)));
    return true;
}