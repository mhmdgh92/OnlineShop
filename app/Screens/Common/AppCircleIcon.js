import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
const GLOBAL = require('./Globals');
import {normalize} from './Utils/PixelNormalization';
import {AppIcon} from './';

const AppCircleIcon = (props) => {
    return (
        <View style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center'}}>
          <View style={{justifyContent:'center',alignItems:'center',backgroundColor:props.iconBackgroundColor?props.iconBackgroundColor:GLOBAL.Color.c3,
            height:normalize(34.5),width:normalize(34.5),borderRadius:normalize(100)}}>
              <AppIcon borderRadius={normalize(30)} size={normalize(props.iconSize?props.iconSize:22)} color={props.iconColor?props.iconColor:GLOBAL.Color.white} name={props.name?props.name:"email"}/>
          </View>
        </View>
    );
}

export default AppCircleIcon;
