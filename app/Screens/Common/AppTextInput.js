import React from 'react';
import {View,Text,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const GLOBAL = require('./Globals');
import {normalize,heightPixel,widthPixel} from './Utils/PixelNormalization';
import {AppCircleIcon} from './';

const AppTextInput = (props) => {

  const {
    keyboardType,
    placeholder,
    secureTextEntry,
    multiline,
    textAlignVertical,
    hideIcon,
    alignItems,
    height,
    width,
    borderRadius,
    marginTop,
    iconFlex
  } = props;

    return (
      <View style={{marginTop:heightPixel(marginTop?marginTop:0),flexDirection:'row',
        width:widthPixel(width?width:320),
        height: heightPixel(height?height:50),borderRadius: normalize(borderRadius?borderRadius:50),
        borderColor:GLOBAL.Color.borderColor,
        borderWidth:normalize(2.5),
        alignSelf:'center',justifyContent:'center',
        alignItems: alignItems?alignItems:'center',backgroundColor: GLOBAL.Color.white}}>
        {hideIcon?<View style={{flex:1}}/>:<View style={{flex:iconFlex?iconFlex:1}}><AppCircleIcon {...props}/></View>}
        <View style={{flex:hideIcon?12:6}}><TextInput textAlignVertical={textAlignVertical?textAlignVertical:'auto'} multiline={multiline} secureTextEntry={secureTextEntry}
         placeholder={placeholder?placeholder:'Email'} keyboardType={keyboardType}
         textStyle={props.textStyle}/></View>
      </View>
    );
  }

export default AppTextInput;
