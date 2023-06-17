import React, { useEffect } from 'react';
import { View } from 'react-native';
import { AppTopBar, AppFlatList, AppBottomBar, AppLoader } from '../Common/';
import SectionItem from './Components/SectionItem';
import { useSelector, useDispatch } from 'react-redux';
import { loadSectionsData } from "../../redux/slices/sectionsSlice";
import { styles } from "./style";

export default function Sections(props) {

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

  const {
    container
  } = styles;

  useEffect(() => {
    console.log('props:'+JSON.stringify(props))
    LoadSectionsData();
  }, []);

  console.log('sectionsIsLoading:' + sectionsIsLoading)

  if (sectionsIsLoading)
    return <AppLoader />

  return (
    <View style={container}>
      <AppTopBar title={'Main Sections'} />
      <AppFlatList numColumns={2} data={sectionsState} renderItem={({ item, id }) => <SectionItem key={id} item={item} />} />
    </View>
  );
}