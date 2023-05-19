import React from 'react';
import { View } from 'react-native';
import { widthPixel } from '../../Common/Utils/PixelNormalization';
const { AppImage } = require('../../Common/');

const TwoPromos = (props) => {

  function ImgItem(props) {
    return (
      <AppImage source={{ uri: props.source }} width={167.5} height={120} />
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
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: widthPixel(350) }}>
      {imgs(data)}
    </View>
  );
}

export default TwoPromos;
