import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { AppText, LogoAndName, AppImage, AppBTN, AppLoader } from '../Common/';
const GLOBAL = require('../Common/Globals');
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from "./styles";

export default function Welcome(props) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkLunchedBefore();
  }, []);

  async function checkLunchedBefore() {
    const lunchedBefore = await AsyncStorage.getItem('lunchedBefore');
    if (lunchedBefore) {
      moveToNextScreen();
      return;
    }
    setLoading(false);
    setLunchedBeforeTrue();
  }

  async function setLunchedBeforeTrue() {
    await AsyncStorage.setItem('lunchedBefore', JSON.stringify(true))
  }

  function moveToNextScreen() {
    props.navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],//T,Login
    });
  }

  if (loading)
    return <AppLoader />
  return (
    <View style={styles.container}>
      <View style={styles.logoAndName}><LogoAndName width={300} /></View>
      <View style={styles.heading}><AppText text="Whatever you need.." size={24} /></View>
      <View style={styles.img}><AppImage source={require('../../Assets/Welcome.png')} /></View>
      <View style={styles.middleView}>
        <AppText text={"is here"} fontFamily={'Montserrat-Bold'} color={GLOBAL.Color.c1} size={29} />
        <AppText text={"\n High-quality products, on-time delivery, \n massive discounts!"} size={14} fontFamily={'Montserrat-SemiBold'} />
      </View>
      <View style={styles.btnView}>
        <AppBTN text={'Next'} onPress={() => moveToNextScreen()} />
      </View>
    </View>
  );
}