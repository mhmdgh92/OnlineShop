import React from 'react';
import { FlatList } from 'react-native';
import { appListStyle } from "./styles";

const AppFlatList = (props) => {

  const { oneColContainer, twoColContainer } = appListStyle(props);

  return (
    props.horizontal ?
      (<FlatList
        nestedScrollEnabled
        {...props}
        horizontal={true}
        data={props.data}
        renderItem={props.renderItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />) :
      (props.numColumns == 1 ?
        <FlatList
          nestedScrollEnabled
          {...props}
          contentContainerStyle={{ alignItems: 'center' }}
          style={oneColContainer}
          numColumns={1}
          data={props.data}
          keyExtractor={(item) => item.id}
          renderItem={props.renderItem}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
        :
        <FlatList
          nestedScrollEnabled
          style={twoColContainer}
          {...props}
          keyExtractor={(item) => item.id}
          numColumns={props.numColumns}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          data={props.data}
          renderItem={props.renderItem}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />)
  );
};

export default AppFlatList;
