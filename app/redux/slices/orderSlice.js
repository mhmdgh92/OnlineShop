import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";
import firestore from '@react-native-firebase/firestore';

const initialState = {
  orderAddState: null,
  orderAddingLoading: false,
  orderAddErrorMessage: '',

  removeCurrentCartOrderState: null,
  removeCurrentCartOrderLoading: false,
  removeCurrentCartOrderErrorMessage: ''
}

export const addToOrders = createAsyncThunk('addToOrders', async (data) => {
  try {
    const {
      email,
      currentOrderObj
    } = data;
    let res = false;
    await firestore()
      .collection('users')
      .doc(email)
      .update({
        'orders': firestore.FieldValue.arrayUnion(currentOrderObj)
      }).then(() => {
        res = true;
      });
    return res;
  } catch (error) {
    console.log(error)
  }
})

export const removeCurrentCartOrder = createAsyncThunk('removeCurrentCartOrder', async (data) => {
  try {
    const {
      email
    } = data;
    let res = false;
    await firestore()
      .collection('users')
      .doc(email)
      .update({
        ['currentOrder']: firestore.FieldValue.delete(),
      }).then(() => {
        res = true;
      });
    return res;
  } catch (error) {
    console.log(error);
  }
})

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    reset: () => initialState
  }, extraReducers: {
    //Order Adding
    [addToOrders.pending]: (state) => {
      state.orderAddLoading = true;
    },
    [addToOrders.fulfilled]: (state, { payload }) => {
      if (payload)
        state.orderAddState = payload;
      state.orderAddLoading = false;
      state.orderAddErrorMessage = '';
    }, [addToOrders.rejected]: (state, { payload }) => {
      state.orderAddLoading = false;
      state.orderAddErrorMessage = payload;
    },

    //Order Removing
    [removeCurrentCartOrder.pending]: (state) => {
      state.removeCurrentCartOrderLoading = true;
    },
    [removeCurrentCartOrder.fulfilled]: (state, { payload }) => {
      if (payload)
        state.removeCurrentCartOrderState = payload;
      state.removeCurrentCartOrderLoading = false;
      state.removeCurrentCartOrderErrorMessage = '';
    }, [removeCurrentCartOrder.rejected]: (state, { payload }) => {
      state.removeCurrentCartOrderLoading = false;
      state.removeCurrentCartOrderErrorMessage = payload;
    },
  }
})

export const { reset } = orderSlice.actions;
export default orderSlice.reducer;