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
  try {
    await firestore()
      .collection('users')
      .doc(email)
      .update({
        'currentOrder.shippingAddress': shippingInfo
      }).then(() => {
        res = true;
      }).catch(error => {
        console.error(error)
      });
    return res;
  } catch (error) {
    console.error(error);
  }
})

export const shippingSlice = createSlice({
  name: 'shipping',
  initialState,
  reducers: {
  },

  extraReducers: (builder) => {
    builder
      .addCase(sendShippingInfo.pending, (state) => {
        state.shippingLoading = true;
        state.shippingState = null;
      })
      .addCase(sendShippingInfo.fulfilled, (state, { payload }) => {
        if (payload)
          state.shippingState = payload;
        state.shippingLoading = false;
        state.shippingErrorMessage = '';
      })
      .addCase(sendShippingInfo.rejected, (state, { payload }) => {
        state.shippingLoading = false;
        state.shippingErrorMessage = payload;
      })
  }
})

export default shippingSlice.reducer;