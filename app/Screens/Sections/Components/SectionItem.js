import React from 'react';
import { View, TouchableOpacity } from 'react-native';
const GLOBAL = require('../../Common/Globals');
import { heightPixel, widthPixel, normalize } from '../../Common/Utils/PixelNormalization';
const { AppText, AppImageBackground } = require('../../Common/');
import * as RootNavigation from '../../../RootNav.js';

const SectionItem = (props) => {


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
    <TouchableOpacity onPress={onItemClicked} activeOpacity={0.9} onpr style={{ margin: heightPixel(7), height: heightPixel(145), width: '43%' }}>
      <AppImageBackground source={{ uri: image }} imageStyle={{ borderRadius: normalize(30) }} resizeMode={'cover'}
        style={{ width: '100%', height: '100%' }} >
        <View style={{ alignItems: 'center', justifyContent: 'center', borderRadius: normalize(30), backgroundColor: 'rgba(0,0,0,0.30)', flex: 1 }}>
          <AppText color={'white'} text={name} size={16} />
        </View>
      </AppImageBackground>
    </TouchableOpacity>
  );
}

export default SectionItem;
