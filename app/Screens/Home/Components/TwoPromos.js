import React from 'react';
import { View } from 'react-native';
const { AppImage } = require('../../Common/');
import { twoPromosStyle } from './styles';

export const TwoPromos = (props) => {

  const {
    container
  } = twoPromosStyle;

  // Component to render the image item
  function ImgItem(props) {
    const { source } = props;
    return (
      <AppImage source={{ uri: source }} width={167.5} height={120} />
    );
  }

  // Function to render multiple image items
  function imgs(data) {
    let returnedImgs = [];
    data.map((item) => {
      returnedImgs.push(
        <ImgItem key={item.id} source={item.image} />
      );
    })
    return returnedImgs;
  }

  const {
    data
  } = props;

  return (
    <View style={container}>
      {/* Render the image items */}
      {imgs(data)}
    </View>
  );
}
