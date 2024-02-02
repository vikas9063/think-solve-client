import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../components/user/slices/userSlice'
import sideNavReducer from '../components/user/slices/sideNavSlice'
import authReducer from '../components/user/slices/AuthSlice'

export const store = configureStore({
    reducer: {
        loginCheck: userReducer,
        sideNavOpenVal:sideNavReducer,
        auth: authReducer,
    },
})