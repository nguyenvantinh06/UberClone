import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';

import {store} from './appRedux/store/store';
export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Uber Clone</Text>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
