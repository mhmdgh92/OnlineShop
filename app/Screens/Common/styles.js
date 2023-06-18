import { StyleSheet } from 'react-native';
import { fontPixel, heightPixel, widthPixel, normalize } from './Utils/PixelNormalization';
const GLOBAL = require('./Globals');

export const appBottomBarStyle = StyleSheet.create({
    container: {
        position: 'absolute', bottom: 0, borderTopWidth: 1, borderTopColor: '#A3A3A3',
        width: widthPixel(375), height: heightPixel(66), alignItems: 'center', backgroundColor: '#ECECEC', flexDirection: 'row'
    },
    itemStyle: { width: '20%', height: '50%', alignItems: 'center', justifyContent: 'center' }
});

export const appBTNStyle = (props) => StyleSheet.create({
    container:
        [{
            marginTop: heightPixel(props.marginTop ? props.marginTop : 0), height: props.height ? props.height : heightPixel(52)
            , width: props.width ? props.width : widthPixel(300),
            borderColor: props.borderColor ? props.borderColor : 'transparent'
            , borderWidth: normalize(props.borderWidth ? props.borderWidth : 0)
            , borderRadius: normalize(props.borderRadius ? props.borderRadius : 50),
            alignSelf: 'center', justifyContent: 'center',
            alignItems: 'center', backgroundColor: props.color ? props.color : GLOBAL.Color.c1
        }, [{ ...props.style }]],
    textStyle: {
        textAlign: 'center', color: props.textColor ? props.textColor : GLOBAL.Color.white,
        fontFamily: props.fontFamily ? props.fontFamily : "Montserrat-Bold",
        fontSize: normalize(props.textSize ? props.textSize : 16)
    }
});

export const appCheckBoxStyle = StyleSheet.create({
    container: { borderWidth: normalize(4), borderColor: GLOBAL.Color.c3, width: '4.5%', height: normalize(20), justifyContent: 'center', alignItems: 'center' },
    textStyle: { backgroundColor: GLOBAL.Color.c3, width: '60%', height: '60%' }
});

