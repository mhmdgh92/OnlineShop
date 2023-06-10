import React from 'react';
import { View } from 'react-native';
import { AppListItem } from '../../Common/';
import { listItemStyle } from "./styles";

const ListItem = (props) => {

  const {
    icon,
    title
  } = props;

  const {
    container
  } = listItemStyle;

  return (
    <AppListItem icon={icon} title={title}>
      <View style={container}>
        {props.children}
      </View>
    </AppListItem>
  );
}

export default ListItem;
