import React from 'react';
import {View} from 'react-native';
const GLOBAL = require('../../Common/Globals');
import {AppListItem} from '../../Common/';

  const ListItem = (props) => {

    const{
      icon,
      title
    } = props;

    return (
      <AppListItem icon={icon} title={title}>
        <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
          {props.children}
        </View>
      </AppListItem>
    );
}

export default ListItem;
