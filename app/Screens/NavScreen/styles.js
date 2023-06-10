import { StyleSheet } from 'react-native';
import { heightPixel,normalize } from '../Common/Utils/PixelNormalization';

export const styles = StyleSheet.create({
    container: { alignItems: 'center', width: '100%', height: '100%' },
    innerView: { width: '90%', height: '90%' },
    topView: { backgroundColor: 'white', flexDirection: 'row', marginTop: normalize(15), height: '12%', width: '100%' },
    listItemStyle: { height: heightPixel(50) },
    listItemIconStyle: { justifyContent: 'center', alignItems: 'center', flex: 1 },
    nameAndLogoView: { margin: normalize(8), justifyContent: 'center' }
});