import React from 'react';
import {View,Text} from 'react-native';
import {fontPixel,heightPixel,widthPixel,normalize} from './Utils/PixelNormalization';
const GLOBAL = require('./Globals');

const AppText = (props) => {
    return (
      <View style={[{justifyContent:'center',backgroundColor:props.backgroundColor?props.backgroundColor:'transparent'},{...props.style}]}>
        <Text style={[{textAlignVertical:'center', borderColor:props.borderColor?props.borderColor:'white',
        borderWidth:props.borderWidth?props.borderWidth:0,
        borderRadius:normalize(props.borderRadius?props.borderRadius:0),
        textDecorationLine: props.crossed?'line-through':'none',textDecorationStyle:props.textDecorationStyle?props.textDecorationStyle:'solid',width:props.width?widthPixel(props.width):'auto',margin:normalize(props.margin?props.margin:0),
        marginRight:heightPixel(props.marginRight?props.marginRight:0),
        marginTop:heightPixel(props.marginTop?props.marginTop:0),marginBottom:heightPixel(props.marginBottom?props.marginBottom:0),textAlign:props.textAlign?props.textAlign:'center',
        height:props.height?heightPixel(props.height):'auto',
        color:props.color?props.color:GLOBAL.Color.c3,
        fontFamily:props.fontFamily?props.fontFamily:"Montserrat-Bold",
        fontSize:fontPixel(props.size?props.size:14)},{...props.textStyle}]}>
          {props.text?props.text:'insert Text'}
        </Text>
      </View>
    );
}

export default AppText;
