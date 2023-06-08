import React from 'react';
import { View, TouchableOpacity } from 'react-native';
const GLOBAL = require('../../Common/Globals');
import { heightPixel, widthPixel, normalize } from '../../Common/Utils/PixelNormalization';
const { AppText, AppImageBackground } = require('../../Common/');
import * as RootNavigation from '../../../RootNav.js';
import { subSectionItemStyle } from './styles';

const SubSectionItem = (props) => {
  const {
    id,
    name,
    image
  } = props.item;

  const {
    container,
    backImgView,
    backImgStyle,
    innerView
  } = subSectionItemStyle;

  const onItemClicked = () => {
    RootNavigation.navigationRef.navigate('Products', { secitionName: name, sectionID: props.sectionID, subSectionsID: id - 1 });
  }

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onItemClicked}
      style={container}>
      <AppImageBackground source={{ uri: image }} imageStyle={backImgStyle} resizeMode={'cover'}
        style={backImgView} >
        <View style={innerView}>
          <AppText color={'white'} text={name} size={16} />
        </View>
      </AppImageBackground>
    </TouchableOpacity>
  );
}

export default SubSectionItem;
