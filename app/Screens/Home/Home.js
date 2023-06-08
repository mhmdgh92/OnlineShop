import React, { useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { AppBottomBar, AppLoader, AppHorListOfItems, AppSearchBar } from '../Common/';
import { BigPromo, TwoPromos, WideBanner } from './Components/';
import { useSelector, useDispatch } from 'react-redux';
import { loadHomeData } from "../../redux/slices/homeSlice";
import { styles } from "./style";

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

  const {
    container,
    scrollableArea,
    innerView,
    bottomView
  } = styles;

  useEffect(() => {
    LoadHomeData();
  }, []);

  if (homeIsLoading)
    return <AppLoader />

  return (
    <View style={container}>
      <AppSearchBar />
      <View style={scrollableArea}>
        <ScrollView>
          <View style={innerView}>
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
            <View style={bottomView} />
          </View>
        </ScrollView>
      </View>
      <AppBottomBar choosed={0} />
    </View>
  );
}