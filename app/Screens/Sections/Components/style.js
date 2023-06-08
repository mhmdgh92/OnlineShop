import { StyleSheet } from 'react-native';
import { heightPixel, normalize } from '../../Common/Utils/PixelNormalization';
export const sectionItemStyle = StyleSheet.create({
    container: { margin: heightPixel(7), height: heightPixel(145), width: '43%' },
    imgBack: { width: '100%', height: '100%' },
    innerView: { alignItems: 'center', justifyContent: 'center', borderRadius: normalize(30), backgroundColor: 'rgba(0,0,0,0.30)', flex: 1 },
    backImgStyle: { borderRadius: normalize(30) }
});