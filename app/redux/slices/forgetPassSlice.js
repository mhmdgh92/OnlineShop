import { Alert } from 'react-native';
import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";
import auth from '@react-native-firebase/auth';

const initialState = {
  forgetPassState: null,
  forgetPassIsLoading: false,
  forgetPassErrorMessage: ''
}

export const sendForgetPassAPI = createAsyncThunk('sendForgetPassAPI', async (data) => {
  const {
    email
  } = data;
  try {
    let res = null;
    await auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert('password reset email has been sent!');
        res = true;
      })
      .catch(error => {
        Alert.alert(error.toString())
      });

  } catch (error) {
    console.error(error)
  }
  return res;
})

export const forgetPassSlice = createSlice({
  name: 'forgetPass',
  initialState,
  reducers: {
  }, extraReducers: {
    [sendForgetPassAPI.pending]: (state) => {
      state.forgetPassIsLoading = true;
      state.forgetPassState = null;
    },
    [sendForgetPassAPI.fulfilled]: (state, { payload }) => {
      if (payload)
        state.forgetPassState = payload;
      state.forgetPassIsLoading = false;
      state.forgetPassErrorMessage = '';
    }, [sendForgetPassAPI.rejected]: (state, { payload }) => {
      state.forgetPassIsLoading = false;
      state.forgetPassErrorMessage = payload;
      state.forgetPassState = null;
    }
  }
})

export default forgetPassSlice.reducer;