import React from 'react';
import FastImage from 'react-native-fast-image';
import { normalize, heightPixel, widthPixel } from './Utils/PixelNormalization';

const AppRoundedImage = (props) => {
  return (
    <FastImage style={{
      marginTop: heightPixel(props.marginTop ? props.marginTop : 0),
      width: widthPixel(props.width ? props.width : 90), height: heightPixel(props.height ? props.height : 100),
      borderRadius: normalize(100)
    }} resizeMode={'cover'}
      source={props.source ? props.source : require('../../Assets/profile.png')} />
  );
}

export default AppRoundedImage;
