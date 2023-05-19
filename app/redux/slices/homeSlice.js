import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";
import firestore from '@react-native-firebase/firestore';

const initialState = {
  homeState: [],
  homeIsLoading: true,
  homeErrorMessage: ''
}

export const loadData = createAsyncThunk('loadData', async () => {
  let res = [];
  await firestore()
    .collection('home')
    .get()
    .then(documentSnapshot => {
      documentSnapshot.docs.map((item) => {
        res.push(item.data());
      });
    });
  return res;
})

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
  }, extraReducers: {
    [loadData.pending]: (state) => {
      state.homeIsLoading = true;
    },
    [loadData.fulfilled]: (state, { payload }) => {
      if (payload)
        state.homeState = payload;
      state.homeIsLoading = false;
      state.homeErrorMessage = '';
    }, [loadData.rejected]: (state, { payload }) => {
      state.homeIsLoading = false;
      state.homeErrorMessage = payload;
    }
  }
})

export const { } = homeSlice.actions;
export default homeSlice.reducer;