import { StyleSheet } from 'react-native';
import { heightPixel } from '../Common/Utils/PixelNormalization';

export const styles = StyleSheet.create({
    container: { height: '100%', width: '100%' },
    scrollableArea: { marginTop: '1%', height: '88%', width: '100%' },
    innerView: { alignItems: 'center' },
    bottomView: { height: heightPixel(10) }
});