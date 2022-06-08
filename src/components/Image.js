import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const ImageView = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../images/logo.png')}
        style={{
          width: 150,
          height: 100,
          resizeMode: 'contain',
          alignSelf: 'center',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
});

export default ImageView;
