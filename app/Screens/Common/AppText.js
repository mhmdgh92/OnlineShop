import React from 'react';
import { View, Text } from 'react-native';
import { fontPixel, heightPixel, widthPixel, normalize } from './Utils/PixelNormalization';
const GLOBAL = require('./Globals');
import { appTextStyle } from "./styles";

const AppText = (props) => {

  const {
    numberOfLines
  } = props;

  const { container, textStyle } = appTextStyle(props);

  return (
    <View style={container}>
      <Text numberOfLines={numberOfLines ? numberOfLines : 0} style={textStyle}>
        {props.text ? props.text : 'insert Text'}
      </Text>
    </View >
  );
}

export default AppText;
