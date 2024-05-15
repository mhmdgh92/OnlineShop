import { createSlice } from '@reduxjs/toolkit'
import { Alert } from 'react-native';
import { createAsyncThunk } from "@reduxjs/toolkit";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const initialState = {
  registerState: null,
  registerIsLoading: false,
  registerIsSuccess: false,
  registerSetDataSuccess: false,
  registerErrorMessage: ''
}

export const registerAPI = createAsyncThunk('registerAPI', async (data) => {
  const {
    email,
    password
  } = data;
  console.log('email:' + email)
  let res = null;
  try {
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        res = data;
      }).catch(error => {
        console.error(error);
        Alert.alert(error.code);
      });
    return res;
  } catch (error) {
    console.error(error);
    return res;
  }
})

export const googleRegister = createAsyncThunk('registerAPI', async (data) => {
  try {
    let res = null;
    await auth()
      .signInWithCredential(data)
      .then((payload) => {
        const {
          given_name,
          family_name,
          email
        } = payload.additionalUserInfo.profile;
        res = { email: email, firstName: given_name, lastName: family_name };
      }).catch(error => {
        console.error('error:' + error);
        Alert.alert(error.code);
      });
    return res;
  } catch (error) {
    console.error('error:' + error);
    return res;
  }
})

export const facebookRegister = createAsyncThunk('registerAPI', async (data) => {
  try {
    let res = null;
    await auth()
      .signInWithCredential(data)
      .then((payload) => {
        //T,NTBD
      }).catch(error => {
        console.error('error:' + error);
        Alert.alert(error.code);
      });
    return res;
  } catch (error) {
    console.error('error:' + error);
    return res;
  }
})

export const setUserFireStoreAPI = createAsyncThunk('setUserFireStoreAPI', async (data) => {
  let res = null;
  const {
    firstName = '',
    lastName = '',
    email,
    phone = ''
  } = data;
  try {
    await firestore()
      .collection('users')
      .doc(email)
      .set({
        firstName: firstName,
        lastName: lastName,
        phone: phone
      })
      .then(() => {
        Alert.alert('User account created successfully!');
        res = data;
      }).catch(error => {
        console.error(error);
      });
    return res;
  } catch (error) {
    console.error(error)
    return res;
  }
})

export const registerSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerAPI.pending, (state) => { state.registerIsLoading = true; })
      .addCase(registerAPI.fulfilled, (state, { payload }) => {
        state.registerIsLoading = false;
        if (payload) {
          state.registerIsSuccess = true;
          state.registerState = payload;
        }
      })
      .addCase(registerAPI.rejected, (state, { payload }) => {
        state.registerIsLoading = false;
        state.registerIsSuccess = false;
        state.registerErrorMessage = payload
      })
      .addCase(setUserFireStoreAPI.pending, (state) => { state.registerIsLoading = true; })
      .addCase(setUserFireStoreAPI.fulfilled, (state, { payload }) => {
        state.registerIsLoading = false;
        state.registerSetDataSuccess = true;
        state.registerState = payload;
      })
      .addCase(setUserFireStoreAPI.rejected, (state, { payload }) => {
        state.registerIsLoading = false;
        state.registerSetDataSuccess = false;
        state.registerErrorMessage = payload
      })
  }
})

export default registerSlice.reducer;
