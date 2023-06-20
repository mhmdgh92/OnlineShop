import React from 'react';
import { View } from 'react-native';
import { heightPixel } from '../../Common/Utils/PixelNormalization';
const { AppImage } = require('../../Common/');
import Swiper from 'react-native-swiper';

export const Photos = (props) => {

  function ImgItem(item, id) {
    return (
      <View key={id}><AppImage source={{uri:item}} resizeMode={'cover'} width={350} height={220} /></View>
    );
  }

  function images() {
    return props.images.map((item, id) => {
      return (
        ImgItem(item, id)
      )
    });
  }

  return (
    <View style={{ marginTop: '3%', height: heightPixel(230), width: '110%' }}>
      <Swiper autoplay>
        {images()}
      </Swiper>
    </View>
  );
}
