import React from 'react';
import { View, TouchableOpacity } from 'react-native';
const GLOBAL = require('../../Common/Globals');
import { heightPixel, widthPixel } from '../../Common/Utils/PixelNormalization';
import { AppText, AppFlatList, AppProductItem } from '../../Common/';

export const ListOfProducts = (props) => {

  const {
    title,
    data
  } = props;

  var _title = title ? title : "Most ordered";

  return (
    <View style={{ marginTop: heightPixel(15), height: heightPixel(320), width: widthPixel(350) }}>
      <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', width: '98%', height: '10%' }}>
        <AppText size={16} text={_title} />
        <TouchableOpacity><AppText size={13} color={GLOBAL.Color.c1} text={'Show All'} /></TouchableOpacity>
      </View>
      <AppFlatList horizontal data={data} renderItem={({ item }) => <AppProductItem item={item} />} />
    </View>
  );
}
