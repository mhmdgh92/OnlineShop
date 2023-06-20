import React from 'react';
import { FlatList } from 'react-native';
import { appListStyle } from "./styles";
import PropTypes from 'prop-types';

export const AppFlatList = (props) => {

  const { oneColContainer, twoColContainer } = appListStyle(props);

  const {
    numColumns,
    data,
    renderItem,
    horizontal
  } = props;


  return (
    horizontal ?
      (<FlatList
        nestedScrollEnabled
        {...props}
        horizontal={true}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />) :
      (numColumns == 1 ?
        <FlatList
          nestedScrollEnabled
          {...props}
          contentContainerStyle={{ alignItems: 'center' }}
          style={oneColContainer}
          numColumns={1}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
        :
        <FlatList
          nestedScrollEnabled
          style={twoColContainer}
          {...props}
          keyExtractor={(item) => item.id}
          numColumns={numColumns}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          data={data}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />)
  );
};

AppFlatList.propTypes = {
  props: PropTypes.shape({
    renderItem: PropTypes.object,
    data: PropTypes.object,
    numColumns: PropTypes.number,
    horizontal: PropTypes.bool
  })
};
