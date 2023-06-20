import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    let data = JSON.parse(await AsyncStorage.getItem('user'));
    return data;
  } catch (error) {
    console.error(error)
    return data;
  }
})

export const saveUser = createAsyncThunk('saveUser', async (data) => {
  try {
    userState = data;
    await AsyncStorage.setItem('user', JSON.stringify(data));
    return data;
  } catch (error) {
    console.error(error)
  }
})

export const removeUser = createAsyncThunk('removeUser', async () => {
  try {
    await AsyncStorage.removeItem('user');
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
  }, extraReducers: {
    [loadUser.fulfilled]: (state, { payload }) => {
      state.userState = payload;
      state.userLoadedSuccess = true;
      state.userIsLoading = false;
    }, [loadUser.pending]: (state) => {
      state.userIsLoading = true;
    },
    [saveUser.fulfilled]: (state, { payload }) => {
      state.userSaveSuccess = true;
      state.userState = payload;
    },
    [removeUser.fulfilled]: (state, { payload }) => {
      state.userRemoveSuccess = true;
      state.userState = payload;
    }
  }
})

export const { reset } = userSlice.actions;
export default userSlice.reducer;