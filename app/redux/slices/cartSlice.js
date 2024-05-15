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
    email,
    cartItemObj
  } = data;
  let res = false;

  try {
    await firestore()
      .collection('users')
      .doc(email)
      .update({
        'currentOrder.cart': firestore.FieldValue.arrayUnion(cartItemObj)
      }).then(() => {
        Alert.alert('Product added successfully!');
        res = true;
      }).catch((error) => {
        console.error('rejected', error)
      });
    return res;
  } catch (error) {
    console.error(error);
    return res;
  }
})

export const loadCartData = createAsyncThunk('loadCartData', async (data) => {
  const {
    email
  } = data;
  let res = [];
  try {
    await firestore()
      .collection('users')
      .doc(email)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.data().currentOrder && documentSnapshot.data().currentOrder.cart) {
          documentSnapshot.data().currentOrder.cart.map((item, id) => {
            item.id = id;
            res.push(item);
          })
        }
      }).catch((error) => {
        console.error('rejected', error)
      });
    return res;
  } catch (error) {
    console.error(error);
    return res;
  }
})



export const updateCart = createAsyncThunk('updateCart', async (data) => {
  let res = null;
  try {
    const {
      email,
      updatedCart
    } = data;
    await firestore()
      .collection('users')
      .doc(email)
      .update({
        'currentOrder.cart': updatedCart
      }).then(() => {
        res = 1;
      }).catch(error => {
        console.error(error)
      });
    return res;
  } catch (error) {
    console.error(error)
    return res;
  }
})

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
  },

  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => { state.cartAddLoading = true; })
      .addCase(addToCart.fulfilled, (state, { payload }) => {
        if (payload)
          state.cartState = payload;
        state.cartAddLoading = false;
        state.cartErrorMessage = '';
      })
      .addCase(addToCart.rejected, (state, { payload }) => {
        state.cartAddLoading = false;
        state.cartErrorMessage = payload;
      })

      .addCase(loadCartData.pending, (state) => {
        state.cartIsLoading = true;
      })
      .addCase(loadCartData.fulfilled, (state, { payload }) => {
        if (payload)
          state.cartState = payload;
        state.cartIsLoading = false;
        state.cartErrorMessage = '';
      })
      .addCase(loadCartData.rejected, (state, { payload }) => {
        state.cartIsLoading = false;
        state.cartErrorMessage = payload;
      })

      .addCase(updateCart.pending, (state) => {
        state.cartHasUpdated = null;
        state.updateCartLoading = true;
      })
      .addCase(updateCart.fulfilled, (state, { payload }) => {
        if (payload)
          state.cartHasUpdated = payload;
        state.updateCartLoading = false;
        state.cartErrorMessage = '';
      })
      .addCase(updateCart.rejected, (state, { payload }) => {
        state.cartHasUpdated = null;
        state.updateCartLoading = false;
        state.cartErrorMessage = payload;
      })
  }
})

export default cartSlice.reducer;