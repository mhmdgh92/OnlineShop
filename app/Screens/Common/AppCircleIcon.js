import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
const GLOBAL = require('./Globals');
import { normalize } from './Utils/PixelNormalization';
import { AppIcon } from './';
import { appCircleIconStyle } from "./styles";

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

export default AppCircleIcon;
