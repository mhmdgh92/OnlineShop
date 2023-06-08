import { StyleSheet, Dimensions } from 'react-native';
import { heightPixel, normalize } from '../Common/Utils/PixelNormalization';
const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;
const GLOBAL = require('../Common/Globals');

export const styles = StyleSheet.create({
    mainContainer:
        { height: '100%', width: '100%' },
    billItemStyle: {
        justifyContent: 'space-between', borderBottomWidth: 1,
        borderBottomColor: GLOBAL.Color.borderColor, height: '33%', width: '90%', flexDirection: 'row'
    },
    myScrollableViewContainer:
        { justifyContent: 'center', alignItems: 'center', height: '80%', width: '100%' },
    container: { width: '100%', height: '100%' },
    innerContainer: { width: ScreenWidth, height: ScreenHeight * .88, alignItems: 'center' },
    flatListStyle: { width: '100%', height: heightPixel(330) },
    promoCodeStyle: { alignItems: 'center', flexDirection: 'row', marginTop: heightPixel(30), width: '85%', height: '7%', borderRadius: normalize(30), backgroundColor: 'white' },
    promoCodeTextStyle: { width: '65%' },
    billsContainer: { alignItems: 'center', marginTop: heightPixel(25), width: '85%', height: '16%', borderRadius: normalize(15), backgroundColor: 'white' }
});