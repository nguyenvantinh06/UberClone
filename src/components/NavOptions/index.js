import React from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
const dummyDATA = [
  {
    id: '123',
    title: 'Get a Ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: '456',
    title: 'Order Food',
    image: 'https://links.papareact.com/28w',
    screen: 'EatScreen', //change after
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{marginRight: 10}}
        onPress={() => navigation.navigate(item.screen)}>
        <View style={styles.containerNavOptions}>
          <Image
            source={{uri: item.image}}
            style={{
              width: 120,
              height: 120,
              resizeMode: 'contain',
            }}
          />
          <Text style={styles.textNavOptionsTitle}>{item.title}</Text>
          <Icon
            style={styles.iconNavOptions}
            name="arrow-right"
            color="white"
            type="feather"
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      style={{marginLeft: 10}}
      horizontal
      data={dummyDATA}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  );
};
export default NavOptions;
