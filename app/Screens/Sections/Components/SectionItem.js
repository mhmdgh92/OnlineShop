import React from 'react';
import { View, TouchableOpacity } from 'react-native';
const GLOBAL = require('../../Common/Globals');
import {  normalize } from '../../Common/Utils/PixelNormalization';
const { AppText, AppImageBackground } = require('../../Common/');
import * as RootNavigation from '../../../RootNav.js';
import { sectionItemStyle } from "./style";

export const SectionItem = (props) => {


  const {
    id,
    name,
    image
  } = props.item;

  const onItemClicked = () => {
    RootNavigation.navigationRef.navigate('Products', {
      secitionID: id,
      secitionName: name
    });
  }

  return (
    <TouchableOpacity onPress={onItemClicked} activeOpacity={0.9} style={sectionItemStyle.container}>
      <AppImageBackground source={{ uri: image }} imageStyle={sectionItemStyle.backImgStyle} resizeMode={'cover'}
        style={sectionItemStyle.imgBack} >
        <View style={sectionItemStyle.innerView}>
          <AppText color={'white'} text={name} size={16} />
        </View>
      </AppImageBackground>
    </TouchableOpacity>
  );
}