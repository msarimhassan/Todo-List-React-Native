import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Icons } from '../common';

const Header = () => {
return (
  <View style={styles.container}>
    <Icons.IonIcons name="arrow-back" size={30} color="#232428" />
    <Text style={styles.text}>Todo List</Text>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C7E4E8',
    padding: 10,
  },
  text: {
    fontSize: 30,
    marginLeft: 20,
    color: '#232428',
    fontWeight:'bold',
    fontFamily:'Raleway'
  },
});

export default Header;