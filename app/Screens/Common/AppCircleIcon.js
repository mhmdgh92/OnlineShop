import React from 'react';
import { View } from 'react-native';
const GLOBAL = require('./Globals');
import { normalize } from './Utils/PixelNormalization';
import { AppIcon } from './';
import { appCircleIconStyle } from "./styles";
import PropTypes from 'prop-types';

export const AppCircleIcon = (props) => {

  const { container, innerView } = appCircleIconStyle(props);

  const { iconSize, iconColor, name } = props;
  var _iconSize = iconSize ? iconSize : 22;
  var _iconColor = iconColor ? iconColor : GLOBAL.Color.white;
  var _name = name ? name : "email";

  return (
    <View style={container}>
      <View style={innerView}>
        <AppIcon borderRadius={normalize(30)} size={normalize(_iconSize)}
          color={_iconColor} name={_name} />
      </View>
    </View>
  );
}

AppCircleIcon.propTypes = {
  props: PropTypes.shape({
    iconSize: PropTypes.number,
    iconColor: PropTypes.string,
    name: PropTypes.string,
    iconBackgroundColor: PropTypes.string,
  })
};

