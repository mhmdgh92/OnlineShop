import { Alert } from 'react-native';
import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";
import auth from '@react-native-firebase/auth';

//ForgetPass
const initialState = {
  forgetPassState: null,
  forgetPassIsLoading: false,
  forgetPassErrorMessage: ''
}

export const sendForgetPassAPI = createAsyncThunk('sendForgetPassAPI', async (data) => {
  try {
    let res = null;
    const {
      email
    } = data;
    await auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert('password reset email has been sent!');
        res = true;
      }).catch(error => {
        Alert.alert(error.toString());
      });
  } catch (error) {
    console.error('error:' + error);
  }
  return res;
})

export const forgetPassSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },

  extraReducers: (builder) => {
    builder
      .addCase(sendForgetPassAPI.pending, (state) => {
        state.forgetPassIsLoading = true;
        state.forgetPassState = null;
      })
      .addCase(sendForgetPassAPI.fulfilled, (state, { payload }) => {
        if (payload)
          state.forgetPassState = payload;
        state.forgetPassIsLoading = false;
        state.forgetPassErrorMessage = '';
      })
      .addCase(sendForgetPassAPI.rejected, (state, { payload }) => {
        state.forgetPassIsLoading = false;
        state.forgetPassErrorMessage = payload;
        state.forgetPassState = null;
      })
  }
})

export default forgetPassSlice.reducer;
