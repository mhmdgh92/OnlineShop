import React from 'react';
import { View } from 'react-native';
import { AppListItem } from '../../Common/';
import { listItemStyle } from "./styles";

export const ListItem = (props) => {

  const {
    icon,
    title,
    children
  } = props;

  const {
    container
  } = listItemStyle;

  return (
    <AppListItem icon={icon} title={title}>
      <View style={container}>
        {children}
      </View>
    </AppListItem>
  );
}
