import React, {Component} from 'react';
import {View,FlatList} from 'react-native';
import {fontPixel,heightPixel,widthPixel} from '../Common/Utils/PixelNormalization';
import {AppTopBar,AppFlatList,AppBottomBar} from '../Common/';
const GLOBAL = require('../Common/Globals');
import SectionItem from './Components/SectionItem';
import Data from '../MockData/data/';

class Sections extends React.Component{

  render() {

    return (
      <View style={{flex:1,alignItems:'center'}}>
        <AppTopBar title={'Main Sections'}/>
        <AppFlatList numColumns={2} data={Data.Sections} renderItem={({item})=> <SectionItem item={item}/>}/>
        <AppBottomBar choosed={1}/>
      </View>
    );
  }
}

export default Sections;
