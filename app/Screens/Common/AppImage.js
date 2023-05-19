import React from 'react';
import FastImage from 'react-native-fast-image';
import { heightPixel, widthPixel } from './Utils/PixelNormalization';

const AppImage = (props) => {
  return (
    <FastImage style={[{
      alignSelf: 'center',
      marginTop: heightPixel(props.marginTop ? props.marginTop : 0),
      width: widthPixel(props.width ? props.width : 320),
      height: heightPixel(props.height ? props.height : 275)
    }, { ...props.style }]}
      resizeMode={props.resizeMode ? props.resizeMode : 'contain'}
      source={props.source ? props.source : require('../../Assets/sampleImg.jpg')} />
  );
}

export default AppImage;
