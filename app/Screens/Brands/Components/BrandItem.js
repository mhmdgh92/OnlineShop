import React from 'react';
const { AppImage } = require('../../Common/');
import PropTypes from 'prop-types';

export const BrandItem = ({ item }) => {
  const {
    link
  } = item;
  return (
    <AppImage width={150} height={120} source={{ uri: link }} />
  );
}

BrandItem.propTypes = {
  item: PropTypes.shape({
    link: PropTypes.string.isRequired
  }).isRequired
};