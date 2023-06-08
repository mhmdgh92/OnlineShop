import { StyleSheet, Dimensions } from 'react-native';
import { heightPixel } from '../../Common/Utils/PixelNormalization';

export const registerFromStyle = StyleSheet.create({
    innerView: { marginTop: heightPixel(15), flexDirection: 'row', justifyContent: 'center' }
});

export const loginFromStyle = StyleSheet.create({
    forgetPassBTN: { marginTop: heightPixel(10) }
});