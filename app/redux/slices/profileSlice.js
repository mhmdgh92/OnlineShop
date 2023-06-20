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
    firstName,
    lastName,
    phone,
    email
  } = data;

  try {
    await firestore()
      .collection('users')
      .doc(email)
      .update({
        firstName: '' + firstName,
        lastName: '' + lastName,
        phone: '' + phone
      })
      .then(() => {
        res = data;
      }).catch(error => {
        console.error(error)
      });
    return res;
  } catch (error) {
    console.error(error);
    return res;
  }
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

export default profileSlice.reducer;