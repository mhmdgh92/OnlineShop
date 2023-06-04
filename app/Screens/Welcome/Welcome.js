import React from 'react';
import { View } from 'react-native';
import { AppText, LogoAndName, AppImage, AppBTN, AppLoader } from '../Common/';
const GLOBAL = require('../Common/Globals');
import { heightPixel, widthPixel } from '../Common/Utils/PixelNormalization';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Welcome extends React.Component {

  state = {
    loading: true
  }

  async componentDidMount() {
    // AsyncStorage.clear();//T,R
    this.checkLunchedBefore();
  }

  checkLunchedBefore = async (value) => {
    const lunchedBefore = await AsyncStorage.getItem('lunchedBefore');
    if (lunchedBefore) {
      this.moveToNextScreen();
      return;
    }
    this.setState({ loading: false });
    this.setLunchedBeforeTrue();
  }

  setLunchedBeforeTrue = async (value) => {
    await AsyncStorage.setItem('lunchedBefore', JSON.stringify(true))
  }

  moveToNextScreen() {
    this.props.navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],//T,Login
    });
  }

  render() {
    const { loading } = this.state;
    if (loading)
      return <AppLoader />
    return (
      <View style={{ alignItems: 'center' }}>
        <View style={{ marginTop: heightPixel(11), height: heightPixel(100) }}><LogoAndName width={300} /></View>
        <View style={{ marginTop: heightPixel(37) }}><AppText text="Whatever you need.." size={24} /></View>
        <View style={{ marginTop: heightPixel(50), height: heightPixel(255) }}><AppImage source={require('../../Assets/Welcome.png')} /></View>
        <View style={{ marginTop: heightPixel(50) }}>
          <AppText text={"is here"} fontFamily={'Montserrat-Bold'} color={GLOBAL.Color.c1} size={29} />
          <AppText text={"\n High-quality products, on-time delivery, \n massive discounts!"} size={14} fontFamily={'Montserrat-SemiBold'} />
        </View>
        <View style={{ marginTop: heightPixel(65), height: heightPixel(55), width: widthPixel(320), justifyContent: 'flex-end', alignItems: 'center' }}>
          <AppBTN text={'Next'} onPress={() => this.moveToNextScreen()} />
        </View>
      </View>
    );
  }
}

export default Welcome;