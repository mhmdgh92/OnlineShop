import React from 'react';
import {View,Text,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const GLOBAL = require('./Globals');
import {normalize,heightPixel,widthPixel} from './Utils/PixelNormalization';
import {AppIcon,AppText} from './';

const AppListItem = (props) => {

  const{
    icon,
    title,
    iconSize,
    iconColor,
    textColor,
    borderColor,
    textSize,
    alignItems
  } = props;

    return (
      <View style={[{marginTop:heightPixel(props.marginTop?props.marginTop:7),flexDirection:'row',
        width:widthPixel(props.width?props.width:352),
        height: heightPixel(props.height?props.height:60),borderRadius: normalize(props.borderRadius?props.borderRadius:10),
        borderColor:borderColor?borderColor:GLOBAL.Color.borderColor,
        borderWidth:normalize(2.5),
        justifyContent:'center',alignSelf:'center',
        alignItems: 'center',backgroundColor: 'white'},{...props.style}]}>
        <View style={{height:'100%',width:'15%',justifyContent:'center'}}><AppIcon name={icon} color={iconColor?iconColor:GLOBAL.Color.darkGrey} size={iconSize?iconSize:30}/></View>
        <View style={{height:'100%',width:'45%',justifyContent:'center'}}><AppText size={textSize?textSize:14.5} text={title} color={textColor?textColor:GLOBAL.Color.c3} textAlign={'left'}/></View>
        <View style={{height:'100%',width:'40%',alignItems:alignItems?alignItems:'stretch'}}>{props.children}</View>
      </View>
    );
  }

export default AppListItem;
