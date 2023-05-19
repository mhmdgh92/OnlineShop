import React from 'react';
import { View, Alert } from 'react-native';
import { AppTopBar, AppFlatList } from '../Common/';
import FavItem from './Components/FavItem';

class MyFav extends React.Component {

  componentDidMount() {
    Alert.alert('This screen is under development');
  }

  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <AppTopBar title={'Favourites'} />
        <AppFlatList numColumns={1} renderItem={({ item }) => <FavItem item={item} />} />
      </View>
    );
  }
}

export default MyFav;
