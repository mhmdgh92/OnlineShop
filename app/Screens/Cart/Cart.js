import React from 'react';
import { View, TextInput, Dimensions, Alert } from 'react-native';
const { width: ScreenWidth, height: ScreenHeight, } = Dimensions.get('window');
import { heightPixel, normalize } from '../Common/Utils/PixelNormalization';
import { AppTopBar, AppIcon, AppLoader, AppFlatList, AppText, AppBTN, AppBottomBar } from '../Common/';
const GLOBAL = require('../Common/Globals');
import CartItem from './Components/CartItem';
import { connect } from 'react-redux';
import user from '../../user';
import firestore from '@react-native-firebase/firestore';

class Cart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      subTotal: 0,
      shipping: 10,
      data: null,
      fullLoading: true,
      loading: false
    }
  }

  async componentDidMount() {
    this.LoadData();
  }

  async LoadData() {
    await firestore()
      .collection('users')
      .doc(user.userObj.email)
      .get()
      .then(documentSnapshot => {
        this.setState({ data: documentSnapshot.data().currentOrder.cart, fullLoading: false });
        this.calculateTotal();
      }).catch(error => {
        this.setState({ data: null, fullLoading: false });
      });
  }

  calculateTotal() {
    let subTotal = 0;
    const { data } = this.state;

    data.map((item) => {
      const curItemQuantitiy = Number(item.quantity);
      const curItemPrice = Number(item.price);
      const total = Number(curItemQuantitiy * curItemPrice);
      subTotal += Number(curItemQuantitiy * curItemPrice);
    });
    this.setState({ subTotal: subTotal });
  }

  billItem = (name, price, withoutBottomBorder) => {
    return (
      <View style={{
        justifyContent: 'space-between', borderBottomWidth: withoutBottomBorder ? 0 : 1,
        borderBottomColor: GLOBAL.Color.borderColor, height: '33%', width: '90%', flexDirection: 'row'
      }}>
        <AppText text={name} />
        <AppText text={price} />
      </View>
    )
  }

  async onFinalizeClicked() {
    this.setState({ loading: true })
    const { data } = this.state;
    await firestore()
      .collection('users')
      .doc(user.userObj.email)
      .update({
        'currentOrder.cart': data
      });
    this.props.navigation.navigate('Shipping', {
      cart: data
    });
  }

  onPlusOrMinusQuantity = (itemID, plusOrMinus) => {
    const {
      subTotal,
      data
    } = this.state;
    if (plusOrMinus) {
      data[itemID].quantity++;
      this.setState({ data: data, subTotal: subTotal + (data[itemID].price) })
    }
    else {
      data[itemID].quantity--;
      this.setState({ data: data, subTotal: subTotal - (data[itemID].price) })
    }
  }

  MyScrollableView = () => {
    const {
      subTotal,
      shipping,
      fullLoading,
      data,
      loading
    } = this.state;

    if (fullLoading)
      return <AppLoader />

    if (!data)
      return (
        <View style={{ justifyContent: 'center', alignItems: 'center', height: '80%', width: '100%' }}>
          <AppIcon name={'cart-off'} color={GLOBAL.Color.grey} size={170} />
          <AppText marginTop={10} text="Your cart is empty!" color={GLOBAL.Color.black} size={20} />
        </View>
      )


    return (
      <View style={{ width: '100%', height: '100%' }}>
        <View style={{ width: ScreenWidth, height: ScreenHeight * .88, alignItems: 'center' }}>
          <View style={{ width: '100%', height: heightPixel(330) }}>
            <AppFlatList numColumns={1} data={data}
              renderItem={({ id, item }) => <CartItem key={id} item={item} onPlusOrMinusQuantity={this.onPlusOrMinusQuantity} />} />
          </View>
          <View style={{ alignItems: 'center', flexDirection: 'row', marginTop: heightPixel(30), width: '85%', height: '7%', borderRadius: normalize(30), backgroundColor: 'white' }}>
            <TextInput editable={false} placeholder={'\tPromo Code'} style={{ width: '65%' }} />
            <AppBTN text={'Apply'} textSize={17} height={'100%'} width={'35%'} />
          </View>
          <View style={{ alignItems: 'center', marginTop: heightPixel(25), width: '85%', height: '16%', borderRadius: normalize(15), backgroundColor: 'white' }}>
            {this.billItem('Sub Total', '$' + subTotal)}
            {this.billItem('Shipping', '$' + shipping)}
            {this.billItem('Total', '$' + Number(subTotal + shipping), true)}
          </View>
          <AppBTN loading={loading} marginTop={22} text={'Finalize Order'} onPress={() => this.onFinalizeClicked()} />
        </View>
      </View>
    );
  }

  render() {

    const {
      fullLoading,
      data
    } = this.state;

    return (
      <View style={{ height: '100%', width: '100%' }}>
        <AppTopBar title={'My Cart'} />
        {this.MyScrollableView()}
        <AppBottomBar choosed={3} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  }
};

export default connect(mapStateToProps)(Cart)