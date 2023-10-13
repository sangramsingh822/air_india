import {StyleSheet, Text, View, StatusBar, useColorScheme} from 'react-native';
import React, {useEffect, useContext} from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../src/Login';
import YourComponent from '../src/YourComponet';
import {AuthContext} from '../src/context/AuthContext';
import SpalshScren from '../src/component/SpalshScreen';
import ContractType from '../src/screens/ContractType';

//new files added here

const Stack = createStackNavigator();

const StackNavigator = () => {
  const scheme = useColorScheme();
  const {user, splashLoader} = useContext(AuthContext);

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <StatusBar backgroundColor="white" barStyle="light-content" />
      <Stack.Navigator>
        {splashLoader ? (
          <>
            <Stack.Screen
              name="splash screen"
              component={SpalshScren}
              options={{headerShown: false}}
            />
          </>
        ) : user === null ? (
          <>
            {/* <Stack.Screen
              name="contractType"
              component={ContractType}
              options={{headerShown: false}}
            /> */}
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Dashboard"
              component={YourComponent}
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({
  header: {
    marginRight: 15,
  },
});
