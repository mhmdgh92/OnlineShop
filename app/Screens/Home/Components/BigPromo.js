import React from 'react';
import {View,StyleSheet} from 'react-native';
const GLOBAL = require('../../Common/Globals');
import {heightPixel} from '../../Common/Utils/PixelNormalization';
const {AppImage} = require('../../Common/');
import Swiper from 'react-native-swiper';

  const BigPromo = (props) => {

function ImgItem(props){
  return(
    <AppImage source={props.source} width={350} height={220}/>
  );
}

    return (
      <View style={{height:heightPixel(210)}}>
          <Swiper autoplay>
            <View style={styles.slide1}>
              <ImgItem source={require('./SamplePhotos/BigPromo1-1.png')}/>
            </View>
              <View style={styles.slide1}>
                <ImgItem source={require('./SamplePhotos/BigPromo1-2.png')}/>
              </View>
              <View style={styles.slide1}>
                <ImgItem source={require('./SamplePhotos/BigPromo1-3.png')}/>
              </View>
          </Swiper>
      </View>
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
