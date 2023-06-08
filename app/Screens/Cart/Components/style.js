import { StyleSheet } from 'react-native';
import { heightPixel, widthPixel, normalize } from '../../Common/Utils/PixelNormalization';
const GLOBAL = require('../../Common/Globals');

export const cartItemStyle = StyleSheet.create({
    container: {
        backgroundColor: GLOBAL.Color.white,
        borderColor: GLOBAL.Color.borderColor, flexDirection: 'row',
        borderWidth: normalize(2.5), height: heightPixel(100), alignItems: 'center',
        marginTop: heightPixel(10), width: widthPixel(320)
    },
    innerView: { margin: widthPixel(10), alignItems: 'flex-start', justifyContent: 'space-between', height: '45%', width: '35%' },
    quantityStyle: { justifyContent: 'center', height: '95%', width: '38%' }
});