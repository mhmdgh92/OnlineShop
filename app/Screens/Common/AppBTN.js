import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { appBTNStyle } from "./styles";

const AppBTN = (props) => {

  const { loading } = props;
  const { container, textStyle } = appBTNStyle(props);


  return (
    <TouchableOpacity activeOpacity={0.9} style={container} onPress={loading ? null : props.onPress}>
      {loading ?
        <ActivityIndicator color={'white'} /> :
        <Text style={textStyle}> {props.text ? props.text : 'Press Here'} </Text>}
    </TouchableOpacity>
  );
}

export default AppBTN;
