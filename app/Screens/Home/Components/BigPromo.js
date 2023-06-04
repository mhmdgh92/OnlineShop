import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { heightPixel } from '../../Common/Utils/PixelNormalization';
const { AppImage } = require('../../Common/');
import Swiper from 'react-native-swiper';

const BigPromo = (props) => {

  function ImgItem(data) {
    return (
      <View style={styles.slide1}>
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
  return (<View />)//T,R
  return (
    <View style={{ height: heightPixel(180) }}>
      <Swiper autoplay>
        {imgs(data)}
      </Swiper >
    </View >
  );
}

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default BigPromo;
