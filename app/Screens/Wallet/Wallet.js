import React from 'react';
import { View } from 'react-native';
import { AppText, AppTopBar, AppLoader } from '../Common/';
import { normalize, heightPixel } from '../Common/Utils/PixelNormalization';
import user from '../../user';

const GLOBAL = require('../Common');

class Wallet extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      balance: 0,
      userName: user.userObj.FirstName + ' ' + user.userObj.LastName
    }
  }

  async componentDidMount() {
    await this.checkSavedData();
  }

  async checkSavedData() {
    let userObj = user.userObj;
    if (userObj.balance)
      this.setData(balance);
    else {
      userObj.balance = 0;
      await user.saveData(userObj);
      this.setState({ loading: false })
    }
  }

  setData(data) {
    const {
      balance
    } = data;
    this.setState({ loading: false, balance: balance })
  }

  render() {
    const { loading, balance, userName } = this.state;
    if (loading)
      return <AppLoader />
    return (
      <View style={{ alignItems: 'center', width: '100%', height: '100%' }}>
        <View style={{ top: 0, position: 'absolute', backgroundColor: GLOBAL.Color.c1, height: '25%', width: '100%' }} />
        <AppTopBar title={'My Wallet'} />
        <View style={{
          borderColor: GLOBAL.Color.grey, borderWidth: 0.5, marginTop: heightPixel(20), borderRadius: normalize(20),
          backgroundColor: '#FA9A3B', width: '91%', justifyContent: 'center', height: heightPixel(195)
        }}>
          <View style={{ justifyContent: 'space-between', alignSelf: 'center', width: '90%', height: '77%' }}>
            <AppText textAlign={'left'} text={'Balance'} color={'white'} size={17} />
            <AppText textAlign={'left'} text={'$' + balance} color={'white'} size={42} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <AppText textAlign={'left'} text={userName} color={'white'} size={16} />
            </View>
          </View>
        </View>
        <AppText marginTop={20} width={320} textAlign={'left'} color={GLOBAL.Color.darkGrey} text={'History'} size={20} />
        <AppText marginTop={30} width={320} color={GLOBAL.Color.darkGrey} text={'No Transactions'} size={20} />
      </View>
    );
  }

}
export default Wallet;
