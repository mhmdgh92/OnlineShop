import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { appLoaderStyle } from "./styles";
import AppText from './AppText';

export const AppErrorScreen = () => {

  const { container } = appLoaderStyle;

  return (
    <View style={container}>
      <AppText marginTop={0} text={"Somthing went wrong! \n Reload app "} size={24} />
    </View>
  );
}