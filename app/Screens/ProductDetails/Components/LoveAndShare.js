import React from 'react';
import {View} from 'react-native';
const GLOBAL = require('../../Common/Globals');
import {normalize,heightPixel} from '../../Common/Utils/PixelNormalization';
const {AppText,AppIcon} = require('../../Common/');

  const LoveAndShare = (props) => {

function ImgItem(props){
  return(
    <AppImage source={props.source} resizeMode={'cover'} width={350} height={220}/>
  );
}

    return (
      <View style={{position:'absolute',top:5,right:5,justifyContent:'space-between',width:'12%',height:heightPixel(80)}}>
        <AppIcon color={GLOBAL.Color.c1} name={'heart-outline'} size={35}/>
        <AppIcon color={GLOBAL.Color.c1} name={'share-variant'} size={35}/>
      </View>
    );
}

export default LoveAndShare;
