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

export default cartSlice.reducer;
