import { View } from 'react-native';
import { AppTopBar, LogoAndName, AppText } from '../Common/';
const GLOBAL = require('../Common/Globals');

export function Privacy() {

  return (
    <View style={{ alignItems: 'center' }}>
      <AppTopBar title={'Privacy Policty'} />
      <LogoAndName height={85} marginTop={8} />
      <AppText marginTop={0} text="Privacy Policty" size={24} />
      <AppText width={350} textAlign={'left'} marginTop={20}
        text={"\n OnlineShop is a mock mobile application that provides shopping services, made by me, Mohammed Ghabyen. \n\nThis application is developed using React-Native.\n \nI hope you find it useful and a good demo for react native apps."}
        size={16} color={GLOBAL.Color.darkGrey} fontFamily={'Montserrat-SemiBold'} />
    </View>
  );
}
