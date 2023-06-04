import React, { useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { AppBottomBar, AppLoader, AppHorListOfItems, AppSearchBar } from '../Common/';
import { BigPromo, TwoPromos, WideBanner } from './Components/';
import { heightPixel } from '../Common/Utils/PixelNormalization';
import { useSelector, useDispatch } from 'react-redux';
import { loadHomeData } from "../../redux/slices/homeSlice";

export default function Home(props) {

  //Dispatch
  const dispatch = useDispatch();
  //States
  const homeSlice = useSelector(state => state.home);
  //Home Reducers
  const LoadHomeData = () => { dispatch(loadHomeData()); }

  const {
    homeState,
    homeIsLoading
  } = homeSlice;

  useEffect(() => {
    LoadHomeData();
  }, []);

  if (homeIsLoading)
    return <AppLoader />

  return (
    <View style={{ height: '100%', width: '100%' }}>
      <AppSearchBar />
      <View style={{ marginTop: '1%', height: '82%', width: '100%' }}>
        <ScrollView>
          <View style={{ alignItems: 'center' }}>
            <BigPromo data={homeState[0].data} />
            <TwoPromos data={homeState[4].data} />
            <WideBanner data={homeState[5].data[0].image} />
            <AppHorListOfItems data={homeState[2].data} />
            <WideBanner data={homeState[5].data[1].image} />
            <AppHorListOfItems data={homeState[3].data} />
            <WideBanner data={homeState[5].data[2].image} />
            <AppHorListOfItems data={homeState[1].data[0].products} />
            <WideBanner data={homeState[5].data[3].image} />
            <AppHorListOfItems data={homeState[1].data[1].products} />
            <WideBanner data={homeState[5].data[4].image} />
            <WideBanner data={homeState[5].data[5].image} />
            <AppHorListOfItems data={homeState[1].data[2].products} />
            <View style={{ height: heightPixel(10) }} />
          </View>
        </ScrollView>
      </View>
      <AppBottomBar choosed={0} />
    </View>
  );
}