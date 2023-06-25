import { StyleSheet, Dimensions } from 'react-native';
import { heightPixel } from '../Common/Utils/PixelNormalization';
const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;

export const forgetPassStyle = StyleSheet.create({
    container: { alignItems: 'center', height: ScreenHeight * 0.95, width: ScreenWidth }
});

export const registerStyle = StyleSheet.create({
    container: { alignItems: 'center', height: ScreenHeight * 0.95, width: ScreenWidth },
    middleView: { marginTop: heightPixel(55), flexDirection: 'row' },
    socialView: { marginTop: heightPixel(25), width: '30%', justifyContent: 'space-between', flexDirection: 'row' }
});

export const loginStyle = StyleSheet.create({
    container: { alignItems: 'center', height: ScreenHeight * 0.9675, width: ScreenWidth },
    middleView: { marginTop: heightPixel(80), flexDirection: 'row' },
    socialView: { marginTop: heightPixel(25), width: '30%', justifyContent: 'space-between', flexDirection: 'row' }
});