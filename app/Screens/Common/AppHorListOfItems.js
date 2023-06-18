import React from 'react';
import { View } from 'react-native';
const { AppText, AppFlatList, AppProductItem } = require('./');
import { appHorListOfItemsStyle } from "./styles";
import PropTypes from 'prop-types';

const AppHorListOfItems = (props) => {

  const { container, textStyle } = appHorListOfItemsStyle(props);

  return (
    <View style={container}>
      <View style={textStyle}>
        <AppText size={16} color={props.titleColor} text={props.title ? props.title : 'Most ordered'} />
      </View>
      <AppFlatList horizontal data={props.data} renderItem={({ item }) => <AppProductItem item={item} />} />
    </View>
  );
}

AppHorListOfItems.propTypes = {
  props: PropTypes.shape({
    title: PropTypes.string,
    data: PropTypes.object
  })
};

export default AppHorListOfItems;
