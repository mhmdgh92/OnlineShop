import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";
import firestore from '@react-native-firebase/firestore';

const initialState = {
  shippingState: null,
  shippingLoading: false,
  shippingErrorMessage: ''
}

export const sendShippingInfo = createAsyncThunk('sendShippingInfo', async (data) => {
  const {
    email,
    shippingInfo
  } = data;
  let res = false;
  await firestore()
    .collection('users')
    .doc(email)
    .update({
      'currentOrder.shippingAddress': shippingInfo
    }).then(() => {
      res = true;
    });
  return res;
})

export const shippingSlice = createSlice({
  name: 'shipping',
  initialState,
  reducers: {
  }, extraReducers: {
    [sendShippingInfo.pending]: (state) => {
      state.shippingLoading = true;
    },
    [sendShippingInfo.fulfilled]: (state, { payload }) => {
      if (payload)
        state.shippingState = payload;
      state.shippingLoading = false;
      state.shippingErrorMessage = '';
    }, [sendShippingInfo.rejected]: (state, { payload }) => {
      state.shippingLoading = false;
      state.shippingErrorMessage = payload;
    },
  }
})

export const { } = shippingSlice.actions;
export default shippingSlice.reducer;