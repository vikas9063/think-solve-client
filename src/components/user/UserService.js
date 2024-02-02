import { getUserFromLocalStorage } from "./Utils"

export const isUserLoggedIn = () => {
    const user = getUserFromLocalStorage();
    console.log(user);
    return user ? true : false
}

