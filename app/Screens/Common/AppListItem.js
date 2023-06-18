import React from 'react';
import { View } from 'react-native';
const GLOBAL = require('./Globals');
import { AppIcon, AppText } from './';
import { appListItemStyle } from "./styles";
import PropTypes from 'prop-types';

const AppListItem = (props) => {

  const {
    icon,
    title,
    iconSize,
    iconColor,
    textColor,
    textSize,
  } = props;

  const { container, iconView, textView, childrenView } = appListItemStyle(props);

  return (
    <View style={container}>
      <View style={iconView}><AppIcon name={icon} color={iconColor ? iconColor : GLOBAL.Color.darkGrey} size={iconSize ? iconSize : 30} /></View>
      <View style={textView}><AppText size={textSize ? textSize : 14.5} text={title} color={textColor ? textColor : GLOBAL.Color.c3} textAlign={'left'} /></View>
      <View style={childrenView}>{props.children}</View>
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


export default AppListItem;
