import { StyleSheet } from 'react-native';
import { heightPixel, widthPixel,normalize } from '../../Common/Utils/PixelNormalization';
const GLOBAL = require('../../Common/Globals');

export const orderItemStyle = StyleSheet.create({
    statusStyle: { flexDirection: 'row', alignItems: 'center' },
    container: {
        borderColor: GLOBAL.Color.borderColor, flexDirection: 'row',
        borderWidth: normalize(2.5), height: heightPixel(85), marginTop: heightPixel(10), width: '90%'
    },
    innerView: { margin: widthPixel(7), flexDirection: 'column', flex: 5 },
    totalItemsStyle: { flexDirection: 'row', flex: 1, alignItems: 'center' },
    calendarStyle: { alignItems: 'center', flexDirection: 'row', flex: 1 },
    showBTNStyle: { margin: widthPixel(7), alignItems: 'center', justifyContent: 'center', flex: 2 }
});