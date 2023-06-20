import React from 'react';
import { View } from 'react-native';
import { AppTopBar, LogoAndName, AppText } from '../Common/';
import { styles } from "./styles";
const GLOBAL = require('../Common/Globals');


export function About() {

  const {
    container
  } = styles;

  return (
    <View style={container}>
      <AppTopBar title={'About'} />
      <LogoAndName height={85} marginTop={8} />
      <AppText marginTop={0} text="About" size={24} />
      <AppText width={350} itextAlign={'left'} marginTop={20} text={"\n OnlineShop is a mock mobile application that provides shopping services, made by me, Mohammed Ghabyen. \n\nThis application is developed using React-Native.\n \nI hope you find it useful and a good demo for react native apps."} size={16} color={GLOBAL.Color.darkGrey} fontFamily={'Montserrat-SemiBold'} />
    </View>
  );
}