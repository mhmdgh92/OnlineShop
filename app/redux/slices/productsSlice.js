import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";
import firestore from '@react-native-firebase/firestore';

const initialState = {
  productsState: null,
  productsIsLoading: true,
  productsErrorMessage: '',

  searchProductsState: null,
  searchProductsIsLoading: true,
  searchProductsErrorMessage: ''
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

export const searchProduct = createAsyncThunk('searchProduct', async (data) => {
  let res = [];
  const {
    searchInput
  } = data;
  await firestore()
    .collection('products')
    .orderBy('name')
    .startAt(searchInput)
    .endAt(searchInput + '~')
    .get()
    .then(documentSnapshot => {
      console.log('documentSnapshot:' + JSON.stringify(documentSnapshot));
      documentSnapshot.docs.map((item) => {
        res.push(item.data());
      })
    });
  return res;
})

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
  }, extraReducers: {
    //Load Products
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
    },

    //Search Products
    [searchProduct.pending]: (state) => {
      state.searchProductsIsLoading = true;
    },
    [searchProduct.fulfilled]: (state, { payload }) => {
      console.log('payload:' + JSON.stringify(payload))
      state.searchProductsState = payload;
      state.searchProductsIsLoading = false;
      state.searchProductsErrorMessage = '';
    }, [searchProduct.rejected]: (state, { payload }) => {
      state.searchProductsIsLoading = false;
      state.searchProductsErrorMessage = payload;
    }

  }
})

export const { } = productsSlice.actions;
export default productsSlice.reducer;