import React from 'react';
import { View } from 'react-native';
const GLOBAL = require('./Globals');
import { normalize } from './Utils/PixelNormalization';
import { AppIcon } from './';
import { appCircleIconStyle } from "./styles";
import PropTypes from 'prop-types';

const AppCircleIcon = (props) => {

  const { container, innerView } = appCircleIconStyle(props);

  return (
    <View style={container}>
      <View style={innerView}>
        <AppIcon borderRadius={normalize(30)} size={normalize(props.iconSize ? props.iconSize : 22)}
          color={props.iconColor ? props.iconColor : GLOBAL.Color.white} name={props.name ? props.name : "email"} />
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

export default AppCircleIcon;
