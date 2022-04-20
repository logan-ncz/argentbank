import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: '',
        token: '',
        users: [
            { firstName: 'Tony', lastName: 'Stark', email : 'tony@stark.com'},
            { firstName: 'Steve', lastName: 'Rogers', email: 'steve@rogers.com'}
        ]
    },
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
    },
});

export const { setEmail, setToken } = userSlice.actions;

export const userReducer = userSlice.reducer