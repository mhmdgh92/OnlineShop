import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const GLOBAL = require('./Globals');
import { normalize } from './Utils/PixelNormalization';
import { appIconStyle } from "./styles";
import PropTypes from 'prop-types';

export const AppIcon = (props) => {

  const { container, innerIcon } = appIconStyle(props);

  const {
    name,
    size,
    color
  } = props;

  var _name = name ? name : "arrow-right";
  var _size = size ? size : 19;
  var _color = color ? color : GLOBAL.Color.white;

  return (
    <View style={container}>
      <Icon style={innerIcon} size={normalize(_size)} color={_color} name={_name} />
    </View>
  );
}

AppIcon.propTypes = {
  props: PropTypes.shape({
    size: PropTypes.number,
    color: PropTypes.string,
    name: PropTypes.string
  })
};
