import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: true,
}


export const sideNavSlice = createSlice({
    name: 'sideNav',
    initialState,
    reducers: {
        openCloseNav: (state) => {
            state.value = state.value = true ? false : true;
        }
    },
})

export const { openCloseNav } = sideNavSlice.actions;
export default sideNavSlice.reducer;
