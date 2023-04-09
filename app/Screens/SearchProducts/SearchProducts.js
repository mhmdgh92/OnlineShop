import React, {Component} from 'react';
import {View,FlatList} from 'react-native';
import {fontPixel,heightPixel,widthPixel} from '../Common/Utils/PixelNormalization';
import {AppTopBar,AppFlatList,AppProductItem} from '../Common/';
const GLOBAL = require('../Common/Globals');
import Data from '../MockData/data';

class SearchProducts extends React.Component{

  render() {
    return (
      <View style={{alignItems:'center'}}>
        <AppTopBar title={'Results'}/>
        <View style={{height:'100%',width:'95%'}}>
          <AppFlatList style={{width:'100%'}} numColumns={2} data={Data.Home.MostOrdered}
          renderItem={({item})=> <AppProductItem height={heightPixel(300)} item={item}/>}/>
          <View style={{height:'16%'}}/>
        </View>
      </View>
    );
  }
}

export default SearchProducts;
