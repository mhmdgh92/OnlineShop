import React from 'react';
import { View, TouchableOpacity } from 'react-native';
const GLOBAL = require('./Globals');
import { AppText, AppIcon } from './';
import * as RootNavigation from '../../RootNav.js';
import { appBottomBarStyle } from "./styles";

const AppBottomBar = (props) => {

  const {
    container,
    itemStyle
  } = appBottomBarStyle;

  function Item(pars) {
    const {
      name,
      iconName,
      choosed
    } = pars;


    const onClick = () => {
      RootNavigation.navigate(name);
    }

    return (
      <View style={itemStyle}>
        <TouchableOpacity onPress={onClick}>
          <AppIcon name={iconName} size={30} color={choosed ? GLOBAL.Color.c1 : GLOBAL.Color.darkGrey} />
          <AppText text={name} color={choosed ? GLOBAL.Color.c1 : GLOBAL.Color.darkGrey} size={10} />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={container}>
      <Item choosed={props.choosed == 0} name={'Home'} iconName={'home'} />
      <Item choosed={props.choosed == 1} name={'Sections'} iconName={'format-list-bulleted'} />
      <Item choosed={props.choosed == 2} name={'Brands'} iconName={'podium'} />
      <Item choosed={props.choosed == 3} name={'Cart'} iconName={'cart'} />
      <Item choosed={props.choosed == 4} name={'Profile'} iconName={'account'} />
    </View>
  );
};
export default AppBottomBar;
