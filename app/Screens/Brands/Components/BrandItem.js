import React from 'react';
const { AppImage } = require('../../Common/');

const BrandItem = (props) => {
  const {
    link
  } = props.item;
  return (
    <AppImage width={150} height={120} source={{ uri: link }} />
  );
}

export default BrandItem;