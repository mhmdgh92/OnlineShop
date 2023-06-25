import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { AppText, LogoAndName, AppImage, AppBTN, AppLoader } from '../Common/';
const GLOBAL = require('../Common/Globals');
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from "./styles";
import Config from "react-native-config";

export function Welcome({ navigation }) {

  const [loading, setLoading] = useState(true);

  const {
    LUNCHED_BEFORE
  } = Config;

  useEffect(() => {
    checkLunchedBefore();
  }, []);

  // Function to check if the app has been launched before
  async function checkLunchedBefore() {
    const lunchedBefore = await AsyncStorage.getItem(LUNCHED_BEFORE);
    if (lunchedBefore) {
      moveToNextScreen();
      return;
    }
    setLoading(false);
    setLunchedBeforeTrue();
  }

  // Function to set the app launched status to true
  async function setLunchedBeforeTrue() {
    await AsyncStorage.setItem(LUNCHED_BEFORE, JSON.stringify(true))
  }

  // Function to move to the next screen
  function moveToNextScreen() {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  }

  if (loading)
    return <AppLoader />

  return (
    <View style={styles.container}>
      <View style={styles.logoAndName}><LogoAndName width={300} /></View>
      <View style={styles.heading}><AppText text="Whatever you need.." size={24} /></View>
      <View style={styles.img}><AppImage height={280} source={require('../../Assets/Welcome.png')} /></View>
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
