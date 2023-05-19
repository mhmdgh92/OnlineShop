import React from 'react';
import { View } from 'react-native';
import { heightPixel } from '../Common/Utils/PixelNormalization';
import { AppTopBar, AppFlatList, AppLoader, AppProductItem } from '../Common/';
import firestore from '@react-native-firebase/firestore';

class Products extends React.Component {

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
    const { secitionID, secitionName } = this.props.route.params;
    await firestore()
      .collection('products')
      .doc(secitionID.toString())
      .get()
      .then(documentSnapshot => {
        this.setState({ secitionName: secitionName, data: documentSnapshot.data().data, loading: false })
      });
  }

  render() {

    const {
      loading,
      data,
      secitionName
    } = this.state;

    if (loading)
      return <AppLoader />

    return (
      <View style={{ alignItems: 'center' }}>
        <AppTopBar title={secitionName} />
        <View style={{ height: '100%', width: '95%' }}>
          <AppFlatList style={{ width: '100%' }} numColumns={2} data={data}
            renderItem={({ item }) => <AppProductItem height={heightPixel(300)} item={item} />} />
          <View style={{ height: '16%' }} />
        </View>
      </View>
    );
  }
}

export default Products;
