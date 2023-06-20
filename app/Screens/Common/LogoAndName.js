import React from 'react';
import FastImage from 'react-native-fast-image';
import { logoAndNameStyle } from "./styles";

export const LogoAndName = (props) => {

  const { container } = logoAndNameStyle(props);

  return (
    <FastImage style={container}
      resizeMode={'contain'} source={require('../../Assets/LogoAndName.png')} />
  );
}
