import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogin: false,
  loading: false,
  error: null,
  isGettingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.pending]: state => {
      state.loading = true;
    },
    [authOperations.register.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogin = true;
      state.error = null;
    },
    [authOperations.register.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [authOperations.login.pending]: state => {
      state.loading = true;
    },
    [authOperations.login.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogin = true;
      state.error = null;
    },
    [authOperations.login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [authOperations.logout.fulfilled]: state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLogin = false;
    },
    [authOperations.getCurrentUser.pending]: state => {
      state.isGettingCurrentUser = true;
    },
    [authOperations.getCurrentUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLogin = true;
      state.isGettingCurrentUser = false;
    },
    [authOperations.getCurrentUser.rejected]: state => {
      state.isGettingCurrentUser = false;
    },
  },
});

export default authSlice.reducer;
