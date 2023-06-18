import React, { useEffect } from 'react';
import { View } from 'react-native';
import { AppTopBar, AppFlatList, AppBottomBar, AppLoader } from '../Common/';
import BrandItem from './Components/BrandItem';
import { useSelector, useDispatch } from 'react-redux';
import { loadData } from "../../redux/slices/brandsSlice";
import { styles } from "./styles";

export default function Brands() {

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

  const {
    container,
    innerView
  } = styles;

  useEffect(() => {
    LoadData();
  }, []);

  if (brandsIsLoading)
    return <AppLoader />
  return (
    <View style={container}>
      <AppTopBar title={'Brands'} />
      <View style={innerView}>
        <AppFlatList numColumns={2} data={brandsState} renderItem={({ item }) => <BrandItem key={item.id} item={item.data} />} />
      </View>
    </View>
  );
}