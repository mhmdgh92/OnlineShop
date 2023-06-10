import { Dimensions, StyleSheet } from 'react-native';
import { heightPixel } from '../Common/Utils/PixelNormalization';
const ScreenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'column',
        height: heightPixel(787), width: ScreenWidth
    }
});