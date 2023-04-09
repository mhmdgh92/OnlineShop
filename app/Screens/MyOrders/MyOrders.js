import React, {Component} from 'react';
import {View,FlatList} from 'react-native';
import {fontPixel,heightPixel,widthPixel} from '../Common/Utils/PixelNormalization';
import {AppTopBar,AppFlatList} from '../Common/';
const GLOBAL = require('../Common/Globals');
import OrderItem from './Components/OrderItem';
import Data from './data';

class MyOrders extends React.Component{

  render() {
    return (
      <View style={{alignItems:'center'}}>
        <AppTopBar title={'My Orders'}/>
        <AppFlatList numColumns={1} data={Data} renderItem={({item})=> <OrderItem item={item}/>}/>
      </View>
    );
  }
}

export default MyOrders;
