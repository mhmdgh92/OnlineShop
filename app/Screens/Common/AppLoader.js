import React from 'react';
import { ActivityIndicator } from 'react-native';
import { appLoaderStyle } from "./styles";

const AppLoader = () => {

  const { container } = appLoaderStyle;

  return (
    <ActivityIndicator style={container} />
  );
}

export default AppLoader;