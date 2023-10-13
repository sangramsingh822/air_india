import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import DrawerScreen from './Drawer';
import TopNav from './screens/TopNav';

const YourComponent = () => {
 
  return (
    <View style={{flex: 1}}>
      <TopNav />
      <DrawerScreen />
    </View>
  );
};

export default YourComponent;
