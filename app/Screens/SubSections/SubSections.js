import React from 'react';
import { View } from 'react-native';
import { AppTopBar, AppFlatList, AppBottomBar } from '../Common/';
import SubSectionItem from './Components/SubSectionItem';

class SubSections extends React.Component {


  render() {
    const {
      sectionID,
      sectionName,
      data
    } = this.props.route.params;

    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <AppTopBar title={sectionName} />
        <AppFlatList numColumns={2} data={data}
          renderItem={({ item }) => <SubSectionItem sectionID={sectionID} item={item} />} />
        <AppBottomBar choosed={1} />
      </View>
    );
  }
}

export default SubSections;
