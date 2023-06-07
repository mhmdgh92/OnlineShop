import { View, Dimensions, Platform, PixelRatio, Text } from 'react-native';
const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get('window');
// based on iphone 11 Pro
const heightBaseScale = ScreenHeight / 812;
const widthBaseScale = ScreenWidth / 375;
function normalizeVal(size, based = 'width') {
  const newSize = (based === 'height') ?
    size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

const normalize = (size) => {
  const newSize = size * widthBaseScale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}

//for width  pixel
const widthPixel = (size) => {
  return normalizeVal(size, 'width');
};

//for height  pixel
const heightPixel = (size) => {
  return normalizeVal(size, 'height');
};
//for font  pixel
const fontPixel = (size) => {
  return heightPixel(size);
};
//for Margin and Padding vertical pixel
const pixelSizeVertical = (size) => {
  return heightPixel(size);
};
//for Margin and Padding horizontal pixel
const pixelSizeHorizontal = (size) => {
  return widthPixel(size);
};

export {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
  normalize
};
