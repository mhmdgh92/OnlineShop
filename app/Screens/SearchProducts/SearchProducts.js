import React from 'react';
import { View } from 'react-native';
import { heightPixel } from '../Common/Utils/PixelNormalization';
import { AppTopBar, AppFlatList, AppLoader, AppProductItem, AppText, AppIcon } from '../Common/';
const GLOBAL = require('../Common/Globals');
import firestore from '@react-native-firebase/firestore';

class SearchProducts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: []
    }
  }

  componentDidMount() {
    const searchInput = this.props.route.params.searchInput;
    this.searchThisProduct(searchInput);
  }

  async searchThisProduct(input) {
    let results = [];
    await firestore()
      .collection('products')
      .orderBy('name')
      .startAt(input)
      .endAt(input + '~')
      .get()
      .then(documentSnapshot => {
        documentSnapshot.docs.map((item) => {
          results.push(item.data());
        })
        this.setState({ data: results, loading: false })
      });
  }

  render() {
    const { loading, data } = this.state;

    if (loading)
      return <AppLoader />

    if (data.length === 0)
      return (
        <View style={{ height: '100%', alignItems: 'center' }}>
          <AppTopBar title={'Results'} />
          <View style={{ height: '70%', justifyContent: 'center', alignItems: 'center' }}>
            <AppIcon name={'magnify-remove-outline'} color={GLOBAL.Color.grey} size={170} />
            <AppText marginTop={10} text="No Results Found!" color={GLOBAL.Color.black} size={20} />
          </View>
        </View>
      )

    return (
      <View style={{ alignItems: 'center' }}>
        <AppTopBar title={'Results'} />
        <View style={{ height: '100%', width: '95%' }}>
          <AppFlatList style={{ width: '100%' }} numColumns={2} data={data}
            renderItem={({ item }) => <AppProductItem height={heightPixel(300)} item={item} />} />
          <View style={{ height: '16%' }} />
        </View>
      </View>
    );
  }
}

export default SearchProducts;
