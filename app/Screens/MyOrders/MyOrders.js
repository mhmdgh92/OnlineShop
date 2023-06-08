import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { AppTopBar, AppFlatList, AppLoader, AppIcon, AppText } from '../Common/';
const GLOBAL = require('../Common/Globals');
import OrderItem from './Components/OrderItem';
import { useSelector, useDispatch } from 'react-redux';
import { loadOrders } from "../../redux/slices/orderSlice";
import { styles } from "./style";

export default function MyOrders() {

  //Dispatch
  const dispatch = useDispatch();
  //States
  const userSlice = useSelector(state => state.user);
  const orderSlice = useSelector(state => state.order);
  //Reducers
  const LoadOrders = (data) => { dispatch(loadOrders(data)); }

  const {
    userState
  } = userSlice;

  const {
    loadOrdersState,
    loadOrdersLoading
  } = orderSlice;

  const {
    container,
    emptyContainer,
    emptyView
  } = styles;

  useEffect(() => {
    LoadOrders({ email: userState.email });
  }, []);

  if (loadOrdersLoading)
    return <AppLoader />

  if (loadOrdersState.length == 0)
    return (
      <View style={emptyContainer}>
        <AppTopBar title={'My Orders'} />
        <View style={emptyView}>
          <AppIcon name={'package-variant'} color={GLOBAL.Color.grey} size={170} />
          <AppText marginTop={10} text="You don't have any orders!" color={GLOBAL.Color.black} size={20} />
        </View>
      </View>
    )


  return (
    <View style={container}>
      <AppTopBar title={'My Orders'} />
      <AppFlatList numColumns={1} data={loadOrdersState} renderItem={({ item }) => <OrderItem item={item} />} />
    </View>
  );
}