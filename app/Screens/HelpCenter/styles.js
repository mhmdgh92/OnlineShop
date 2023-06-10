import { StyleSheet } from 'react-native';
import { heightPixel,normalize } from '../Common/Utils/PixelNormalization';

export const styles = StyleSheet.create({
    container: { alignItems: 'center', width: '100%', height: '100%' },
    innerView: { width: '90%', height: '90%' },
    topView: { marginTop: normalize(15), height: '18%', width: '100%' },
    listItemContainer: { height: heightPixel(36) },
    iconViewStyle: { justifyContent: 'center', alignItems: 'flex-end', flex: 1 },
    iconStyle: { width: '20%' }
});