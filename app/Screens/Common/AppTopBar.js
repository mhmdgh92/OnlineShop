import React from 'react';
import { View, TouchableOpacity } from 'react-native';
const GLOBAL = require('./Globals');
import { AppText, AppIcon } from './';
import * as RootNavigation from '../../RootNav.js';
import { appTopBarStyle } from "./styles";

export const AppTopBar = (props) => {

  const {
    title,
    leftIcon
  } = props;

  const onBackClicked = () => {
    RootNavigation.navigationRef.goBack();
  }

  const { container, leftView, textStyle, rightView } = appTopBarStyle;

  var _leftIcon = leftIcon ? leftIcon : "arrow-left";
  var _title = title ? title : "My Info";

  return (
    <View style={container}>
      <View style={leftView}>
        <TouchableOpacity onPress={onBackClicked}>
          <AppIcon size={38} name={_leftIcon} />
        </TouchableOpacity>
      </View>
      <View style={textStyle}>
        <AppText numberOfLines={1} text={_title} size={18}
          color={GLOBAL.Color.white} fontFamily={'Montserrat-SemiBold'} />
      </View>
      <View style={rightView}>
      </View>
    </View>
  );
};