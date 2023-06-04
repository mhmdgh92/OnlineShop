import { Alert } from 'react-native';
import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";
import firestore from '@react-native-firebase/firestore';

const initialState = {
  cartState: null,
  cartIsLoading: true,
  cartAddLoading: false,
  updateCartLoading: false,
  cartHasUpdated: null,
  cartErrorMessage: ''
}

export const addToCart = createAsyncThunk('addToCart', async (data) => {
  const {
    Email,
    cartItemObj
  } = data;
  let res = false;
  await firestore()
    .collection('users')
    .doc(Email)
    .update({
      'currentOrder.cart': firestore.FieldValue.arrayUnion(cartItemObj)
    }).then(() => {
      Alert.alert('Product added successfully!');
      res = true;
    });
  return res;
})

export const loadCartData = createAsyncThunk('loadCartData', async (data) => {
  const {
    Email
  } = data;
  console.log(Email)
  let res = [];
  await firestore()
    .collection('users')
    .doc(Email)
    .get()
    .then(documentSnapshot => {
      documentSnapshot.data().currentOrder.cart.map((item, id) => {
        item.id = id;
        res.push(item);
      })
    }).catch(error => {
      res = error;
    });
  return res;
})

export const updateCart = createAsyncThunk('updateCart', async (data) => {
  let res = null;
  try {
    const {
      Email,
      updatedCart
    } = data;
    await firestore()
      .collection('users')
      .doc(Email)
      .update({
        'currentOrder.cart': updatedCart
      });
    res = 1;
  } catch (error) {
    console.log(error)
  }
  return res;
})

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
  }, extraReducers: {
    [addToCart.pending]: (state) => {
      state.cartAddLoading = true;
    },
    [addToCart.fulfilled]: (state, { payload }) => {
      if (payload)
        state.cartState = payload;
      state.cartAddLoading = false;
      state.cartErrorMessage = '';
    }, [addToCart.rejected]: (state, { payload }) => {
      state.cartAddLoading = false;
      state.cartErrorMessage = payload;
    },


    [loadCartData.pending]: (state) => {
      state.cartIsLoading = true;
    },
    [loadCartData.fulfilled]: (state, { payload }) => {
      if (payload)
        state.cartState = payload;
      state.cartIsLoading = false;
      state.cartErrorMessage = '';
    }, [loadCartData.rejected]: (state, { payload }) => {
      state.cartIsLoading = false;
      state.cartErrorMessage = payload;
    },


    [updateCart.pending]: (state) => {
      state.cartHasUpdated = null;
      state.updateCartLoading = true;
    },
    [updateCart.fulfilled]: (state, { payload }) => {
      if (payload)
        state.cartHasUpdated = payload;
      state.updateCartLoading = false;
      state.cartErrorMessage = '';
    }, [updateCart.rejected]: (state, { payload }) => {
      state.cartHasUpdated = null;
      state.updateCartLoading = false;
      state.cartErrorMessage = payload;
    }
  }
})

export const { } = cartSlice.actions;
export default cartSlice.reducer;