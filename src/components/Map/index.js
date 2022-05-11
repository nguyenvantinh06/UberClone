import React from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
// import styles from './styles';
// import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import MapView from 'react-native-maps';

const Map = () => {
  return (
    <View style={{flex:1}}>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};
export default Map;
