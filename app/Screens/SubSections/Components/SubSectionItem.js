import React from 'react';
import { View, TouchableOpacity } from 'react-native';
const GLOBAL = require('../../Common/Globals');
import { heightPixel, widthPixel, normalize } from '../../Common/Utils/PixelNormalization';
const { AppText, AppImageBackground } = require('../../Common/');
import * as RootNavigation from '../../../RootNav.js';

const SubSectionItem = (props) => {
  const {
    id,
    name,
    image
  } = props.item;

  const onItemClicked = () => {
    RootNavigation.navigationRef.navigate('Products', { secitionName: name, sectionID: props.sectionID, subSectionsID: id - 1 });
  }

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onItemClicked} style={{ margin: heightPixel(7), height: heightPixel(145), width: '43%' }}>
      <AppImageBackground source={{ uri: image }} imageStyle={{ borderRadius: normalize(30) }} resizeMode={'cover'}
        style={{ width: '100%', height: '100%' }} >
        <View style={{ alignItems: 'center', justifyContent: 'center', borderRadius: normalize(30), backgroundColor: 'rgba(0,0,0,0.30)', flex: 1 }}>
          <AppText color={'white'} text={name} size={16} />
        </View>
      </AppImageBackground>
    </TouchableOpacity>
  );
}

export default SubSectionItem;
