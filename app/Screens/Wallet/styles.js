import { StyleSheet } from 'react-native';
import { heightPixel, normalize } from '../Common/Utils/PixelNormalization';
const GLOBAL = require('../Common');

export const styles = StyleSheet.create({
    container: { alignItems: 'center', width: '100%', height: '100%' },
    topCardView: { top: 0, position: 'absolute', backgroundColor: GLOBAL.Color.c1, height: '25%', width: '100%' },
    innerView: {
        borderColor: GLOBAL.Color.grey, borderWidth: 0.5, marginTop: heightPixel(20), borderRadius: normalize(20),
        backgroundColor: '#FA9A3B', width: '91%', justifyContent: 'center', height: heightPixel(195)
    },
    cardStyle: { justifyContent: 'space-between', alignSelf: 'center', width: '90%', height: '77%' },
    nameStyle: { flexDirection: 'row', justifyContent: 'space-between' }
});