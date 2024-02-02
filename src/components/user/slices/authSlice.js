// authSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { USER_INFO, getUserFromLocalStorage, setUserToLocalStorage } from '../Utils';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    // authToken: localStorage.getItem('authToken') || null,
    authToken: getUserFromLocalStorage() || null,
  },
  reducers: {
    setAuthToken: (state, action) => {
      state.authToken = action.payload;
    //   localStorage.setItem('authToken', action.payload);
        setUserToLocalStorage(action.payload)
    },
    clearAuthToken: (state) => {
      state.authToken = null;
      localStorage.removeItem(USER_INFO);
    },
  },
});

export const { setAuthToken, clearAuthToken } = authSlice.actions;
export const selectAuthToken = (state) => state.auth.authToken;

export default authSlice.reducer;
