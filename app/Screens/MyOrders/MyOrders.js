import React from 'react';
import { View } from 'react-native';
import { AppTopBar, AppFlatList, AppLoader, AppIcon, AppText } from '../Common/';
const GLOBAL = require('../Common/Globals');
import OrderItem from './Components/OrderItem';
import user from '../../user';
import firestore from '@react-native-firebase/firestore';

class MyOrders extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      subTotal: 0,
      shipping: 10,
      data: null,
      loading: true,
    }
  }

  async componentDidMount() {
    this.LoadData();
  }

  async LoadData() {
    await firestore()
      .collection('users')
      .doc(user.userObj.Email)
      .get()
      .then(documentSnapshot => {
        this.setState({ data: documentSnapshot.data().orders, loading: false });
      });
  }

  render() {
    const { loading, data } = this.state;

    // if (!data)
    return (
      <View style={{ height: '100%', width: '100%' }}>
        <AppTopBar title={'My Orders'} />
        <View style={{ height: '75%', justifyContent: 'center', alignItems: 'center' }}>
          <AppIcon name={'package-variant'} color={GLOBAL.Color.grey} size={170} />
          <AppText marginTop={10} text="You don't have any orders!" color={GLOBAL.Color.black} size={20} />
        </View>
      </View>
    )

    if (loading)
      return <AppLoader />
    return (
      <View style={{ alignItems: 'center' }}>
        <AppTopBar title={'My Orders'} />
        <AppFlatList numColumns={1} data={data} renderItem={({ item }) => <OrderItem item={item} />} />
      </View>
    );
  }
}

export default MyOrders;
