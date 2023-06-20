import React from 'react';
import { ActivityIndicator } from 'react-native';
import { appLoaderStyle } from "./styles";

export const AppLoader = () => {

  const { container } = appLoaderStyle;

  return (
    <ActivityIndicator style={container} />
  );
}