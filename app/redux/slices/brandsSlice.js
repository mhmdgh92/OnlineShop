import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";
import firestore from '@react-native-firebase/firestore';

const initialState = {
  brandsState: null,
  brandsIsLoading: true,
  brandsErrorMessage: '',
}

export const loadData = createAsyncThunk('loadData', async (data) => {
  let res = [];
  try {
    await firestore()
      .collection('brands')
      .get()
      .then(documentSnapshot => {
        documentSnapshot.docs.map((item, id) => {
          let newItem = { id: id, data: item.data() }
          res.push(newItem);
        })
      }).catch((error) => {
        console.error('rejected', error)
      });
    return res;
  } catch (error) {
    console.error(error);
    return res;
  }
})

export const brandsSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {
  }, extraReducers: {
    [loadData.pending]: (state) => {
      state.brandsIsLoading = true;
    },
    [loadData.fulfilled]: (state, { payload }) => {
      if (payload)
        state.brandsState = payload;
      state.brandsIsLoading = false;
      state.brandsErrorMessage = '';
    }, [loadData.rejected]: (state, { payload }) => {
      state.brandsIsLoading = false;
      state.brandsErrorMessage = payload;
    }
  }
})

export default brandsSlice.reducer;