import React, { useEffect } from 'react';
import { View } from 'react-native';
import { AppTopBar, AppFlatList, AppBottomBar, AppLoader } from '../Common/';
import SectionItem from './Components/SectionItem';
import { useSelector, useDispatch } from 'react-redux';
import { loadSectionsData } from "../../redux/slices/sectionsSlice";


export default function Sections() {

  //Dispatch
  const dispatch = useDispatch();
  //States
  const sectionsSlice = useSelector(state => state.sections);
  //sections Reducers
  const LoadSectionsData = () => { dispatch(loadSectionsData()); }

  const {
    sectionsState,
    sectionsIsLoading
  } = sectionsSlice;

  useEffect(() => {
    LoadSectionsData();
  }, []);

  console.log('sectionsIsLoading:' + sectionsIsLoading)

  if (sectionsIsLoading)
    return <AppLoader />

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <AppTopBar title={'Main Sections'} />
      <AppFlatList numColumns={2} data={sectionsState} renderItem={({ item, id }) => <SectionItem key={id} item={item} />} />
      <AppBottomBar choosed={1} />
    </View>
  );
}