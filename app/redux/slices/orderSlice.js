import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";
import firestore from '@react-native-firebase/firestore';

const initialState = {
  loadOrdersState: null,
  loadOrdersLoading: true,
  loadOrdersErrorMessage: '',

  orderAddState: null,
  orderAddingLoading: false,
  orderAddErrorMessage: '',

  removeCurrentCartOrderState: null,
  removeCurrentCartOrderLoading: false,
  removeCurrentCartOrderErrorMessage: ''
}

export const loadOrders = createAsyncThunk('loadOrders', async (data) => {
  const {
    email
  } = data;
  let res = [];
  await firestore()
    .collection('users')
    .doc(email)
    .get()
    .then(documentSnapshot => {
      if (documentSnapshot.data().orders) {
        documentSnapshot.data().orders.map((item, id) => {
          item.id = id;
          res.push(item);
        })
      }
    });
  return res;
})

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
    console.error(error)
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
    console.error(error);
  }
})

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    reset: () => initialState
  },
  extraReducers: (builder) => {
    builder
      //Orders Loading
      .addCase(loadOrders.pending, (state) => {
        state.loadOrdersLoading = true;
      })
      .addCase(loadOrders.fulfilled, (state, { payload }) => {
        if (payload)
          state.loadOrdersState = payload;
        state.loadOrdersLoading = false;
        state.loadOrdersErrorMessage = '';
      })
      .addCase(loadOrders.rejected, (state, { payload }) => {
        state.loadOrdersLoading = false;
        state.loadOrdersErrorMessage = payload;
      })

      //Order Adding
      .addCase(addToOrders.pending, (state) => {
        state.orderAddLoading = true;
      })
      .addCase(addToOrders.fulfilled, (state, { payload }) => {
        if (payload)
          state.orderAddState = payload;
        state.orderAddLoading = false;
        state.orderAddErrorMessage = '';
      })
      .addCase(addToOrders.rejected, (state, { payload }) => {
        state.orderAddLoading = false;
        state.orderAddErrorMessage = payload;
      })

      //Order Removing
      .addCase(removeCurrentCartOrder.pending, (state) => {
        state.removeCurrentCartOrderLoading = true;
      })
      .addCase(removeCurrentCartOrder.fulfilled, (state, { payload }) => {
        if (payload)
          state.removeCurrentCartOrderState = payload;
        state.removeCurrentCartOrderLoading = false;
        state.removeCurrentCartOrderErrorMessage = '';
      })
      .addCase(removeCurrentCartOrder.rejected, (state, { payload }) => {
        state.removeCurrentCartOrderLoading = false;
        state.removeCurrentCartOrderErrorMessage = payload;
      })
  }
})

export const { reset } = orderSlice.actions;
export default orderSlice.reducer;