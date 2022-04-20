import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: '',
        token: '',
        firstName: '',
        lastName: '',
    },
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setFirstName: (state, action) => {
            state.firstName = action.payload;
        },
        setLastName: (state, action) => {
            state.lastName = action.payload;
        },
    },
});

export const { setEmail, setToken, setFirstName, setLastName } = userSlice.actions;

export const userReducer = userSlice.reducer