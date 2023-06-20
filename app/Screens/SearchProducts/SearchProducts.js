import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { heightPixel } from '../Common/Utils/PixelNormalization';
import { AppTopBar, AppFlatList, AppLoader, AppProductItem, AppText, AppIcon } from '../Common/';
const GLOBAL = require('../Common/Globals');
import { useSelector, useDispatch } from 'react-redux';
import { searchProduct } from '../../redux/slices/productsSlice';
import { styles } from "./styles";
import PropTypes from 'prop-types';

export function SearchProducts({ route: { params: { searchInput = '' } } }) {

  const [dataLoaded, setDataLoaded] = useState(false);
  //Dispatch
  const dispatch = useDispatch();
  //States
  const productsSlice = useSelector(state => state.products);
  //Reducers
  const SearchProduct = (data) => { dispatch(searchProduct(data)); }

  const {
    searchProductsState,
    searchProductsIsLoading
  } = productsSlice;

  const {
    emptyContainer,
    emptyView,
    container,
    innerView,
    flatList
  } = styles;

  useEffect(() => {
    if (dataLoaded && searchProductsState) {
      setDataLoaded(false);
      return;
    }
    if (!dataLoaded) {
      setDataLoaded(true);
      SearchProduct({ searchInput });
    }
  }, [searchProductsState]);

  if (searchProductsIsLoading)
    return <AppLoader />

  if (!searchProductsState || searchProductsState.length === 0)
    return (
      <View style={emptyContainer}>
        <AppTopBar title={'Results'} />
        <View style={emptyView}>
          <AppIcon name={'magnify-remove-outline'} color={GLOBAL.Color.grey} size={170} />
          <AppText marginTop={10} text="No Results Found!" color={GLOBAL.Color.black} size={20} />
        </View>
      </View>
    );

  return (
    <View style={container}>
      <AppTopBar title={'Results'} />
      <View style={innerView}>
        <AppFlatList style={flatList} numColumns={2} data={searchProductsState}
          renderItem={({ item }) => <AppProductItem height={heightPixel(300)} item={item} />} />
        <View style={marginBottom} />
      </View>
    </View>
  );
}

SearchProducts.propTypes = {
  searchInput: PropTypes.string.isRequired
};