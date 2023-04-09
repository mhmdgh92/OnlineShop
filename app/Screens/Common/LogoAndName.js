import React from 'react';
import {Image} from 'react-native';
import {heightPixel,widthPixel} from './Utils/PixelNormalization';

const LogoAndName = (props) => {
    return (
      <Image style={{marginTop:heightPixel(props.marginTop?props.marginTop:38),height:heightPixel(props.height?props.height:100),
      width:widthPixel(props.width?props.width:255)}}
       resizeMode={'contain'} source={require('../../Assets/LogoAndName.png')}/>
    );
}

export default LogoAndName;
