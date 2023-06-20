import React from 'react';
import { View } from 'react-native';
const GLOBAL = require('./Globals');
import { AppIcon, AppText } from './';
import { appListItemStyle } from "./styles";
import PropTypes from 'prop-types';

export const AppListItem = (props) => {

  const {
    icon,
    title,
    iconSize,
    iconColor,
    textColor,
    textSize,
  } = props;

  const { container, iconView, textView, childrenView } = appListItemStyle(props);
  const { children } = props;

  var _iconColor = iconColor ? iconColor : GLOBAL.Color.darkGrey;
  var _iconSize = iconSize ? iconSize : 30;
  var _textSize = textSize ? textSize : 14.5;
  var _textColor = textColor ? textColor : GLOBAL.Color.c3;

  return (
    <View style={container}>
      <View style={iconView}><AppIcon name={icon} color={_iconColor} size={_iconSize} /></View>
      <View style={textView}><AppText size={_textSize} text={title} color={_textColor} textAlign={'left'} /></View>
      <View style={childrenView}>{children}</View>
    </View>
  );
}

AppListItem.propTypes = {
  props: PropTypes.shape({
    icon: PropTypes.string,
    title: PropTypes.string,
    iconSize: PropTypes.number,
    iconColor: PropTypes.string,
    textColor: PropTypes.string,
    textSize: PropTypes.number,
    children: PropTypes.object
  })
};