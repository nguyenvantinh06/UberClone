import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import styles from './styles';
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{width: 100, height: 100, resizeMode: 'contain', marginLeft: 5}}
        source={{uri: 'https://links.papareact.com/gzs'}}
      />
    </SafeAreaView>
  );
};
export default HomeScreen;
