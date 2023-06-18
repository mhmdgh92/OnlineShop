import React from 'react';
import FastImage from 'react-native-fast-image';
import { appRoundedImageStyle } from "./styles";
import PropTypes from 'prop-types';

const AppRoundedImage = (props) => {

  const { container } = appRoundedImageStyle(props);

  return (
    <FastImage style={container} resizeMode={'cover'}
      source={props.source ? props.source : require('../../Assets/profile.png')} />
  );
}

AppRoundedImage.propTypes = {
  props: PropTypes.shape({
    source: PropTypes.object,
  })
};

export default AppRoundedImage;
