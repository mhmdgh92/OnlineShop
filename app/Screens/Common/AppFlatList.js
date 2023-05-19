import React from 'react';
import { FlatList } from 'react-native';
const GLOBAL = require('./Globals');
import { heightPixel, widthPixel } from './Utils/PixelNormalization';

const AppFlatList = (props) => {
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
          style={[{ height: heightPixel(700), width: '100%' }, { ...props.style }]}
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
          style={[{ height: heightPixel(700), width: widthPixel(320) }, { ...props.style }]}
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
