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
    //Orders Loading
    [loadOrders.pending]: (state) => {
      state.loadOrdersLoading = true;
    },
    [loadOrders.fulfilled]: (state, { payload }) => {
      console.log('Here')
      if (payload)
        state.loadOrdersState = payload;
      state.loadOrdersLoading = false;
      state.loadOrdersErrorMessage = '';
    }, [loadOrders.rejected]: (state, { payload }) => {
      state.loadOrdersLoading = false;
      state.loadOrdersErrorMessage = payload;
    },

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