import React, { useEffect } from 'react';
import { View } from 'react-native';
import { heightPixel } from '../Common/Utils/PixelNormalization';
import { AppTopBar, AppFlatList, AppLoader, AppProductItem } from '../Common/';
import { useSelector, useDispatch } from 'react-redux';
import { loadProductsData } from "../../redux/slices/productsSlice";
import { styles } from "./style";

export default function Products({ route: { params } }) {

  //Dispatch
  const dispatch = useDispatch();
  //States
  const productsSlice = useSelector(state => state.products);
  //products Reducers
  const LoadProductsData = (data) => { dispatch(loadProductsData(data)); }

  const {
    secitionID = 0,
    secitionName = ''
  } = params;

  const {
    productsState,
    productsIsLoading
  } = productsSlice;

  const {
    container,
    innerView,
    productsFlatList,
    bottomMarginView
  } = styles;

  useEffect(() => {
    LoadProductsData({ secitionID: secitionID, secitionName: secitionName });
  }, []);

  if (productsIsLoading)
    return <AppLoader />

  return (
    <View style={container}>
      <AppTopBar title={secitionName} />
      <View style={innerView}>
        <AppFlatList style={productsFlatList} numColumns={2} data={productsState.data}
          renderItem={({ item }) => <AppProductItem height={heightPixel(300)} item={item} />} />
        <View style={bottomMarginView} />
      </View>
    </View>
  );
}
