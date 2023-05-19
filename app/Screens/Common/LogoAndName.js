import React from 'react';
import FastImage from 'react-native-fast-image';
import { heightPixel, widthPixel } from './Utils/PixelNormalization';

const LogoAndName = (props) => {
  return (
    <FastImage style={{
      marginTop: heightPixel(props.marginTop ? props.marginTop : 38), height: heightPixel(props.height ? props.height : 100),
      width: widthPixel(props.width ? props.width : 255)
    }}
      resizeMode={'contain'} source={require('../../Assets/LogoAndName.png')} />
  );
}

export default LogoAndName;
