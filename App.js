import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import Login from './src/components/Login';
import Header from './src/components/Header';

const App = () => {
  console.log('App.js');
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Login />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#E1EEF3'},
});

export default App;
