import React from 'react';
import { View } from 'react-native';
const { AppImage } = require('../../Common/');
import Swiper from 'react-native-swiper';
import { bigPromoStyle } from './styles';

export const BigPromo = (props) => {

  const {
    container,
    slide1
  } = bigPromoStyle;

  function ImgItem(data) {
    return (
      <View style={slide1}>
        <AppImage source={{ uri: data.source }} width={350} height={220} />
      </View>
    );
  }

  function imgs(data) {
    let returnedImgs = [];
    data.map((item) => {
      returnedImgs.push(
        <ImgItem key={item.id} source={item.image} />
      );
    })
    return returnedImgs;
  }

  const {
    data
  } = props;

  return (
    <View style={container}>
      <Swiper autoplay>
        {imgs(data)}
      </Swiper >
    </View >
  );
}