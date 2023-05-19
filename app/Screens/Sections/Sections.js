import React from 'react';
import { View } from 'react-native';
import { AppTopBar, AppFlatList, AppBottomBar, AppLoader } from '../Common/';
import SectionItem from './Components/SectionItem';
import firestore from '@react-native-firebase/firestore';

class Sections extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    }
  }

  async componentDidMount() {
    await this.LoadData();
  }

  async LoadData() {
    await firestore()
      .collection('sections')
      .get()
      .then(documentSnapshot => {
        let newData = [];

        documentSnapshot.docs.map((item) => {
          let newSectionItem = item.data();
          newSectionItem.name = item.id;
          newData.push(newSectionItem);
        })

        this.setState({ data: newData, loading: false })
      });
  }

  render() {

    const {
      loading,
      data
    } = this.state;

    if (loading)
      return <AppLoader />

    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <AppTopBar title={'Main Sections'} />
        <AppFlatList numColumns={2} data={data} renderItem={({ item }) => <SectionItem item={item} />} />
        <AppBottomBar choosed={1} />
      </View>
    );
  }
}

export default Sections;
