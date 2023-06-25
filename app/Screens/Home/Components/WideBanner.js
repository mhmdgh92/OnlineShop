import React from 'react';
import { View } from 'react-native';
const GLOBAL = require('../../Common/Globals');
const { AppImage } = require('../../Common/');
import { wideBannerStyle } from './styles';

export const WideBanner = (props) => {

  const {
    container
  } = wideBannerStyle;

  // Component to render the image item
  function ImgItem(props) {
    return (
      <AppImage source={{ uri: props }} resizeMode={'cover'} width={350} height={90} />
    );
  }

  const {
    data
  } = props;


  return (
    <View style={container}>
      {ImgItem(data)}
    </View>
  );
}
