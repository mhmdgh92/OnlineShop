import { StyleSheet, Dimensions } from 'react-native';
import { heightPixel } from '../Common/Utils/PixelNormalization';
const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: { alignItems: 'center', height: ScreenHeight * 0.9675, width: ScreenWidth },
    middleView: { marginTop: heightPixel(80), flexDirection: 'row' }
});