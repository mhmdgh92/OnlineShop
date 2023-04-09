import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const GLOBAL = require('./Globals');
import {normalize} from './Utils/PixelNormalization';

  const AppIcon = (props) => {
    return (
        <View style={[{alignItems:'center',justifyContent:'center'},{...props.style}]}>
          <Icon style={{}} size={normalize(props.size?props.size:19)} color={props.color?props.color:GLOBAL.Color.white} name={props.name?props.name:"arrow-right"} />
        </View>
    );
}

export default AppIcon;
