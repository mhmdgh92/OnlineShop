import { StyleSheet } from 'react-native';
import { heightPixel } from '../Common/Utils/PixelNormalization';

export const styles = StyleSheet.create({
    container: { width: '100%', height: '100%', alignItems: 'center' },
    mapStyle: { width: '100%', height: '90%' },
    iconStyle: { opacity: 0.85, position: 'absolute', top: '40%' },
    confirmBTN: { position: 'absolute', bottom: '5%' }
});