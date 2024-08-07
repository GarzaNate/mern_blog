import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    loading: false,
    error: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
    },
    signInSuccess: (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
        state.error = false;
    },
    signInFailure: (state) => {
        state.loading = false;
        state.error = true;
    },
    signOutSuccess: (state) => {
        state.currentUser = null;
        state.error = null;
        state.loading = false;
    }
}
});

export const { signInStart, signInSuccess, signInFailure, signOutSuccess} = userSlice.actions;

export default userSlice.reducer;