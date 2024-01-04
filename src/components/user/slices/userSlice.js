import { createSlice } from '@reduxjs/toolkit'
import { isUserLoggedIn } from '../UserService'

const initialState = {
    value: isUserLoggedIn(),
}


export const userSlice = createSlice({
    name: 'loginCheck',
    initialState,
    reducers: {
        doLogin: (state) => {
            state.value = true;
        },
        doLogout: (state) => {
            state.value = false;
        }
    },
})

export const { doLogin, doLogout } = userSlice.actions;
export default userSlice.reducer;