import { StyleSheet } from 'react-native';
import { normalize } from '../Common/Utils/PixelNormalization';

export const styles = StyleSheet.create({
    container: { alignItems: 'center', width: '100%', height: '100%' },
    topView: { marginTop: normalize(25), height: '18%', width: '100%' }
});