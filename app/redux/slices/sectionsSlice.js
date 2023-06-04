import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";
import firestore from '@react-native-firebase/firestore';

const initialState = {
  sectionsState: [],
  sectionsIsLoading: true,
  sectionsErrorMessage: ''
}

export const loadSectionsData = createAsyncThunk('loadSectionsData', async () => {
  let res = [];
  await firestore()
    .collection('sections')
    .get()
    .then(documentSnapshot => {

      documentSnapshot.docs.map((item) => {
        let newSectionItem = item.data();
        newSectionItem.name = item.id;
        res.push(newSectionItem);
      })
    });
  return res;
})

export const sectionsSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
  }, extraReducers: {
    [loadSectionsData.pending]: (state) => {
      state.sectionsIsLoading = true;
    },
    [loadSectionsData.fulfilled]: (state, { payload }) => {
      if (payload)
        state.sectionsState = payload;
      state.sectionsIsLoading = false;
      state.sectionsErrorMessage = '';
    }, [loadSectionsData.rejected]: (state, { payload }) => {
      state.sectionsIsLoading = false;
      state.sectionsErrorMessage = payload;
    }
  }
})

export const { } = sectionsSlice.actions;
export default sectionsSlice.reducer;