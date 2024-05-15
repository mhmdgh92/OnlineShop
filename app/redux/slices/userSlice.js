import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";
import uuid from 'react-native-uuid';
import * as Keychain from 'react-native-keychain';

//////////////////////
// USER OBJECT
// firstName
// lastName
// phone
// email
//////////////////////

const initialState = {
  userState: null,
  userLoadSuccess: false,
  userSaveSuccess: false,
  userRemoveSuccess: false,
  userIsLoading: false
}

export const loadUser = createAsyncThunk('loadUser', async () => {
  try {
    let credentials = await Keychain.getGenericPassword();
    let data = null;
    if (credentials)
      data = JSON.parse(credentials.username);
    return data;
  } catch (error) {
    console.error(error)
    return data;
  }
})

export const saveUser = createAsyncThunk('saveUser', async (data) => {
  try {
    userState = data;
    const password = uuid.v4();
    await Keychain.setGenericPassword(JSON.stringify(data), password);
    return data;
  } catch (error) {
    console.error(error)
  }
})

export const removeUser = createAsyncThunk('removeUser', async () => {
  try {
    await Keychain.resetGenericPassword();
    return null;
  } catch (error) {
    console.error(error)
  }
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reset: () => initialState
  },

  extraReducers: (builder) => {
    builder
      .addCase(loadUser.pending, (state) => {
        state.userIsLoading = true;
      })
      .addCase(loadUser.fulfilled, (state, { payload }) => {
        state.userState = payload;
        state.userLoadedSuccess = true;
        state.userIsLoading = false;
      })

      .addCase(saveUser.fulfilled, (state, { payload }) => {
        state.userSaveSuccess = true;
        state.userState = payload;
      })
      .addCase(removeUser.fulfilled, (state, { payload }) => {
        state.userRemoveSuccess = true;
        state.userState = payload;
      })
  }
})

export const { reset } = userSlice.actions;
export default userSlice.reducer;