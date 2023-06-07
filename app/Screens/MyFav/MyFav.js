import React, { useEffect } from 'react';
import { View, Alert } from 'react-native';
import { AppTopBar, AppFlatList } from '../Common/';
import FavItem from './Components/FavItem';

export default function MyFav(props) {

  useEffect(() => {
    onMount();
  }, []);

  function onMount() {
    Alert.alert('This screen is under development');
  }

  return (
    <View style={{ alignItems: 'center' }}>
      <AppTopBar title={'Favourites'} />
      <AppFlatList numColumns={1} renderItem={({ item }) => <FavItem item={item} />} />
    </View>
  );
}