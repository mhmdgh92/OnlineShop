import { StyleSheet } from 'react-native';
import { heightPixel,widthPixel } from '../Common/Utils/PixelNormalization';

export const styles = StyleSheet.create({
    container: { alignItems: 'center' },
    logoAndName: { marginTop: heightPixel(11), height: heightPixel(100) },
    heading: { marginTop: heightPixel(37) },
    img: { marginTop: heightPixel(50), height: heightPixel(255) },
    middleView: { marginTop: heightPixel(50) },
    btnView: { marginTop: heightPixel(65), height: heightPixel(55), width: widthPixel(320), justifyContent: 'flex-end', alignItems: 'center' }
});