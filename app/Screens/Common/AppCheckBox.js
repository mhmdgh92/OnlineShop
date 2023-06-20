import React from 'react';
import { View } from 'react-native';
import { appCheckBoxStyle } from "./styles";

export const AppCheckBox = () => {

  const { container, innerView } = appCheckBoxStyle;

  return (
    <View style={container}>
      <View style={innerView} />
    </View>
  );
};
