import React from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import styles from './styles';
import NavOptions from '../../components/NavOptions';
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{width: 100, height: 100, resizeMode: 'contain', marginLeft: 10}}
        source={{uri: 'https://links.papareact.com/gzs'}}
      />
      <NavOptions />
    </SafeAreaView>
  );
};
export default HomeScreen;
