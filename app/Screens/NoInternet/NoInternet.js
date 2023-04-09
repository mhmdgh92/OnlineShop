import React, {Component} from 'react';
import {Dimensions,View} from 'react-native';
const ScreenHeight=Dimensions.get('window').height;
const ScreenWidth=Dimensions.get('window').width;
import {AppText,LogoAndName,AppImage,AppBTN} from '../Common/';
const GLOBAL = require('../Common/Globals');
import {fontPixel,heightPixel,widthPixel} from '../Common/Utils/PixelNormalization';

class NoInternet extends React.Component{

  render() {
    return (
        <View style={{alignItems:'center',height:ScreenHeight*0.967,width:ScreenWidth}}>
            <LogoAndName/>
            <AppText marginTop={20} text="No internet connection!" size={28}/>
            <AppText marginTop={2} text={"Check your internet \n connection please"} size={14}
             color={GLOBAL.Color.darkGrey} fontFamily={'Montserrat-SemiBold'}/>
            <AppImage marginTop={35} height={250} source={require('../../Assets/noInternet.png')}/>
            <AppBTN marginTop={100} text={'Refresh'}/>
        </View>
    );
  }
}
export default NoInternet;