export const appCircleIconStyle = (props) => StyleSheet.create({
    container: { height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' },
    innerView: {
        justifyContent: 'center', alignItems: 'center', backgroundColor: props.iconBackgroundColor ? props.iconBackgroundColor : GLOBAL.Color.c3,
        height: normalize(34.5), width: normalize(34.5), borderRadius: normalize(100)
    }
});

export const appListStyle = (props) => StyleSheet.create({
    oneColContainer: [{ height: heightPixel(700), width: '100%' }, { ...props.style }],
    twoColContainer: [{ height: heightPixel(700), width: widthPixel(320) }, { ...props.style }]
});

export const appHorListOfItemsStyle = (props) => StyleSheet.create({
    container: [{ alignSelf: 'center', marginTop: heightPixel(15), height: heightPixel(350), width: widthPixel(350) }, { ...props.style }],
    textStyle: { justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', width: '98%', height: '10%' }
});

export const appIconStyle = (props) => StyleSheet.create({
    container: [{ alignItems: 'center', justifyContent: 'center' }],
    innerIcon: {}
});

export const appImageStyle = (props) => StyleSheet.create({
    container: [{
        alignSelf: 'center',
        marginTop: heightPixel(props.marginTop ? props.marginTop : 0),
        width: widthPixel(props.width ? props.width : 320),
        height: heightPixel(props.height ? props.height : 75)
    }, { ...props.style }]
});

export const appListItemStyle = (props) => StyleSheet.create({

    container: [{
        marginTop: heightPixel(props.marginTop ? props.marginTop : 7), flexDirection: 'row',
        width: widthPixel(props.width ? props.width : 352),
        height: heightPixel(props.height ? props.height : 60), borderRadius: normalize(props.borderRadius ? props.borderRadius : 10),
        borderColor: props.borderColor ? props.borderColor : GLOBAL.Color.borderColor,
        borderWidth: normalize(2.5),
        justifyContent: 'center', alignSelf: 'center',
        alignItems: 'center', backgroundColor: 'white'
    }, { ...props.style }],
    iconView: { height: '100%', width: '15%', justifyContent: 'center' },
    textView: { height: '100%', width: '45%', justifyContent: 'center' },
    childrenView: { height: '100%', width: '40%', alignItems: props.alignItems ? props.alignItems : 'stretch' }
});

export const appLoaderStyle = StyleSheet.create({
    container: { flex: 1, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }
});

export const appPickerStyle = (props) => StyleSheet.create({
    container: [{ marginTop: heightPixel(0), width: '100%' }, { ...props.style }]
});

export const appProductItemStyle = (props) => StyleSheet.create({
    container: { borderColor: GLOBAL.Color.borderColor, borderWidth: 1, alignItems: 'center', backgroundColor: 'white', margin: widthPixel(5), width: widthPixel(170), height: props.height ? props.height : '100%' },
    touchStyle: { height: '47%', width: '100%' },
    backgroundImageStyle: { marginTop: '2%', width: '100%', height: '100%' },
    newBadgeStyle: { borderRadius: normalize(7), margin: normalize(7), alignItems: 'center', justifyContent: 'center', backgroundColor: GLOBAL.Color.c1, width: '27.5%', height: '15%' },
    startRatingStyle: { alignItems: 'center', width: '45%', height: '10%' },
    priceStyle: { alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', margin: normalize(13) }
});

export const appQuantityStyle = (props) => StyleSheet.create({
    container: { backgroundColor: '#F7F7F7', borderColor: GLOBAL.Color.borderColor, borderWidth: 1, flexDirection: 'row', width: props.width ? props.width : '35%', height: props.height ? props.height : '90%' },
    touchStyle: { justifyContent: 'center', alignItems: 'center', width: '25%' },
    textStyle: { justifyContent: 'center', width: '50%' }
});

export const appRoundedImageStyle = (props) => StyleSheet.create({
    container: {
        marginTop: heightPixel(props.marginTop ? props.marginTop : 0),
        width: widthPixel(props.width ? props.width : 90), height: heightPixel(props.height ? props.height : 100),
        borderRadius: normalize(100)
    }
});

export const appSearchBarStyle = StyleSheet.create({
    container: {
        width: '100%', height: heightPixel(80),
        flexDirection: 'row', alignItems: 'center', backgroundColor: GLOBAL.Color.c1
    },
    touchStyle: { margin: normalize(10) }
});

export const appTextStyle = (props) => StyleSheet.create({
    container: [{ justifyContent: 'center', backgroundColor: props.backgroundColor ? props.backgroundColor : 'transparent' }, { ...props.style }],
    textStyle: [{
        textAlignVertical: 'center', borderColor: props.borderColor ? props.borderColor : 'white',
        borderWidth: props.borderWidth ? props.borderWidth : 0,
        borderRadius: normalize(props.borderRadius ? props.borderRadius : 0),
        textDecorationLine: props.crossed ? 'line-through' : 'none',
        textDecorationStyle: props.textDecorationStyle ? props.textDecorationStyle : 'solid',
        width: props.width ? widthPixel(props.width) : 'auto', margin: normalize(props.margin ? props.margin : 0),
        marginRight: heightPixel(props.marginRight ? props.marginRight : 0),
        marginTop: heightPixel(props.marginTop ? props.marginTop : 0), marginBottom: heightPixel(props.marginBottom ? props.marginBottom : 0), textAlign: props.textAlign ? props.textAlign : 'center',
        height: props.height ? heightPixel(props.height) : 'auto',
        color: props.color ? props.color : GLOBAL.Color.c3,
        fontFamily: props.fontFamily ? props.fontFamily : "Montserrat-Bold",
        fontSize: fontPixel(props.size ? props.size : 14)
    }, { ...props.textStyle }]
});

export const appTextInputStyle = (props) => StyleSheet.create({
    container: {
        marginTop: heightPixel(props.marginTop ? props.marginTop : 0),
        flexDirection: 'row',
        width: widthPixel(props.width ? props.width : 320),
        height: heightPixel(props.height ? props.height : 50), borderRadius: normalize(props.borderRadius ? props.borderRadius : 50),
        borderColor: GLOBAL.Color.borderColor,
        borderWidth: normalize(2.5),
        alignSelf: 'center', justifyContent: 'center',
        alignItems: props.alignItems ? props.alignItems : 'center', backgroundColor: GLOBAL.Color.white
    },
    hiddenIconView: { flex: 1 },
    showIconView: { flex: props.iconFlex ? props.iconFlex : 1 },
    innerView: { flex: props.hideIcon ? 12 : 6 },
    inputStyle: { margin: 0, marginTop: 0 },
});

export const appTopBarStyle = StyleSheet.create({
    container: {
        width: '100%', height: heightPixel(66),
        flexDirection: 'row', backgroundColor: GLOBAL.Color.c1
    },
    leftView: { justifyContent: 'center', alignItems: 'center', flex: 1 },
    textStyle: { justifyContent: 'center', alignItems: 'center', flex: 5 },
    rightView: { justifyContent: 'center', alignItems: 'center', flex: 1 },
});

export const logoAndNameStyle = (props) => StyleSheet.create({
    container: {
        marginTop: heightPixel(props.marginTop ? props.marginTop : 38), height: heightPixel(props.height ? props.height : 100),
        width: widthPixel(props.width ? props.width : 255)
    }
});