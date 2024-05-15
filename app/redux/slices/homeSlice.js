import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";
import firestore from '@react-native-firebase/firestore';


const initialState = {
  homeState: null,
  homeIsLoading: true,
  homeErrorMessage: ''
}

export const loadHomeData = createAsyncThunk('loadHomeData', async () => {
  let res = [];

  try {
    await firestore()
      .collection('home')
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.docs.length > 1)
          documentSnapshot.docs.map((item) => {
            res.push(item.data());
          });
      }).catch((error) => {
        console.error('rejected', error)
      });
  } catch (error) {
    console.error('rejected', error)
  }
  return res;
})

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadHomeData.pending, (state) => {
        console.log('homeIsLoading');
        state.homeIsLoading = true;
      })
      .addCase(loadHomeData.fulfilled, (state, { payload }) => {
        console.log('fulfilled');
        if (payload)
          state.homeState = payload;
        state.homeIsLoading = false;
        state.homeErrorMessage = '';
      })
      .addCase(loadHomeData.rejected, (state, { payload }) => {
        console.error('Rejected!')
        state.homeIsLoading = false;
        state.homeErrorMessage = payload;
      })
  }
})

export default homeSlice.reducer;