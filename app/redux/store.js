import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice';
import loginSlice from './slices/loginSlice';
import registerSlice from './slices/registerSlice';
import forgetPassSlice from './slices/forgetPassSlice';
import homeSlice from './slices/homeSlice';
import sectionsSlice from './slices/sectionsSlice';
import productsSlice from './slices/productsSlice';
import cartSlice from './slices/cartSlice';
import profileSlice from './slices/profileSlice';
import shippingSlice from './slices/shippingSlice';
import orderSlice from './slices/orderSlice';
import brandsSlice from './slices/brandsSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    login: loginSlice,
    register: registerSlice,
    forgetPass: forgetPassSlice,
    home: homeSlice,
    sections: sectionsSlice,
    products: productsSlice,
    cart: cartSlice,
    profile: profileSlice,
    shipping: shippingSlice,
    order: orderSlice,
    brands: brandsSlice
  }
});
