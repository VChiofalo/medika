import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
    },
    reducers: {
        login: (state, action) => {
            console.log(action)
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
    },
})

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;