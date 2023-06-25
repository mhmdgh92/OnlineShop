import { StyleSheet } from 'react-native';
import { heightPixel, widthPixel } from '../../Common/Utils/PixelNormalization';

export const bigPromoStyle = StyleSheet.create({
    container: {
        height: heightPixel(180)
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export const twoPromosStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: heightPixel(10),
        width: widthPixel(350)
    }
});

export const wideBannerStyle = StyleSheet.create({
    container: {
        marginTop: heightPixel(15)
    }
});