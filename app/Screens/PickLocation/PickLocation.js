import React, {Component} from 'react';
import {Text,View ,TouchableOpacity,StyleSheet,Alert,I18nManager,Dimensions,
  StatusBar,Image,ActivityIndicator,PermissionsAndroid,BackHandler,DeviceEventEmitter,Platform} from 'react-native';
import MapView,{Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";
import Permissions from 'react-native-permissions';
import {AppIcon,AppBTN,AppTopBar} from '../Common/';
const GLOBAL = require('../Common/Globals');

class PickLocation extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      firstLat:null,
      firstLon:null,
       latitude: null,
       longitude: null,
       marginBottom:0,
    }
  }

  componentDidMount() {
    LocationServicesDialogBox.checkLocationServicesIsEnabled({
    message: "<h2 style='color: #0af13e'>Use Location ?</h2>This app wants to change your device settings:<br/><br/>Use GPS, Wi-Fi, and cell network for location<br/><br/><a href='#'>Learn more</a>",
    ok: "YES",
    cancel: "NO",
    enableHighAccuracy: true, // true => GPS AND NETWORK PROVIDER, false => GPS OR NETWORK PROVIDER
    showDialog: true, // false => Opens the Location access page directly
    openLocationServices: true, // false => Directly catch method is called if location services are turned off
    preventOutSideTouch: false, // true => To prevent the location services window from closing when it is clicked outside
    preventBackClick: true, // true => To prevent the location services popup from closing when it is clicked back button
    providerListener: false // true ==> Trigger locationProviderStatusChange listener when the location state changes
  }).then((success) => {
    this._requestPermission();
  }).catch((error) => {
    this.props.navigation.goBack();
  });
  DeviceEventEmitter.addListener('locationProviderStatusChange', (status) => { // only trigger when "providerListener" is enabled
  });
}
    componentWillUnmount() {
        // used only when "providerListener" is enabled
        LocationServicesDialogBox.stopListener(); // Stop the "locationProviderStatusChange" listener
        clearInterval(this._interval);
    }

     _requestPermission () {
    Permissions.request('location').then(() => {
      Geolocation.getCurrentPosition(
          (position) => {
              this.setState({ latitude: position.coords.latitude,longitude: position.coords.longitude
              ,firstLat: position.coords.latitude,firstLon: position.coords.longitude})
          },
          (error) => {
          },
          {timeout: 15000}
      );
    });
  }

   onRegionChange(NewCoord){
     // console.log(NewCoord);
    // this.setState({MapSetted:true,longitude:NewCoord.longitude,latitude:NewCoord.latitude,firstLat:this.firstLat,firstLon:this.firstLon});
  }

  onContinueClicked (){
    Alert.alert('Your order is being processed!');
    this.props.navigation.navigate('Home');
  }


  render() {
    if(this.state.latitude===null)
      return <ActivityIndicator style={{width:'100%',height:'100%'}} size={40}/>
    return (
      <View style={{width:'100%',height:'100%',alignItems:'center'}}>
          <AppTopBar title={'Pick Delivery Location'}/>
          <MapView
          style={{width:'100%',height:'90%'}}
          showsUserLocation
          onMapReady={() => this.setState({ marginBottom: 1 })}
          showsMyLocationButton
          showsCompass
          onRegionChange={this.onRegionChange}
          initialRegion={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.015,
          }}
          />
            <AppIcon style={{opacity:0.85,position:'absolute',top:'40%'}} name={'map-marker'} color={GLOBAL.Color.c1} size={60}/>
            <AppBTN text={'Confirm Location'} style={{position:'absolute',bottom:'5%'}} onPress={()=>this.onContinueClicked()}/>
      </View>
    );
  }

}
export default PickLocation;
