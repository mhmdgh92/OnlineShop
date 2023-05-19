import React from 'react';
import { View } from 'react-native';
import { AppTopBar, AppFlatList, AppBottomBar, AppLoader } from '../Common/';
import BrandItem from './Components/BrandItem';
import firestore from '@react-native-firebase/firestore';

class Brands extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true,
    }
  }

  async componentDidMount() {
    await this.LoadData();
  }

  async LoadData() {
    let dataObj = [];
    await firestore()
      .collection('brands')
      .get()
      .then(documentSnapshot => {
        documentSnapshot.docs.map((item, id) => {
          let newItem = { id: id, data: item.data() }
          dataObj.push(newItem);
        })
        this.setState({ data: dataObj, loading: false })
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
      <View style={{ height: '100%', width: '100%', alignItems: 'center' }}>
        <AppTopBar title={'Brands'} />
        <View style={{ height: '83%' }}>
          <AppFlatList numColumns={2} data={data} renderItem={({ item }) => <BrandItem key={item.id} item={item.data} />} />
        </View>
        <AppBottomBar choosed={2} />
      </View>
    );
  }
}

export default Brands;