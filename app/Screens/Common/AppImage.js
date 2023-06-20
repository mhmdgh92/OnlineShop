import React from 'react';
import FastImage from 'react-native-fast-image';
import { appImageStyle } from "./styles";
import PropTypes from 'prop-types';

export const AppImage = (props) => {

  const { container } = appImageStyle(props);
  const {
    source,
    resizeMode
  } = props;

  var _source = source ? source : require('../../Assets/sampleImg.jpg');
  var _resizeMode = resizeMode ? resizeMode : 'contain';
  return (
    <FastImage style={container}
      source={_source}
      resizeMode={_resizeMode}
    />
  );
}

AppImage.propTypes = {
  props: PropTypes.shape({
    resizeMode: PropTypes.string,
    source: PropTypes.object
  })
};
