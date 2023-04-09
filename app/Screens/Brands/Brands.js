import React, {Component} from 'react';
import {View,FlatList} from 'react-native';
import {fontPixel,heightPixel,widthPixel} from '../Common/Utils/PixelNormalization';
import {AppTopBar,AppFlatList,AppBottomBar} from '../Common/';
const GLOBAL = require('../Common/Globals');
import BrandItem from './Components/BrandItem';
import Data from './data';

class Brands extends React.Component{

  render() {
    return (
      <View style={{height:'100%',width:'100%',alignItems:'center'}}>
        <AppTopBar title={'Brands'}/>
        <View style={{height:'83%'}}>
          <AppFlatList showsVerticalScrollIndicator={false} numColumns={2} data={Data} renderItem={({item})=> <BrandItem item={item}/>}/>
        </View>
        <AppBottomBar choosed={2}/>
      </View>
    );
  }
}

export default Brands;
