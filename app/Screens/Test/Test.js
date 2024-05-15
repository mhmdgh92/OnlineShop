import { View } from 'react-native';
import { AppBTN } from '../Common/';
const GLOBAL = require('../Common/Globals');

/**
 * Component for the Test screen.
 */
export function Test() {

  async function testFun() {
    console.log('testFun');
  }

  return (
    <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <AppBTN onPress={loadData} text={'Login'} marginTop={45} />
    </View>
  );
}