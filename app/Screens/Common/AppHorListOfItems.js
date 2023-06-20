import React from 'react';
import { View } from 'react-native';
const { AppText, AppFlatList, AppProductItem } = require('./');
import { appHorListOfItemsStyle } from "./styles";
import PropTypes from 'prop-types';

export const AppHorListOfItems = (props) => {

  const { container, textStyle } = appHorListOfItemsStyle(props);

  const {
    title,
    titleColor,
    data
  } = props;

  var _title = title ? title : 'Most ordered';

  return (
    <View style={container}>
      <View style={textStyle}>
        <AppText size={16} color={titleColor} text={_title} />
      </View>
      <AppFlatList horizontal data={data} renderItem={({ item }) => <AppProductItem item={item} />} />
    </View>
  );
}

AppHorListOfItems.propTypes = {
  props: PropTypes.shape({
    title: PropTypes.string,
    data: PropTypes.object
  })
};