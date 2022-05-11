import React from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import styles from './styles';
import NavOptions from '../../components/NavOptions';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from '@env';
import {setDestination, setOrigin} from '~/appRedux/slices/navSlices';
import {useDispatch} from 'react-redux';
// navigator.geolocation = require('react-native-geolocation-service');

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{width: 100, height: 100, resizeMode: 'contain', marginLeft: 10}}
        source={{uri: 'https://links.papareact.com/gzs'}}
      />
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          container: {
            flex: 0,
            borderColor: 'grey',
            borderWidth: 1,
            marginHorizontal: 10,
          },
          textInput: {fontSize: 18},
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        fetchDetails={true}
        returnKeyType={'search'}
        minLength={2}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: 'vi',
        }}
        enablePowerByContainer={false}
        debounce={400}
        //get Current Location
        // currentLocation={true}
        // currentLocationLabel="Current location"
        requestUrl={{
          useOnPlatform: 'web', // or "all"
          url: 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api', // or any proxy server that hits https://maps.googleapis.com/maps/api
          headers: {
            Authorization: `an auth token`, // if required for your proxy
          },
        }}
      />
      <NavOptions />
    </SafeAreaView>
  );
};
export default HomeScreen;
