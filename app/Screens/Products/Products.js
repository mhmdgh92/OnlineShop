import React, { useEffect } from 'react';
import { View } from 'react-native';
import { heightPixel } from '../Common/Utils/PixelNormalization';
import { AppTopBar, AppFlatList, AppLoader, AppProductItem } from '../Common/';
import { useSelector, useDispatch } from 'react-redux';
import { loadProductsData } from "../../redux/slices/productsSlice";

export default function Products(props) {

  //Dispatch
  const dispatch = useDispatch();
  //States
  const productsSlice = useSelector(state => state.products);
  //products Reducers
  const LoadProductsData = (data) => { dispatch(loadProductsData(data)); }

  const {
    secitionID,
    secitionName
  } = props.route.params;

  const {
    productsState,
    productsIsLoading
  } = productsSlice;

  useEffect(() => {
    LoadProductsData({ secitionID: secitionID, secitionName: secitionName });
  }, []);

  if (productsIsLoading)
    return <AppLoader />

  return (
    <View style={{ alignItems: 'center' }}>
      <AppTopBar title={secitionName} />
      <View style={{ height: '100%', width: '95%' }}>
        <AppFlatList style={{ width: '100%' }} numColumns={2} data={productsState.data}
          renderItem={({ item }) => <AppProductItem height={heightPixel(300)} item={item} />} />
        <View style={{ height: '16%' }} />
      </View>
    </View>
  );
}
