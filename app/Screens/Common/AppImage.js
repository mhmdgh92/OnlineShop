import React from 'react';
import {View,Image} from 'react-native';
const GLOBAL = require('./Globals');
import {normalize,heightPixel,widthPixel} from './Utils/PixelNormalization';

const AppImage = (props) => {
    return (
      <Image style={[{alignSelf:'center',
      marginTop:heightPixel(props.marginTop?props.marginTop:0),
      width:widthPixel(props.width?props.width:320),
      height: heightPixel(props.height?props.height:275)},{...props.style}]}
       resizeMode={props.resizeMode?props.resizeMode:'contain'} source={props.source?props.source:require('../../Assets/sampleImg.jpg')}/>
    );
}

export default AppImage;
