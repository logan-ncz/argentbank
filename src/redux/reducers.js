import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
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

const { actions, reducer } = userSlice

export const { setEmail, setToken, setFirstName, setLastName } = actions;

export default reducer