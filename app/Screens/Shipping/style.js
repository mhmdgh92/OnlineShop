import { StyleSheet } from 'react-native';
import { heightPixel,widthPixel } from '../Common/Utils/PixelNormalization';

export const styles = StyleSheet.create({
    container: { alignItems: 'center' },
    bottomInputs: { marginTop: heightPixel(5), width: widthPixel(320), flexDirection: 'row', justifyContent: 'space-between' }
});