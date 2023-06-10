import React from 'react';
import { View, TouchableOpacity } from 'react-native';
const GLOBAL = require('./Globals');
import { AppText, AppIcon } from './';
import * as RootNavigation from '../../RootNav.js';
import { appTopBarStyle } from "./styles";

const AppTopBar = (props) => {

  const {
    hideLeft
  } = props;

  const onBackClicked = () => {
    RootNavigation.navigationRef.goBack();
  }

  const { container, leftView, textStyle, rightView } = appTopBarStyle;

  return (
    <View style={container}>
      <View style={leftView}>
        {hideLeft ? <View /> : <TouchableOpacity onPress={onBackClicked}><AppIcon size={38} name={props.leftIcon ? props.leftIcon : 'arrow-left'} /></TouchableOpacity>}
      </View>
      <View style={textStyle}>
        <AppText numberOfLines={1} text={props.title ? props.title : "My Info"} size={18} color={GLOBAL.Color.white} fontFamily={'Montserrat-SemiBold'} />
      </View>
      <View style={rightView}>
      </View>
    </View>
  );
};

export default AppTopBar;
