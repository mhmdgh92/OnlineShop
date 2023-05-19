import userSlice from './slices/userSlice';
import loginSlice from './slices/loginSlice';
import registerSlice from './slices/registerSlice';
import forgetPassSlice from './slices/forgetPassSlice';
import homeSlice from './slices/homeSlice';
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    user: userSlice,
    login: loginSlice,
    register: registerSlice,
    home: homeSlice,
    forgetPass: forgetPassSlice
  },
})

export default store;
