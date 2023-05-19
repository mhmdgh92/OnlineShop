import { Alert } from 'react-native';
import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

//Login
//If already in use, login with it
const initialState = {
  loginState: null,
  loginIsLoading: false,
  loginIsSuccess: false,
  loginGetDataSuccess: false,
  loginErrorMessage: ''
}

export const loginAPI = createAsyncThunk('loginAPI', async (data) => {
  let res = null;
  const {
    Email,
    Password
  } = data;
  await auth()
    .signInWithEmailAndPassword(Email, Password)
    .then(() => {
      res = Email;
    }).catch(error => {
      if (error.code === 'auth/email-already-in-use')
        res = Email;
      Alert.alert(error.code);
    });
  return res;
})

export const getUserFireStoreAPI = createAsyncThunk('getUserFireStoreAPI', async (Email) => {
  let res = null;
  await firestore()
    .collection('users')
    .doc(Email)
    .get()
    .then(documentSnapshot => {
      res = documentSnapshot.data();
      res.Email = Email;
    });
  return res;
})

export const loginSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
  extraReducers: {
    [loginAPI.pending]: (state) => {
      state.loginIsLoading = true;
    },
    [loginAPI.fulfilled]: (state, payload) => {
      state.loginIsLoading = false;
      if (payload.payload) {
        state.loginIsSuccess = true;
        state.loginState = { "Email": payload.payload };
      }
    },
    [loginAPI.rejected]: (state, { payload }) => {
      state.loginIsLoading = false;
      state.loginIsSuccess = false;
      state.loginErrorMessage = payload
    }, [getUserFireStoreAPI.pending]: (state) => {
      state.loginIsLoading = true;
    },
    [getUserFireStoreAPI.fulfilled]: (state, { payload }) => {
      state.loginIsLoading = false;
      state.loginGetDataSuccess = true;
      state.loginState = payload;
    },
    [getUserFireStoreAPI.rejected]: (state, { payload }) => {
      state.loginIsLoading = false;
      state.loginGetDataSuccess = false;
      state.loginErrorMessage = payload
    }
  }
})

export const { } = loginSlice.actions;
export default loginSlice.reducer;
