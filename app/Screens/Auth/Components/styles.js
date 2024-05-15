import { StyleSheet, Dimensions } from 'react-native';
import { heightPixel } from '../../Common/Utils/PixelNormalization';

export const registerFormStyle = StyleSheet.create({
    innerView: { marginTop: heightPixel(15), flexDirection: 'row', justifyContent: 'center' }
});

export const loginFormStyle = StyleSheet.create({
    forgetPassBTN: { marginTop: heightPixel(10) }
});