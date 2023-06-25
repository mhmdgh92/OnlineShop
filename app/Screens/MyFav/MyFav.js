import React, { useEffect } from 'react';
import { View, Alert } from 'react-native';
import { AppTopBar, AppFlatList } from '../Common/';
import { FavItem } from './Components/FavItem';

/**
 * Component for the My Favorites screen.
 */
export function MyFav() {

  // Run onMount function when the component mounts
  useEffect(() => {
    onMount();
  }, []);

  /**
   * Function to be executed on component mount.
   * Displays an alert indicating that the screen is under development.
   */
  function onMount() {
    Alert.alert('This screen is under development');
  }

  return (
    <View style={{ alignItems: 'center' }}>
      {/* Top Bar */}
      <AppTopBar title={'Favorites'} />

      {/* Flat List */}
      <AppFlatList
        numColumns={1}
        renderItem={({ item }) => <FavItem item={item} />}
      />
    </View>
  );
}
