import React from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { heightPixel, widthPixel } from '../Common/Utils/PixelNormalization';
import { AppTopBar, AppTextInput, AppBTN } from '../Common/';
import firestore from '@react-native-firebase/firestore';
import user from '../../user';
import { floor } from 'react-native-reanimated';

class Shipping extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      phone: null,
      email: null,
      country: null,
      city: null,
      province: null,
      address: null,
      neighbour: null,
      buildingNo: null,
      floorNu: null,
      aptNo: null,
      loading: false
    }
  }

  async onContinueClicked() {
    console.log('onContinueClicked');
    this.setState({ loading: true });
    await firestore()
      .collection('users')
      .doc(user.userObj.email)
      .update({
        'currentOrder.shippingAddress': (this.state)
      });
    this.props.navigation.navigate('PickLocation', {
      cart: this.props.route.params.cart,
      shipping: this.getShippingObj()
    });
  }

  getShippingObj() {
    let returnedObj = {};
    const {
      firstName,
      lastName,
      phone,
      email,
      country,
      city,
      province,
      address,
      neighbour,
      buildingNo,
      floorNu,
      aptNo,
    } = this.state;

    firstName ? returnedObj.firstName = firstName : null;
    lastName ? returnedObj.lastName = lastName : null;
    phone ? returnedObj.phone = phone : null;
    email ? returnedObj.email = email : null;
    country ? returnedObj.country = country : null;
    city ? returnedObj.city = city : null;
    province ? returnedObj.province = province : null;
    address ? returnedObj.address = address : null;
    neighbour ? returnedObj.neighbour = neighbour : null;
    buildingNo ? returnedObj.buildingNo = buildingNo : null;
    floorNu ? returnedObj.floorNu = floorNu : null;
    aptNo ? returnedObj.aptNo = aptNo : null;

    return returnedObj;
  }


  render() {
    const { loading } = this.state;
    return (
      <ScrollView>
        <View style={{ alignItems: 'center' }}>
          <AppTopBar title={'Shipping info'} />
          <AppTextInput marginTop={15} name={'account'} placeholder={'First name'}
            onEndEditing={(text) => this.setState({ firstName: text })} />
          <AppTextInput marginTop={5} name={'account'} placeholder={'Last name'}
            onEndEditing={(text) => this.setState({ lastName: text })} />
          <AppTextInput marginTop={5} name={'cellphone'} placeholder={'Phone number'}
            onEndEditing={(text) => this.setState({ phone: text })} />
          <AppTextInput marginTop={5} name={'email'} placeholder={'Email'}
            onEndEditing={(text) => this.setState({ email: text })} />
          <AppTextInput marginTop={5} name={'map-marker'} placeholder={'Country'}
            onEndEditing={(text) => this.setState({ country: text })} />
          <AppTextInput marginTop={5} name={'city'} placeholder={'City'}
            onEndEditing={(text) => this.setState({ city: text })} />
          <AppTextInput marginTop={5} name={'map'} placeholder={'Province'}
            onEndEditing={(text) => this.setState({ province: text })} />
          <AppTextInput marginTop={5} name={'sign-direction'} placeholder={'Address - Street'}
            onEndEditing={(text) => this.setState({ address: text })} />
          <AppTextInput marginTop={5} name={'home-city'} placeholder={'Neighbour'}
            onEndEditing={(text) => this.setState({ neighbour: text })} />
          <AppTextInput marginTop={5} name={'home'} placeholder={'Building number'}
            onEndEditing={(text) => this.setState({ buildingNo: text })} />
          <View style={{ marginTop: heightPixel(5), width: widthPixel(320), flexDirection: 'row', justifyContent: 'space-between' }}>
            <AppTextInput iconFlex={3} width={155} name={'format-list-numbered'} placeholder={'Floor number'}
              onEndEditing={(text) => this.setState({ floorNu: text })} />
            <AppTextInput iconFlex={3} width={155} name={'home'} placeholder={'Apartment no.'}
              onEndEditing={(text) => this.setState({ aptNo: text })} />
          </View>
          <AppBTN loading={loading} text={'Continue'} marginTop={32} onPress={() => this.onContinueClicked()} />
        </View>
      </ScrollView>
    );
  }
}
export default Shipping;
