import { createSlice } from '@reduxjs/toolkit'
import { Alert } from 'react-native';
import { createAsyncThunk } from "@reduxjs/toolkit";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const initialState = {
  registerState: null,
  registerIsLoading: false,
  registerIsSuccess: false,
  registerSetDataSuccess: false,
  registerErrorMessage: ''
}

export const registerAPI = createAsyncThunk('registerAPI', async (data) => {
  let res = null;
  const {
    email,
    password
  } = data;
  await auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      res = data;
    }).catch(error => {
      Alert.alert(error.code);
    });
  return res;
})

export const setUserFireStoreAPI = createAsyncThunk('setUserFireStoreAPI', async (data) => {
  let res = null;
  const {
    email,
    phone
  } = data;
  await firestore()
    .collection('users')
    .doc(email)
    .set({
      phone: phone
    })
    .then(() => {
      Alert.alert('User account created successfully!');
      res = data;
    });
  return res;
})

export const registerSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
  },
  extraReducers: {
    [registerAPI.pending]: (state) => {
      state.registerIsLoading = true;
    },
    [registerAPI.fulfilled]: (state, { payload }) => {
      state.registerIsLoading = false;
      if (payload) {
        state.registerIsSuccess = true;
        state.registerState = payload;
      }
    },
    [registerAPI.rejected]: (state, { payload }) => {
      state.registerIsLoading = false;
      state.registerIsSuccess = false;
      state.registerErrorMessage = payload
    },
    [setUserFireStoreAPI.pending]: (state) => {
      state.registerIsLoading = true;
    },
    [setUserFireStoreAPI.fulfilled]: (state, { payload }) => {
      state.registerIsLoading = false;
      state.registerSetDataSuccess = true;
      state.registerState = payload;
    },
    [setUserFireStoreAPI.rejected]: (state, { payload }) => {
      state.registerIsLoading = false;
      state.registerSetDataSuccess = false;
      state.registerErrorMessage = payload
    }
  }
})

export const { } = registerSlice.actions;
export default registerSlice.reducer;
