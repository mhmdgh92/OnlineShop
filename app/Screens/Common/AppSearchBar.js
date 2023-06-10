import React from 'react';
import { View, TouchableOpacity } from 'react-native';
const GLOBAL = require('./Globals');
import { normalize, heightPixel } from './Utils/PixelNormalization';
import { AppIcon, AppTextInput } from './';
import * as RootNavigation from '../../RootNav.js';
import { appSearchBarStyle } from "./styles";

const AppSearchBar = (props) => {

  const { container, touchStyle } = appSearchBarStyle;

  const onMenuClick = () => {
    RootNavigation.navigate('NavScreen');
  }

  const onSearch = (data) => {
    RootNavigation.navigate('SearchProducts', {
      searchInput: data
    });
  }

  return (
    <View style={container}>
      <TouchableOpacity onPress={onMenuClick} style={touchStyle}><AppIcon size={38} name={props.leftIcon ? props.leftIcon : 'menu'} /></TouchableOpacity>
      <AppTextInput onEndEditing={(text) => onSearch(text.nativeEvent.text)} placeholder={'Looking for..'} iconSize={30} name={'magnify'}
        iconColor={GLOBAL.Color.darkGrey} iconBackgroundColor='transparent' borderRadius={12} width={300} />
    </View>
  );
};

export default AppSearchBar;