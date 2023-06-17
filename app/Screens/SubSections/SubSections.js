import React from 'react';
import { View } from 'react-native';
import { AppTopBar, AppFlatList, AppBottomBar } from '../Common/';
import SubSectionItem from './Components/SubSectionItem';
import { styles } from "./style";

export default function SubsubSection(props) {

  const {
    sectionID,
    sectionName,
    data
  } = props.route.params;

  const{
    container
  }=styles;

  return (
    <View style={container}>
      <AppTopBar title={sectionName} />
      <AppFlatList numColumns={2} data={data}
        renderItem={({ item }) => <SubSectionItem sectionID={sectionID} item={item} />} />
    </View>
  );
}