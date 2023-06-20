import React from 'react';
import FastImage from 'react-native-fast-image';
import { appRoundedImageStyle } from "./styles";
import PropTypes from 'prop-types';

export const AppRoundedImage = (props) => {

  const { container } = appRoundedImageStyle(props);

  const { source } = props;

  var _source = source ? source : require('../../Assets/profile.png');

  return (
    <FastImage style={container} resizeMode={'cover'} source={_source} />
  );
}

AppRoundedImage.propTypes = {
  props: PropTypes.shape({
    source: PropTypes.object,
  })
};