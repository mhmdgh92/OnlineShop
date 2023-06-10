import React from 'react';
import FastImage from 'react-native-fast-image';
import { appRoundedImageStyle } from "./styles";

const AppRoundedImage = (props) => {

  const { container } = appRoundedImageStyle(props);

  return (
    <FastImage style={container} resizeMode={'cover'}
      source={props.source ? props.source : require('../../Assets/profile.png')} />
  );
}

export default AppRoundedImage;
