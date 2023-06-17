import React from 'react'
import Home from './Screens/Home/Home';
import Welcome from './Screens/Welcome/Welcome';
import Login from './Screens/Auth/Login';
import Register from './Screens/Auth/Register';
import ForgetPass from './Screens/Auth/ForgetPass';
import Profile from './Screens/Profile/Profile';
import Shipping from './Screens/Shipping/Shipping';
import About from './Screens/About/About';
import Brands from './Screens/Brands/Brands';
import MyFav from './Screens/MyFav/MyFav';
import MyOrders from './Screens/MyOrders/MyOrders';
import Products from './Screens/Products/Products';
import SearchProducts from './Screens/SearchProducts/SearchProducts';
import ProductDetails from './Screens/ProductDetails/ProductDetails';
import Settings from './Screens/Settings/Settings';
import HelpCenter from './Screens/HelpCenter/HelpCenter';
import NavScreen from './Screens/NavScreen/NavScreen';
import Wallet from './Screens/Wallet/Wallet';
import Sections from './Screens/Sections/Sections';
import SubSections from './Screens/SubSections/SubSections';
import PickLocation from './Screens/PickLocation/PickLocation';
import Cart from './Screens/Cart/Cart';
import ContactUs from './Screens/ContactUs/ContactUs';
import Terms from './Screens/Terms/Terms';
import Privacy from './Screens/Privacy/Privacy';
import { AppIcon, AppText } from './Screens/Common/';
import { createNavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const GLOBAL = require('./Screens/Common/Globals');

const screenOpotions = { headerShown: false };
const Stack = createStackNavigator();

function AuthStack() {

  return (
    <Stack.Navigator screenOptions={screenOpotions}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgetPass" component={ForgetPass} />
    </Stack.Navigator>
  );
}

function HomeStack() {

  return (
    <Stack.Navigator screenOptions={screenOpotions}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MyOrders" component={MyOrders} />
      <Stack.Screen name="SearchProducts" component={SearchProducts} />
      <Stack.Screen name="NavScreen" component={NavScreen} />
      <Stack.Screen name="Wallet" component={Wallet} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="HelpCenter" component={HelpCenter} />
      <Stack.Screen name="MyFav" component={MyFav} />
      <Stack.Screen name="Privacy" component={Privacy} />
      <Stack.Screen name="Terms" component={Terms} />
      <Stack.Screen name="ContactUs" component={ContactUs} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

function ProductsStack() {

  return (
    <Stack.Navigator screenOptions={screenOpotions}>
      <Stack.Screen name="Sections" component={Sections} />
      <Stack.Screen name="SubSections" component={SubSections} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="ProductDetails" component={ProductDetails}

        listeners={({ navigation }) => ({
          blur: () => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'Sections' }],
            });
          }
        })}

      />
    </Stack.Navigator>
  );
}

function CartStack() {

  return (
    <Stack.Navigator screenOptions={screenOpotions}>
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Shipping" component={Shipping} />
      <Stack.Screen name="PickLocation" component={PickLocation} />
    </Stack.Navigator>
  );
}

function BrandsStack() {
  return (
    <Stack.Navigator screenOptions={screenOpotions}>
      <Stack.Screen name="Brands" component={Brands} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={screenOpotions}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: GLOBAL.Color.background,
  }
};

const Tab = createBottomTabNavigator();

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

const tabItemOpts = (name, iconName) => {
  if (name === 'none') {
    return {
      tabBarVisible: false,
      tabBarButton: () => null,
      tabBarStyle: { display: "none" }
    }
  }
  return {
    tabBarLabel: ({ focused }) => (<AppText text={name} color={focused ? GLOBAL.Color.c1 : GLOBAL.Color.inActiveColor} size={10} />),
    tabBarIcon: ({ focused }) => (<AppIcon name={iconName} size={27.5} color={focused ? GLOBAL.Color.c1 : GLOBAL.Color.inActiveColor} />),
  }
}

export default function MyTabs() {
  return (
    <NavigationContainer ref={navigationRef} theme={navTheme}>
      <Tab.Navigator initialRouteName="AuthStack"
        screenOptions={{ headerShown: false }}>
        <Tab.Screen name="HomeStack" component={HomeStack} options={tabItemOpts('Home', 'home')} />
        <Tab.Screen name="AuthStack" component={AuthStack} options={tabItemOpts('none')} />
        <Tab.Screen name="ProductsStack" component={ProductsStack} options={tabItemOpts('Sections', 'format-list-bulleted')} />
        <Tab.Screen name="BrandsStack" component={BrandsStack} options={tabItemOpts('Brands', 'podium')} />
        <Tab.Screen name="CartStack" component={CartStack} options={tabItemOpts('Cart', 'cart')} />
        <Tab.Screen name="ProfileStack" component={ProfileStack} options={tabItemOpts('Profile', 'account')} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}