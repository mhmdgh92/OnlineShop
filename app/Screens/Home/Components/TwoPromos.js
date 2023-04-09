import React from 'react';
import {View} from 'react-native';
const GLOBAL = require('../../Common/Globals');
import {heightPixel,widthPixel} from '../../Common/Utils/PixelNormalization';
const {AppImage} = require('../../Common/');
import Swiper from 'react-native-swiper';

  const TwoPromos = (props) => {

    function ImgItem(props){
      return(
        <AppImage source={props.source} width={167.5} height={120}/>
      );
    }

    return (
      <View style={{flexDirection:'row',justifyContent:'space-between',width:widthPixel(350)}}>
          <ImgItem source={require('./SamplePhotos/TwoPromos1-1.png')}/>
          <ImgItem source={require('./SamplePhotos/TwoPromos1-2.png')}/>
      </View>
    );
}

export default TwoPromos;
