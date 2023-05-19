import React from 'react';
import { View } from 'react-native';
const GLOBAL = require('../../Common/Globals');
import { widthPixel, heightPixel } from '../../Common/Utils/PixelNormalization';
const { AppImage } = require('../../Common/');

const WideBanner = (props) => {

  function ImgItem(props) {
    return (
      <AppImage source={{ uri: props }} resizeMode={'cover'} width={350} height={90} />
    );
  }

  const {
    data
  } = props;


  return (
    <View style={{ marginTop: heightPixel(15) }}>
      {ImgItem(data)}
    </View>
  );
}

export default WideBanner;
