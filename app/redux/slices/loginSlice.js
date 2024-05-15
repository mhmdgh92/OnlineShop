import { Alert } from 'react-native';
import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

//Login
//If already in use, login with it
const initialState = {
  loginState: null,
  loginIsLoading: false,
  loginIsSuccess: false,

  loginGetDataSuccess: false,
  loginErrorMessage: ''
}

export const loginAPI = createAsyncThunk('loginAPI', async (data) => {
  try {
    let res = null;
    const {
      email,
      password
    } = data;
    await auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        res = email;
      }).catch(error => {
        if (error.code === 'auth/email-already-in-use')
          res = email;
        Alert.alert(error.code);
      });
    return res;
  } catch (error) {
    console.error('error:' + error);
    return res;
  }
})

export const googleSignIn = createAsyncThunk('loginAPI', async (data) => {
  console.log('googleSignIn')
  try {
    let res = null;
    await auth()
      .signInWithCredential(data)
      .then((payload) => {
        console.log('payload')
        res = payload.additionalUserInfo.profile.email;
      }).catch(error => {
        console.error('error:' + error);
        Alert.alert(error.code);
      });
    console.log('finito')
    return res;
  } catch (error) {
    console.error('error:' + error);
    return res;
  }
})

export const facebookSignIn = createAsyncThunk('loginAPI', async (data) => {
  try {
    let res = null;
    await auth()
      .signInWithCredential(data)
      .then((payload) => {
        res = payload.additionalUserInfo.profile.email;
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

export const getUserFireStoreAPI = createAsyncThunk('getUserFireStoreAPI', async (email) => {
  let res = null;
  try {
    await firestore()
      .collection('users')
      .doc(email)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.data()) {
          res = documentSnapshot.data();
          res.email = email;
        } else {
          Alert.alert('You need to create an account!')
        }
      }).catch(error => {
        console.log(JSON.stringify(error))
        Alert.alert(error.code);
        console.error(error)
      });
    return res;
  } catch (error) {
    console.error(error)
    return res;
  }
})

export const loginSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAPI.pending, (state) => { state.loginIsLoading = true; })
      .addCase(loginAPI.fulfilled, (state, { payload }) => {
        state.loginIsLoading = false;
        if (payload) {
          state.loginIsSuccess = true;
          state.loginState = { "email": payload };
        }
      })
      .addCase(loginAPI.rejected, (state, {payload}) => {
        state.loginIsLoading = false;
        state.loginIsSuccess = false;
        state.loginErrorMessage = payload
      })
      .addCase(getUserFireStoreAPI.pending, (state) => { state.loginIsLoading = true; })
      .addCase(getUserFireStoreAPI.fulfilled, (state, {payload}) => {
        state.loginIsLoading = false;
        state.loginGetDataSuccess = true;
        state.loginState = payload;
      })
      .addCase(getUserFireStoreAPI.rejected, (state, {payload}) => {
        state.loginIsLoading = false;
        state.loginGetDataSuccess = false;
        state.loginErrorMessage = payload
      })
  }
})

export default loginSlice.reducer;
