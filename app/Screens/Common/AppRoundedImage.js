import React from 'react';
import {View,Image} from 'react-native';
const GLOBAL = require('./Globals');
import {normalize,heightPixel,widthPixel} from './Utils/PixelNormalization';

const AppRoundedImage = (props) => {
    return (
      <Image style={{marginTop:heightPixel(props.marginTop?props.marginTop:0),
      width:widthPixel(props.width?props.width:90),height:heightPixel(props.height?props.height:100),
      borderRadius:normalize(100)}} resizeMode={'cover'}
       source={props.source?props.source:require('../../Assets/profile.png')}/>
    );
}

export default AppRoundedImage;
