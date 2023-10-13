
import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Background = ({ children }) => {
  return (
    <LinearGradient
      colors={['#e3f9c8', '#e6fe95', '#f0dd71', '#fbe982']}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={{
        width: '100%',
        height: '100%',
        elevation: 10,
        padding: 5,
        borderTopRightRadius: 300,
      }}
    >
      {children}
    </LinearGradient>
  );
};

export default Background;
