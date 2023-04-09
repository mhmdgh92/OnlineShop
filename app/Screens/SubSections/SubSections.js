import React, {Component} from 'react';
import {View,FlatList} from 'react-native';
import {fontPixel,heightPixel,widthPixel} from '../Common/Utils/PixelNormalization';
import {AppTopBar,AppFlatList,AppBottomBar} from '../Common/';
const GLOBAL = require('../Common/Globals');
import SubSectionItem from './Components/SubSectionItem';
import Data from '../MockData/data/';

class SubSections extends React.Component{


  render() {
    const{
      sectionID
    } = this.props.route.params;

    return (
        <View style={{flex:1,alignItems:'center'}}>
          <AppTopBar title={Data.Sections[sectionID].name}/>
          <AppFlatList numColumns={2} data={Data.Sections[sectionID].subSections} renderItem={({item})=> <SubSectionItem sectionID={sectionID} item={item}/>}/>
          <AppBottomBar choosed={1}/>
        </View>
    );
  }
}

export default SubSections;
