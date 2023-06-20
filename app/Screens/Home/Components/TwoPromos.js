import React from 'react';
import { View } from 'react-native';
const { AppImage } = require('../../Common/');
import { twoPromosStyle } from './styles';

export const TwoPromos = (props) => {

  const {
    container
  } = twoPromosStyle;

  const {
    source
  } = props;

  function ImgItem(props) {
    return (
      <AppImage source={{ uri: source }} width={167.5} height={120} />
    );
  }

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
      {imgs(data)}
    </View>
  );
}