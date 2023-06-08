import { StyleSheet } from 'react-native';

export const subSectionItemStyle = StyleSheet.create({
    container: { margin: heightPixel(7), height: heightPixel(145), width: '43%' },
    backImgView:{ width: '100%', height: '100%' },
    backImgStyle:{ borderRadius: normalize(30) },
    innerView:{ alignItems: 'center', justifyContent: 'center', borderRadius: normalize(30), backgroundColor: 'rgba(0,0,0,0.30)', flex: 1 }
});