import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Map from '../../components/Map';

const MapScreen = () => {
  return (
    <SafeAreaView>
      <Text>MapScreen</Text>
      <View style={{height: '50%'}}>
        <Map />
      </View>
      <View style={{height: '50%'}}>
        <Map />
      </View>
    </SafeAreaView>
  );
};
export default MapScreen;
