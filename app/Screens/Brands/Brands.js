import React, { useEffect } from 'react';
import { View } from 'react-native';
import { AppTopBar, AppFlatList, AppBottomBar, AppLoader } from '../Common/';
import BrandItem from './Components/BrandItem';
import { useSelector, useDispatch } from 'react-redux';
import { loadData } from "../../redux/slices/brandsSlice";

export default function Brands(props) {

  //Dispatch
  const dispatch = useDispatch();
  //States
  const brandsSlice = useSelector(state => state.brands);
  //products Reducers
  const LoadData = (data) => { dispatch(loadData(data)); }

  const {
    brandsState,
    brandsIsLoading
  } = brandsSlice;

  useEffect(() => {
    LoadData();
  }, []);

  if (brandsIsLoading)
    return <AppLoader />
  return (
    <View style={{ height: '100%', width: '100%', alignItems: 'center' }}>
      <AppTopBar title={'Brands'} />
      <View style={{ height: '83%' }}>
        <AppFlatList numColumns={2} data={brandsState} renderItem={({ item }) => <BrandItem key={item.id} item={item.data} />} />
      </View>
      <AppBottomBar choosed={2} />
    </View>
  );
}