import {StyleSheet, Image, View} from 'react-native';
import React from 'react';

export default function SpalshScren() {
  return (
    <View>
      <Image
        source={require('../Images/splash.png')}
        resizeMode='contain'
        style={{width: '100%', height: '100%',backgroundColor:'white'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
