import React from 'react';
import FastImage from 'react-native-fast-image';
import { appImageStyle } from "./styles";
import PropTypes from 'prop-types';

const AppImage = (props) => {

  const { container } = appImageStyle(props);

  return (
    <FastImage style={container}
      resizeMode={props.resizeMode ? props.resizeMode : 'contain'}
      source={props.source ? props.source : require('../../Assets/sampleImg.jpg')} />
  );
}

AppImage.propTypes = {
  props: PropTypes.shape({
    resizeMode: PropTypes.string,
    source: PropTypes.object
  })
};

export default AppImage;
