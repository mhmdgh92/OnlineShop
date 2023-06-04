import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";
import firestore from '@react-native-firebase/firestore';

const initialState = {
  productsState: null,
  productsIsLoading: true,
  productsErrorMessage: ''
}

export const loadProductsData = createAsyncThunk('loadProductsData', async (data) => {
  let res = { secitionName: null, data: [] };
  const {
    secitionID,
    secitionName
  } = data;
  await firestore()
    .collection('products')
    .doc(secitionID.toString())
    .get()
    .then(documentSnapshot => {
      res.secitionName = secitionName;
      documentSnapshot.data().data.map((item) => {
        res.data.push(item);
      })
    });
  return res;
})

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
  }, extraReducers: {
    [loadProductsData.pending]: (state) => {
      state.productsIsLoading = true;
    },
    [loadProductsData.fulfilled]: (state, { payload }) => {
      if (payload)
        state.productsState = payload;
      state.productsIsLoading = false;
      state.productsErrorMessage = '';
    }, [loadProductsData.rejected]: (state, { payload }) => {
      state.productsIsLoading = false;
      state.productsErrorMessage = payload;
    }
  }
})

export const { } = productsSlice.actions;
export default productsSlice.reducer;