import { Alert } from 'react-native';
import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";
import firestore from '@react-native-firebase/firestore';

const initialState = {
  profileState: null,
  updateProfileLoading: false,
  profileErrorMessage: ''
}

export const saveProfile = createAsyncThunk('saveProfile', async (data) => {
  let res = null;
  const {
    FirstName,
    LastName,
    Phone,
    Email
  } = data;

  await firestore()
    .collection('users')
    .doc(Email)
    .set({
      FirstName: '' + FirstName,
      LastName: '' + LastName,
      Phone: '' + Phone
    })
    .then(() => {
      res = data;
    });
  return res;
})

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
  }, extraReducers: {
    [saveProfile.pending]: (state) => {
      state.updateProfileLoading = true;
    },
    [saveProfile.fulfilled]: (state, { payload }) => {
      if (payload)
        state.profileState = payload;
      state.updateProfileLoading = false;
      state.profileErrorMessage = '';
    }, [saveProfile.rejected]: (state, { payload }) => {
      state.updateProfileLoading = false;
      state.profileErrorMessage = payload;
    }

  }
})

export const { } = profileSlice.actions;
export default profileSlice.reducer;